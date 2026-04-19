import { NextResponse } from "next/server";
import { getDashboardSummary } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json(getDashboardSummary());
}
