import SkillCard from "@/components/ui/SkillUICard";
import Image from "next/image";
import img from "../../../public/pic.webp";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { Skill } from "@/types/types";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const getData = async () => {
  const req = await fetch(process.env.BASE_URL + "/api/skills", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  return req.json();
};

const About = async () => {
  const data = await getData();
  return (
    <section className="flex flex-col items-center justify-center gap-10  ">
      <div className="md:w-[90%] xl:w-[75rem] px-4 md:px-0 my-24 md:my-32">
        <div className="flex md:justify-between">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
              Know Who I&apos;M
            </h1>
            <div className="space-y-4">
              <p className="md:max-w-xl xl:max-w-2xl text-neutral-200 md:pr-4">
                Welcome to my portfolio! I&apos;m Lakshay Babbar, a dedicated
                MERN stack developer with a strong foundation in building
                dynamic web applications. Currently, I&apos;m expanding my
                expertise in Cloud Computing and DevOps, aiming to create
                scalable and efficient solutions. Explore my projects to see how
                I blend creativity with technical skills to deliver impactful
                results.
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
              className="size-80 rounded-md mix-blend-luminosity object-cover"
            />
          </figure>
        </div>
        <div className="my-20">
          <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            What I Know
          </h2>
          {data.skills ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {data.skills.map((item: Skill) => {
                return <SkillCard key={item._id} data={item} />;
              })}
            </div>
          ) : (
            <p className="text-center my-20">
              Could not fetch skills...Please try again
            </p>
          )}
        </div>
      </div>
      <div className="fixed -top-10 -left-10 -z-20 w-[80%] h-[18%] bg-gradient-to-r from-indigo-800 to-purple-900  blur-[150px] rounded-lg -rotate-12" />
      <div className="fixed top-0 z-50 w-[100%] h-screen translate-x-[100%] bg-black animate-slide-in-out" />
      <ShootingStars />
      <StarsBackground />
    </section>
  );
};

export default About;
