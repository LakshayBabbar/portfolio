import { NextResponse } from "next/server";
import { Resend } from "resend";
import Contact from "@/models/contact";
import connectDb from "@/config/db";
connectDb();

const resend = new Resend(process.env.EMAIL_API);

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, email, message } = await body;
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lakshaybabbar0118@gmail.com",
      subject: "New Message from Portfolio Site",
      html:
        "Name: " + name + "<br> Email: " + email + "<br> Message: " + message,
    });

    if (error) {
      return NextResponse.json(error.message, { status: 400 });
    }
    const newQuery = new Contact({
      name,
      email,
      message,
    });
    newQuery.save();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error processing request:", err);
    return NextResponse.json("Error processing request", { status: 500 });
  }
};
