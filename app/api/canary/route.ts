import { NextResponse } from "next/server";
import { demoStore } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ tokens: demoStore.canaryTokens, total: demoStore.canaryTokens.length });
}

export async function POST(request: Request) {
  const body = await request.json();
  const token = {
    id: `cny_${Date.now()}`,
    name: body.name || "New Canary",
    type: body.type || "url",
    location: body.location || "/api/unknown",
    tripCount: 0,
    lastTripped: null,
    status: "active",
    createdAt: new Date().toISOString(),
  };
  demoStore.canaryTokens.unshift(token);
  return NextResponse.json(token, { status: 201 });
}
