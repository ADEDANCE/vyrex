import { NextResponse } from "next/server";
import crypto from "crypto";
import User from "@/models/User";
import { db } from "@/lib/db";
import { sendForgotPasswordEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
  // connect to the database
  await db();

  // read the request body:
  const body = await request.json();

  // extract email &name
  const { email, name } = body;
  console.log(email);

  // check if user exist
  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    return NextResponse.json({
      message:
        "If an account exists with this email, a password reset link has been sent.",
    });
  }

  //   Generate a Secure Reset Token
  const resetToken = crypto.randomBytes(32).toString("hex");

  console.log(resetToken);

  // Hash the Token Before Saving
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set the Expiry Time to 15 minutes
  const expires = new Date(Date.now() + 15 * 60 * 1000);

  // Save the Token and Expiry
  user.passwordResetToken = hashedToken;

  user.passwordResetExpires = expires;

  await user.save();

  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;

  await sendForgotPasswordEmail(user.email, resetLink, user.name);

  return NextResponse.json({
    message:
      "If an account exists with this email, a password reset link has been sent.",
  });
}
