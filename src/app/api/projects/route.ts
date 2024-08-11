export const revalidate = 0;
import Project from "@/models/projects";
import { NextResponse } from "next/server";
import connectDb from "@/config/db";
connectDb();

export async function GET() {
  try {
    const projects = await Project.find({}).sort({ updatedAt: -1 }).lean();
    return NextResponse.json(
      {
        projects,
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}
