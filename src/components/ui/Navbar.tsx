"use client";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/Logo.png";
import Socials from "./Socials";
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const pre = "-top-96 right-0";
  const post = "right-10 bg-black top-14 p-10";
  const [active, setActive] = useState<string>(pre);
  const menuHandler = () => {
    active === pre ? setActive(post) : setActive(pre);
  };
  const linkStyle =
    "cursor-pointer text-gray-300 hover:text-white transition-all delay-100";
  return (
    <div className="fixed w-full h-14 z-50 top-0 left-0">
      <nav className="backdrop-blur-md w-full flex items-center justify-between px-4 md:px-0 md:justify-around h-full">
        <div className="flex gap-2 cursor-default font-bold text-white items-center">
          <Image src={img} alt="Logo" className="w-4 h-5" priority />
          <span>Lakshay Babbar</span>
        </div>
        <div>
          <ul
            className={`absolute md:relative flex flex-col md:flex-row gap-6 md:top-0 md:right-0 rounded-xl ${active} transition-all`}
          >
            <li className={linkStyle}>
              <Link href="/">Home</Link>
            </li>
            <li className={linkStyle}>
              <Link href="about">About</Link>
            </li>
            <li className={linkStyle}>
              <Link href="projects">Projects</Link>
            </li>
            <li className={linkStyle}>
              <Link href="contact">Contact</Link>
            </li>
            <li className={linkStyle}>
              <Link
                href="https://blog-tech-delta.vercel.app/users/lakshaybabbar0118"
                target="_blank"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <Socials hidden={true} />
        <button
          className="text-xl flex md:hidden z-10"
          onClick={menuHandler}
          aria-label="Navigation Menu"
          onBlur={menuHandler}
        >
          {active === pre ? <RiMenu4Fill /> : <IoCloseOutline />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
