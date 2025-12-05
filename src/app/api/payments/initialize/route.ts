import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
    if (!PAYSTACK_SECRET) {
      return NextResponse.json(
        { message: "PAYSTACK_SECRET_KEY not set" },
        { status: 500 }
      );
    }

    const amountKobo = Number(55000) * 100;

    const callbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/dda-school-of-research/payment/callback`;

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: body.email,
          amount: amountKobo,
          callback_url: callbackUrl,
          metadata: {
            firstName: body.firstName,
            lastName: body.lastName,
            phone: body.phone,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data?.message || "Paystack init failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
