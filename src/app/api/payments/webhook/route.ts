import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to read raw request body
async function getRawBody(req: Request): Promise<Buffer> {
  const arrayBuffer = await req.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(req: NextRequest) {
  try {
    const raw = await getRawBody(req);
    const signature = req.headers.get("x-paystack-signature");
    const secret = process.env.PAYSTACK_SECRET_KEY || "";

    const hash = crypto.createHmac("sha512", secret).update(raw).digest("hex");

    if (signature !== hash) {
      console.warn("Invalid paystack signature");
      return new NextResponse("invalid signature", { status: 400 });
    }

    const data = JSON.parse(raw.toString("utf8"));
    console.log("Paystack webhook received:", data.event);

    return new NextResponse("ok", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("error", { status: 500 });
  }
}
