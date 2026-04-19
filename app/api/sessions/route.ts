import { NextResponse } from "next/server";
import { demoStore } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ sessions: demoStore.sessions, total: demoStore.sessions.length });
}
