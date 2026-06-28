import { NextResponse } from "next/server";
import crypto from "crypto";
import User from "@/models/User";
import { db } from "@/lib/db";



export async function POST(request: Request) {
    // connect to the database
    await db()
}