import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "About | Lakshay Babbar",
  description:
    "Explore a dynamic portfolio filled with creativity and innovation. Discover a range of projects highlighting expertise in full-stack development. Immerse yourself in a showcase of precision and excellence, reflecting a commitment to delivering impactful solutions. Experience the passion and dedication behind each project as you delve into this captivating portfolio.",
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
