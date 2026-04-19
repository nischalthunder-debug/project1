import { NextResponse } from "next/server";
import { demoStore } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ threats: demoStore.threats, total: demoStore.threats.length });
}
