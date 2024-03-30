"use client";
import Socials from "./Socials";
import { Button } from "./button";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <motion.section
      className="flex flex-col items-center gap-5 my-6 px-5 sm:px-20 xl:px-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="flex justify-between w-full items-center">
        <h1 className="text-3xl font-bold">Let&apos;s Work Together</h1>
        <Link href="/contact">
          <Button className="rounded-full">
            Contact Now &nbsp;
            <GoArrowUpRight />
          </Button>
        </Link>
      </div>
      <hr className="w-full" />
      <div className="w-full flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between">
        <h2 className="text-xl text-neutral-300">Lakshay Babbar</h2>
        <p className="text-neutral-400 text-sm">
          © 2024 All Rights Reserved | Lakshay Babbar
        </p>
        <Socials hidden={false} />
      </div>
    </motion.section>
  );
};

export default Footer;
