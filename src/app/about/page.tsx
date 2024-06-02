"use client";
import SkillCard from "@/components/ui/SkillUICard";
import Image from "next/image";
import img from "../../../public/pic2.jpg";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { useEffect, useState } from "react";

interface skill {
  domain: string;
  skills: Array<string>;
}

const About = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("/api/skills", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const res = await req.json();
      console.log(res);
      if (res.success) {
        if (res.skills.length > 0) {
          setData(res.skills);
        } else {
          setMessage("No skills found!");
        }
      } else {
        setMessage(res.message);
      }
    }
    fetchData();
    setLoading(false);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-10 dark:bg-dot-white/[0.16]">
      <motion.div
        className="absolute top-0 left-0 w-full h-lvh bg-black z-20 origin-left transform"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-lvh bg-black z-20 origin-top transform"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      ;
      <div className="md:w-[90%] xl:w-[70%] px-4 md:px-0 my-20 md:my-32">
        <div className="flex md:justify-between">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
              Know Who I&apos;M
            </h1>
            <div className="space-y-4">
              <p className="md:max-w-xl xl:max-w-2xl text-neutral-200 md:pr-4">
                Welcome to my portfolio! I am a passionate MERN Stack developer
                on a journey towards becoming a proficient full-stack developer.
                Currently pursuing my BCA degree from SGTBIMIT, I am deeply
                engrossed in crafting modern UI applications using cutting-edge
                frameworks like React. My portfolio showcases a collection of
                projects that demonstrate my skills and dedication to creating
                innovative solutions. Feel free to explore my projects.
              </p>
              <HoverBorderGradient
                containerClassName="rounded-xl"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 w-28"
              >
                <Link href="/projects">Projects</Link>
              </HoverBorderGradient>
            </div>
          </div>
          <figure className="hidden md:block">
            <Image
              src={img}
              alt="Profile pic"
              className="size-80 rounded-md grayscale object-cover"
            />
          </figure>
        </div>
        <div className="my-20">
          <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            What I Know
          </h2>
          {loading && <p className="my-20 text-center">Loading...</p>}
          {!loading && data.length > 0 ? (
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
              {data.map((item: skill) => {
                return <SkillCard key={item.domain} data={item} />;
              })}
            </div>
          ) : (
            <p className="text-center my-20">{message}</p>
          )}
        </div>
        <div className="space-y-10 w-[85vw] md:w-[70vw]">
          <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            Days I Code
          </h2>
          <GitHubCalendar
            username="lakshaybabbar"
            theme={{
              dark: ["rgb(38, 38, 38)", "rgb(156,163,175)"],
            }}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
