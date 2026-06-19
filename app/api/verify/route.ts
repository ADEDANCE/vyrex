import { NextResponse } from "next/server";
import User from "@/models/User";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { sendCourseAccessEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    // get the request body
    const body = await req.json();
    const reference = body.reference;
    const level = body.level;

    // Validate reference
    if (!reference) {
      return NextResponse.json({
        success: false,
        message: "No reference provided",
      });
    }

    // Validate level
    if (!["beginner", "intermediate", "expert"].includes(level)) {
      return NextResponse.json({
        success: false,
        message: "Invalid level",
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
      userId = (decoded as any).userId;
    } catch {
      return NextResponse.json({
        success: false,
        message: "Invalid token",
      });
    }

    // Connect DB and fetch user

    await db();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    // Prevent skipping levels
    if (level === "intermediate" && !user.progress.beginner.completed) {
      return NextResponse.json({
        success: false,
        message: "Complete beginner first",
      });
    }

    if (level === "expert" && !user.progress.intermediate.completed) {
      return NextResponse.json({
        success: false,
        message: "Complete intermediate first",
      });
    }

    // expected amount
    let expectedAmount = 0;

    if (level === "beginner") expectedAmount = 3000 * 100;
    if (level === "intermediate") expectedAmount = 3000 * 100;
    if (level === "expert") expectedAmount = 4000 * 100;

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
      if (data.data.amount !== expectedAmount) {
        return NextResponse.json({
          success: false,
          message: "Incorrect payment amount",
        });
      }
      // beginner
      if (level === "beginner") {
        user.progress.beginner.paid = true;
        user.currentLevel = "beginner";
      }

      // Intermediate
      if (level === "intermediate") {
        user.progress.intermediate.paid = true;
        user.currentLevel = "intermediate";
      }

      // expert
      if (level === "expert") {
        user.progress.expert.paid = true;
        user.currentLevel = "expert";
      }

      // grant access after payment
      user.access[level] = true;

      // save user
      await user.save();

      await sendCourseAccessEmail(user.email, user.name, level);

  

      return NextResponse.json({
        success: true,
        level,
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
