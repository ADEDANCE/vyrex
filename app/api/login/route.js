import User from "../../../models/User";
import bcrypt from "bcrypt";
import { db } from "../../../lib/db";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  // Connect to DB
  await db();

  if (!email || !password) {
    return Response.json(
      { success: false, error: "All fields are required " },
      { status: 400 },
    );
  }

  //   find user
  const usermail = email.toLowerCase();

  const user = await User.findOne({ email: usermail });

  if (!user) {
    return Response.json(
      { success: false, error: "Invalid email or password" },
      { status: 401 },
    );
  }

  //   Compare password
  const isMatch = await bcrypt.compare(body.password, user.password);

  // Check password result
  if (!isMatch) {
    return Response.json(
      { success: false, error: "Invalid email or password" },
      { status: 400 },
    );
  }

  // Generate JWT
  const payload = { id: user._id, email: user.email, role: user.role };
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  //   delete user password
  const userResponse = user.toObject();
  delete userResponse.password;

  return Response.json(
    {
      success: true,
      message: "Login successful",
      token: token,
      data: userResponse,
    },
    { status: 200 },
  );
}
