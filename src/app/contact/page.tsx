"use client";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Socials from "@/components/ui/Socials";
import img from "../../../public/contact.png";
import Image from "next/image";
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
      className="h-screen flex flex-col sm:flex-row mt-28 sm:mt-0 items-center justify-evenly mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
    >
      <section className="space-y-2">
        <h1 className="text-5xl font-bold my-5">Get In Touch</h1>
        <p className="flex items-center">
          <MdEmail />
          &nbsp;Lakshay.babbar.1801@gmail.com
        </p>
        <p className="flex items-center">
          <IoPhonePortraitOutline />
          &nbsp;9953712825
        </p>
        <Socials hidden={false} />
        <Image src={img} alt="contact" className="size-80 " />
      </section>
      <form className="w-96 space-y-4" onSubmit={submitHandler}>
        <h1 className="text-5xl font-bold">Contact</h1>
        <input
          type="text"
          required
          className="bg-transparent border h-10 rounded-md px-4 outline-none w-full"
          placeholder="Name"
          name="name"
          onChange={valueHandler}
        />
        <input
          type="email"
          required
          name="email"
          className="bg-transparent border h-10 rounded-md px-4 outline-none w-full"
          placeholder="Email"
          onChange={valueHandler}
        />
        <textarea
          className="h-40 max-h-60 bg-transparent border rounded-md p-4 outline-none w-full"
          placeholder="Message"
          name="message"
          onChange={valueHandler}
        />
        <div className="space-x-4">
          <Button type="reset" variant="secondary">
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
