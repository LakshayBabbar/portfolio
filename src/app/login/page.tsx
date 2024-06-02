"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMssg, setErrorMssg] = useState("");
  const router = useRouter();
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMssg("");
    try {
      const req = await fetch("/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      !req.ok && setErrorMssg(res.message);
      res.success && router.push("/admin");
    } catch (error) {
    } finally {
      setData({
        email: "",
        password: "",
      });
      setLoading(false);
    }
  };
  function dataHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-grid-white/[0.08]">
      <form
        className="flex flex-col p-10 w-full sm:w-96 rounded-md sm:shadow-xl gap-4 sm:border justify-center items-center bg-black shadow-xl"
        onSubmit={submitHandler}
      >
        <h1 className="text-center text-3xl py-2">Admin Login</h1>
        <Image src="/user.jpeg" alt="user" width={100} height={100} />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={dataHandler}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={dataHandler}
          required
        />
        <Button disabled={loading} className="w-full">{loading ? "Please wait!" : "Login"}</Button>
        <p className="text-red-500">{errorMssg}</p>
      </form>
    </div>
  );
};

export default Login;
