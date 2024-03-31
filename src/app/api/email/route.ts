import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API);

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lakshaybabbar0118@gmail.com",
      subject: "New Message from Portfolio Site",
      html:
        "Name: " +
        body.name +
        "<br> Email: " +
        body.email +
        "<br> Message: " +
        body.message,
    });

    if (error) {
      return NextResponse.json(error.message, { status: 400 });
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error processing request:", err);
    return NextResponse.json("Error processing request", { status: 500 });
  }
};
