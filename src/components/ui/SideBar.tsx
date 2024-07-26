import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="fixed h-screen top-0 left-0 w-44 bg-gray-900 flex justify-center">
      <div className="mt-32 flex flex-col gap-4">
        <Link href="/admin">Home</Link>
        <Link href="/admin/skills">Skills</Link>
        <Link href="/admin/projects">Projects</Link>
        <Link href="/admin/contact">Contact</Link>
        <Link href="/api/logout">Logout</Link>
      </div>
    </aside>
  );
};

export default SideBar;
