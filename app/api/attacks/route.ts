import { NextResponse } from "next/server";
import { demoStore } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ attacks: demoStore.attacks, total: demoStore.attacks.length });
}
