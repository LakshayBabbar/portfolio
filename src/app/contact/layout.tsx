import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Contact | Lakshay Babbar",
  description:
    "Ready to take the next step? This is where the magic happens. Reach out to me directly through this contact page to discuss collaborations, project opportunities, or any questions you may have about the portfolio content. Whether you're a potential client, fellow creator, or just want to say hello, your message is important and will be treated with care. Fill out the form below or use the provided contact details to start the conversation. Let's turn ideas into reality together. Looking forward to hearing from you!",
};

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default layout;
