import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    // get request data
    const body = await req.json();
    const { level, lessonId } = body;

    await db();

    // Get user from cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" });
    }

    // Verify user
    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      return NextResponse.json({ success: false, message: "Invalid token" });
    }

    // get userId
    const userId = (decoded as any).userId;

    // find user
    const user = await User.findById(userId);

    // Initialize progress if missing
    if (!user.progress) {
      user.progress = {
        beginner: { completedLessons: [], completed: false },
        intermediate: { completedLessons: [], completed: false },
        expert: { completedLessons: [], completed: false },
      };
    }

    // Add lesson if not completed before
    const lessonArray = user.progress[level].completedLessons;

    if (!lessonArray.includes(lessonId)) {
      lessonArray.push(lessonId);
    }

    // Check if ALL lessons are done
    const totalLessons = 10; // or dynamic from courseData

    if (lessonArray.length === totalLessons) {
      user.progress[level].completed = true;
    }

    // Unlock next level automatically
    if (level === "beginner" && user.progress.beginner.completed) {
      user.currentLevel = "intermediate";
    }

    if (level === "intermediate" && user.progress.intermediate.completed) {
      user.currentLevel = "expert";
    }

    await user.save();

    return NextResponse.json({
      success: true,
      progress: user.progress,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
