import User from "../../../models/User";
import bcrypt from "bcrypt";
import { db } from "../../../lib/db";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { success: false, error: "All fields are required " },
        { status: 401 },
      );
    }

    // Connect to DB
    await db();

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
    const isMatch = await bcrypt.compare(password, user.password);

    // Check password result
    if (!isMatch) {
      return Response.json(
        { success: false, error: "Invalid email or password" },
        { status: 400 },
      );
    }

    // Generate JWT

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    // store cookies instance
    const cookieStore = await cookies();
    // use cookies
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      // secure: process.env.NODE_ENV === "production",
      // sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    //   delete user password
    const userResponse = user.toObject();
    delete userResponse.password;

    return Response.json(
      {
        success: true,
        message: "Login successful",
        // data: userResponse,
      },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
