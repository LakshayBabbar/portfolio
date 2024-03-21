"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/Logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeHandler = () => {
    if (theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };
  return (
    <div className="fixed w-full h-14 dark:text-white border-b dark:border-b-0">
      <nav className="backdrop-blur-md w-full flex items-center justify-around h-full">
        <ul className="flex gap-6 items-center">
          <li className="flex gap-2 cursor-default font-bold items-center">
            <Image src={img} alt="Logo" className="w-4 h-5" priority />
            <span>Lakshay Babbar</span>
          </li>
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/About">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/Projects">Projects</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <ul className="text-xl flex gap-4">
          <li>
            <a
              href="https://www.instagram.com/thelakshaybabbar/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/LakshayBabbar" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/in/lakshay-babbar-5b70a7273"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/LakshayBabbar5" target="_blank">
              <FaXTwitter />
            </a>
          </li>
          <li onClick={themeHandler} className="cursor-pointer">
            {theme === "dark" ? <BsMoonStars /> : <IoSunnyOutline />}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
