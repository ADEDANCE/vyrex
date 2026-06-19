import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { db } from "@/lib/db";
import { sendCertificateEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    // read request body
    const body = await req.json();

    // extract level
    const level = body.level;


















































    

    // Validate level
    if (!["beginner", "intermediate", "expert"].includes(level)) {
      return NextResponse.json({
        success: false,
        message: "Invalid level",
      });
    }
    // Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    // Validate token
    if (!token) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    // decode token
    let userId;

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);

      // extract userid
      userId = (decoded as any).userId;
    } catch {
      return NextResponse.json({
        success: false,
        message: "Invalid token",
      });
    }

    await db();

    // find user
    const user = await User.findById(userId);

    // Validate user exists
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    // mark level completed
    if (level === "beginner") {
      user.progress.beginner.completed = true;
    }

    if (level === "intermediate") {
      user.progress.intermediate.completed = true;
    }

    if (level === "expert") {
      user.progress.expert.completed = true;
    }

    await user.save();


        const courseLink = `${process.env.NEXT_PUBLIC_APP_URL}/course/${level}/certificate`;
    
          await sendCertificateEmail(user.email, user.name, level, courseLink);
    return NextResponse.json({
      success: true,
      level,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
