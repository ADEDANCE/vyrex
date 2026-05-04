import { db } from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();

    // extract fields
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 },
      );
    }

    await db();

    // check if user exist
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return Response.json(
        { success: false, error: "User already exists" },
        { status: 400 },
      );
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Create user object
    const user = new User({
      name: name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    //  Save in try/catch
    let savedUser;

    savedUser = await user.save();

    // remove password
    const userResponse = savedUser.toObject();
    delete userResponse.password;
    // Return response
    return Response.json(
      { success: true, message: "Sign up successful", data: userResponse },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
