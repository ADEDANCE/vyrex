import { NextResponse } from "next/server";

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
      return NextResponse.json({
        success: true,
        message: "Payment verified",
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
