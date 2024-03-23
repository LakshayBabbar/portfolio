"use client";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import Socials from "@/components/ui/Socials";
import img from "../../../public/contact.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col sm:flex-row items-center justify-evenly">
      <div className="absolute h-32 w-screen top-0 animate-spotlight bg-neutral-400 blur-[200px] -z-1" />
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
        <Socials />
        <Image src={img} alt="contact" className="size-80 " />
      </section>
      <form className="w-96 space-y-4">
        <h1 className="text-5xl font-bold">Contact</h1>
        <input
          type="text"
          required
          className="bg-transparent border h-10 rounded-md px-4 outline-none w-full"
          placeholder="Title"
        />
        <input
          type="email"
          required
          className="bg-transparent border h-10 rounded-md px-4 outline-none w-full"
          placeholder="Email"
        />
        <textarea className="h-40 max-h-60 bg-transparent border rounded-md p-4 outline-none w-full" placeholder="Message" />
        <div className="space-x-4">
          <Button type="reset" variant="secondary">
            Reset
          </Button>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
