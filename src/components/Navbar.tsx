"use client";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/Logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const linkStyle =
    "cursor-pointer text-gray-300 hover:text-white transition-all delay-100";
  return (
    <div className="fixed w-full h-14 z-50 border-b">
      <nav className="backdrop-blur-md w-full flex items-center justify-around h-full">
        <ul className="flex gap-6 items-center">
          <li className="flex gap-2 cursor-default font-bold text-white items-center">
            <Image src={img} alt="Logo" className="w-4 h-5" priority />
            <span>Lakshay Babbar</span>
          </li>
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
            <Link
              href="https://blog-tech-delta.vercel.app/users/lakshaybabbar0118"
              target="_blank"
            >
              Blog
            </Link>
          </li>
          <li className={linkStyle}>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
        <ul className="text-xl flex gap-4">
          <li className={linkStyle}>
            <a
              href="https://www.instagram.com/thelakshaybabbar/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
          <li className={linkStyle}>
            <a href="https://github.com/LakshayBabbar" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className={linkStyle}>
            <a
              href="https://in.linkedin.com/in/lakshay-babbar-5b70a7273"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className={linkStyle}>
            <a href="https://twitter.com/LakshayBabbar5" target="_blank">
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
