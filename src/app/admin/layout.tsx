import SideBar from "@/components/ui/SideBar";
import React from "react";

export default function AdminRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <main className="sm:ml-56 my-32">{children}</main>
    </>
  );
}
