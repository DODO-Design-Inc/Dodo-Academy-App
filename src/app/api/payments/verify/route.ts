import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({ message: "Missing reference" }, { status: 400 });
  }

  const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

  try {
    const verifyResp = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET}`,
        },
      }
    );

    const data = await verifyResp.json();

    if (!verifyResp.ok) {
      return NextResponse.json(
        { message: data.message || "Verification failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: data.data.status === "success",
      data: data.data,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
