import { NextResponse } from "next/server";
import User from "@/models/User";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    // get the request body
    const body = await req.json();
    const reference = body.reference;

    // Validate reference
    if (!reference) {
      return NextResponse.json({
        success: false,
        message: "No reference provided",
      });
    }

    //get token from cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    // Validate token
    if (!token) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    // decode token to get userId
    let userId;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      userId = (decoded as any).id;
    } catch {
      return NextResponse.json({
        success: false,
        message: "Invalid token",
      });
    }

    // Call Paystack verification API
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      },
    );

    // Read Paystack response
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        message: "Paystack request failed",
        data,
      });
    }

    // Check if payment is successful
    if (data?.data?.status === "success") {
      await db();

      // update the user
      await User.findByIdAndUpdate(userId, {
        beginnerPaid: true,
        currentLevel: "beginner",
      });
      return NextResponse.json({
        success: true,
        level: "beginner",
      });
    }

    return NextResponse.json({
      success: false,
      message: "Payment not successful",
      data,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
