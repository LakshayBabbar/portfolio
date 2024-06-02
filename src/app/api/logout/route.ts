import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = NextResponse.redirect(new URL("/", req.url));
    res.cookies.set("adminToken", "", {
      httpOnly: true,
      secure: true,
      maxAge: 0,
    });
    return res;
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal server error: " + error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
