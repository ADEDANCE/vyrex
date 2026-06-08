import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import User from "@/models/User";

type Level = "beginner" | "intermediate" | "expert";

export async function GET(
  req: NextRequest,
  { params }: { params: { level: string } },
) {
  try {
    await db();

    // Extract level from URL.
    const { level } = params;

    const userId = req.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch user from MongoDB.
    const user = await User.findById(userId);

    // stop If user doesn’t exist
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // const progress = user.progress[level];

    // if (!progress?.completed) {
    //   return NextResponse.json(
    //     { error: "Course not completed yet" },
    //     { status: 403 },
    //   );
    // }

    const certificateData = {
      studentName: user.name,
      courseLevel: level,
      completionDate: new Date().toDateString(),
    };
    return NextResponse.json(certificateData);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
