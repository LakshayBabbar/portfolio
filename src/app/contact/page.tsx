"use client";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Socials from "@/components/ui/Socials";
import { motion } from "motion/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const email = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const response = await email.json();
      console.log(response);
      setData({ name: "", email: "", message: "" });
      setLoading(false);
      const date = new Date().toString();
      toast({
        title: "Your message is sent successfully.",
        description: date,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const valueHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-grid-white/[0.04]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
    >
      <section className="px-5 w-full sm:w-4/5 md:w-180">
        <div className="relative flex flex-col gap-2 items-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Get In Touch
          </h1>
          <Link
            href="mailto:lakshay.babbar.1801@gmail.com"
            className="flex items-center hover:underline hover:underline-offset-4"
          >
            <MdEmail />
            &nbsp;Lakshay.babbar.1801@gmail.com
          </Link>
          <p className="flex items-center">
            <IoPhonePortraitOutline />
            &nbsp;9953712825
          </p>
          <div className="mt-2">
            <Socials hidden={false} />
          </div>
        </div>
        <form className="space-y-8" onSubmit={submitHandler}>
          <input
            type="text"
            required
            className="bg-transparent border-b border-white h-10 px-4 outline-hidden w-full"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={valueHandler}
          />
          <input
            type="email"
            required
            name="email"
            value={data.email}
            className="bg-transparent border-b border-white h-10 px-4 outline-hidden w-full"
            placeholder="Email"
            onChange={valueHandler}
          />
          <textarea
            className="h-28 max-h-60 bg-transparent border-b border-white px-4 outline-hidden w-full"
            placeholder="Message"
            value={data.message}
            name="message"
            onChange={valueHandler}
            required
          />
          <Button
            type="submit"
            className="w-28 rounded-none"
            disabled={loading}
          >
            Send
          </Button>
        </form>
        <div className="absolute bg-neutral-800 blur-[100px] top-10 sm:top-0 size-72 sm:size-96 -z-10" />
      </section>
    </motion.div>
  );
};

export default Contact;
