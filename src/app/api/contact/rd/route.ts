import Contact from "@/models/contact";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/config/db";
connectDb();

export async function GET() {
  try {
    const contactData = await Contact.find({});
    return NextResponse.json(
      {
        contacts: contactData,
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "internal server error: " + error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const contactData = await Contact.findOneAndDelete({ _id: reqBody.id });
    if (!contactData) {
      return NextResponse.json(
        {
          message: "Contact details not found",
          success: false,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "Contact details deleted successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "internal server error: " + error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
