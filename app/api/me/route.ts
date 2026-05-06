import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { db } from "@/lib/db";

export async function GET() {
  await db();

  // Get token from cookie
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  console.log("TOKEN:", token);
  // Check if user is logged in
  if (!token) {
    return NextResponse.json({
      user: null,
      message: "Not authenticated",
    });
  }

  // decode token
  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  const userId = (decoded as any).userId;

  // Get user
  const user = await User.findById(userId).select("-password");

  // Return user
  return NextResponse.json({
    user: user || null,
  });
}
