import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcrypt";

import User from "@/models/User";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  await db();

  const body = await request.json();

  const { token, password } = body;

  // Hash the incoming token
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // find the user
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {
      $gt: new Date(),
    },
  });

  // Handle invalid tokens
  if (!user) {
    return NextResponse.json(
      {
        message: "Invalid or expired reset link.",
      },
      {
        status: 400,
      },
    );
  }

  // Hash the New Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update the User's Password
  user.password = hashedPassword;

  // Remove the Reset Token
  user.passwordResetToken = undefined;

  await user.save();

  return NextResponse.json({
    message: "Password reset successfully.",
  });
}
