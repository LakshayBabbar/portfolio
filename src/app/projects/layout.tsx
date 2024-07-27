import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Projects | Lakshay Babbar",
  description:
    "Welcome to my portfolio projects showcase! Here, you'll find a curated collection of my creative endeavors, ranging from web development and design to digital marketing campaigns and beyond. Each project is a testament to my skills, passion, and dedication to delivering impactful solutions. Explore the diverse array of work samples and delve into the details of each project to gain insights into my expertise and approach. Whether you're seeking inspiration, collaboration opportunities, or simply curious about my capabilities, this portfolio is your window into my world of innovation and excellence.",
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
