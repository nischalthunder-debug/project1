import { NextResponse } from "next/server";
import { demoStore } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ plans: demoStore.pricing });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    success: true,
    message: "Inquiry received. We'll be in touch shortly.",
    inquiry: { ...body, id: `inq_${Date.now()}`, submittedAt: new Date().toISOString() }
  }, { status: 201 });
}
