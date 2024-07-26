import Skills from "@/models/skills";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/config/db";
import { revalidatePath } from "next/cache";
connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { domain, skills } = await reqBody;
    const newSkill = new Skills({
      domain,
      skills,
    });
    await newSkill.save();
    revalidatePath("/about");
    return NextResponse.json(
      {
        message: "Skill added successfully",
        newSkill,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    let errorMessage = "An unexpected error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;

      if (errorMessage.includes("validation failed:")) {
        errorMessage = errorMessage
          .split("validation failed:")[1]
          .split(":")[1];
      }
    }
    return NextResponse.json(
      {
        message: errorMessage,
        success: false,
      },
      { status: 500 }
    );
  }
}
export async function PUT(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { _id, domain, skills } = await reqBody;
    const skill = await Skills.findOneAndUpdate({ _id }, { domain, skills });
    if (!skill) {
      return NextResponse.json(
        {
          message: "Skill not found",
          success: false,
        },
        { status: 404 }
      );
    }
    revalidatePath("/about");
    return NextResponse.json(
      {
        message: "Skill Updated successfully",
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
export async function DELETE(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { id } = await reqBody;
    await Skills.deleteOne({ _id: id });
    revalidatePath("/about");
    return NextResponse.json(
      {
        message: "Skill deleted successfully",
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
