export const revalidate = 0;
import Skills from "@/models/skills";
import { NextResponse } from "next/server";
import connectDb from "@/config/db";
connectDb();

export async function GET() {
  try {
    const skills = await Skills.find({});
    return NextResponse.json(
      {
        skills,
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal server error: " + error.message,
        sucess: false,
      },
      { status: 500 }
    );
  }
}
