"use client";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Socials from "@/components/ui/Socials";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const email = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_API}`, {
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
      alert("Message sent successfully.");
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
      className="h-screen flex flex-col mt-28 sm:mt-0 items-center justify-center bg-grid-white/[0.08]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
    >
      <section>
        <h1 className="text-6xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
          Get In Touch
        </h1>
        <div className="flex gap-20 border p-20 border-neutral-500">
          <form className="w-96 space-y-4" onSubmit={submitHandler}>
            <input
              type="text"
              required
              className="bg-transparent border-b border-neutral-500 h-10 rounded-md px-4 outline-none w-full"
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
              className="bg-transparent border-b border-neutral-500 h-10 rounded-md px-4 outline-none w-full"
              placeholder="Email"
              onChange={valueHandler}
            />
            <textarea
              className="h-16 max-h-60 bg-transparent border-b border-neutral-500 rounded-md p-4 outline-none w-full"
              placeholder="Message"
              value={data.message}
              name="message"
              onChange={valueHandler}
              required
            />

            <Button
              type="submit"
              className="w-full rounded-full"
              variant="secondary"
            >
              Submit
            </Button>
          </form>
          <div>
            <div className="space-y-2">
              <h1 className="text-2xl mb-3">Contact</h1>
              <p className="flex items-center">
                <MdEmail />
                &nbsp;Lakshay.babbar.1801@gmail.com
              </p>
              <p className="flex items-center">
                <IoPhonePortraitOutline />
                &nbsp;9953712825
              </p>
            </div>
            <div className="mt-[6.5rem]">
              <Socials hidden={false} />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
