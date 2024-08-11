"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <aside className="fixed sm:h-screen bottom-0 sm:top-0 left-0 w-full py-5 sm:w-44 bg-neutral-900 flex justify-center">
      <div className="sm:mt-32 flex sm:flex-col gap-4">
        <Link href="/admin/skills">Skills</Link>
        <Link href="/admin/projects">Projects</Link>
        <Link href="/admin/contact">Contact</Link>
        <Button
          variant="link"
          className="p-0 h-fit w-fit text-md font-normal"
          onClick={() => router.push("/api/logout")}
        >
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default SideBar;
