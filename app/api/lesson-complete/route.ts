
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { db } from "@/lib/db";

type Level = "beginner" | "expert";

export async function POST(req: Request) {
  try {
    //  Get request data
    const body = await req.json();
    const { level, lessonId } = body;

    //  Validate level
    if (!["beginner", "expert"].includes(level)) {
      return NextResponse.json(
        { success: false, message: "Invalid level" },
        { status: 400 }
      );
    }

    //  Validate lessonId
    if (
      (typeof lessonId !== "number" && typeof lessonId !== "string") ||
      String(lessonId).trim() === ""
    ) {
      return NextResponse.json(
        { success: false, message: "Valid lessonId is required" },
        { status: 400 }
      );
    }

    await db();

    // 4. Get user token from cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 5. Verify token
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }

    // 6. Get userId
    const userId = (decoded as any).userId;

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Invalid user token" },
        { status: 401 }
      );
    }

    // 7. Find user
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // 8. Initialize progress if missing
    if (!user.progress) {
      user.progress = {} as any;
    }

    if (!user.progress.beginner) {
      user.progress.beginner = {
        paid: false,
        completedLessons: [],
        completed: false,
      };
    }

    if (!user.progress.expert) {
      user.progress.expert = {
        paid: false,
        completedLessons: [],
        completed: false,
      };
    }

    // 9. Get the correct lesson array
    const lessonArray =
      user.progress[level as Level].completedLessons;

    // 10. Add lesson if not completed before
    if (!lessonArray.includes(lessonId)) {
      lessonArray.push(lessonId);
    }

    // 11. Save progress
    await user.save();

    // 12. Return updated progress
    return NextResponse.json(
      {
        success: true,
        message: "Lesson progress updated successfully",
        progress: user.progress,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Lesson progress error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
