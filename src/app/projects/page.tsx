"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types/types";

export default function Projects() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const req = await fetch("/api/projects", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const res = await req.json();
      if (res.success) {
        if (res.projects.length > 0) {
          setData(res.projects);
        } else {
          setMessage("No project found!");
        }
      } else {
        setMessage(res.message);
      }
    }
    fetchData();
    setLoading(false);
  }, []);
  return (
    <motion.div
      className="h-[fit-content] relative w-full bg-grid-white/[0.07] flex flex-col items-center overflow-hidden rounded-md"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring" }}
    >
      <div className="px-5 sm:px-0 mt-28 sm:mt-36 w-auto space-y-5">
        <h1 className="text-5xl md:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
          My Recent Works
        </h1>
        <p className="text-neutral-300">
          Here are a few projects I&apos;ve worked on recently.
        </p>
      </div>
      {loading && <p className="text-canter my-20">Loading...</p>}
      {!loading && data.length > 0 ? (
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-10 my-20">
          {data.map((item: Project) => {
            return (
              <CardContainer className="inter-var" key={item._id}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[90vw] sm:w-[70vw] md:w-[45vw] xl:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Tech Stack:&nbsp;{item.skills}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.img.url}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      priority
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={item.link}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={item.repo}
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      ) : (
        <p className="text-canter my-20">{message}</p>
      )}
    </motion.div>
  );
}
