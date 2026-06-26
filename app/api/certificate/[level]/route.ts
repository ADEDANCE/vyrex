import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import User from "@/models/User";

type Level = "beginner" | "intermediate" | "expert";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ level: string }> },
) {
  // Extract level from URL.
  const { level } = await context.params;
  const courseLevel = level as Level;
  try {
    await db();

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

    const progress = user.progress[courseLevel];

    if (!progress?.completed) {
      return NextResponse.json(
        { error: "Course not completed yet" },
        { status: 403 },
      );
    }

    // Get Certificate Information
    const certificate = user.certificates[courseLevel];
    if (!certificate.claimed) {
      certificate.claimed = true;
      certificate.claimedAt = new Date();

      await user.save();
    }
    const certificateData = {
      studentName: user.name,
      courseLevel: level,
      completionDate: certificate.claimedAt?.toDateString(),
    };

    console.log("LEVEL:", level);
    console.log(certificateData);
    return NextResponse.json(certificateData);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
