import SkillCard from "@/components/ui/SkillUICard";
import Image from "next/image";
import img from "../../../public/pic.webp";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { Skill } from "@/types/types";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Timeline } from "@/components/ui/timeline";

const getData = async () => {
  try {
    const req = await fetch(process.env.BASE_URL + "/api/skills", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      cache: "no-store",
    });

    if (!req.ok) throw new Error("Failed to fetch");

    return await req.json();
  } catch (err) {
    console.error("Skill fetch failed at build time:", err);
    return { skills: [] };
  }
};

const timelineData = [
  {
    title: "Jun 2025 – Present",
    content: (
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold">
          Full Stack Developer
        </h3>
        <p className="text-sm text-neutral-500">Wish Geeks Techserve</p>
        <ul className="list-disc list-inside text-sm md:text-base text-neutral-700 dark:text-neutral-300 space-y-1">
          <li>
            Leading full-stack web development with scalable, production-ready
            systems
          </li>
          <li>
            Deploying and managing cloud infrastructure (AWS, EC2, S3, Route53)
          </li>
          <li>
            Implementing CI/CD with Docker, GitHub Actions, and Nginx reverse
            proxies
          </li>
          <li>
            Contributing to architecture, deployment, and high-level system
            design
          </li>
          <li>
            Collaborating in an agile environment to push new features rapidly
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Jul 2024 – Sep 2024",
    content: (
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold">
          Cloud & DevOps Intern
        </h3>
        <p className="text-sm text-neutral-500">CYCT Pvt Ltd</p>
        <ul className="list-disc list-inside text-sm md:text-base text-neutral-700 dark:text-neutral-300 space-y-1">
          <li>Worked on CI/CD pipelines using Jenkins and GitHub Actions</li>
          <li>Learned Docker, Kubernetes, and automated shell scripting</li>
          <li>Managed Linux servers and monitored infrastructure</li>
          <li>Explored AWS services like EC2, Lambda, S3, and CloudWatch</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Jan 2023 – Mar 2025",
    content: (
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold">
          Freelance Full Stack Developer
        </h3>
        <p className="text-sm text-neutral-500">Independent Projects</p>
        <ul className="list-disc list-inside text-sm md:text-base text-neutral-700 dark:text-neutral-300 space-y-1">
          <li>Developed custom websites and scalable web applications</li>
          <li>Built responsive UIs using React, TailwindCSS, and Next.js</li>
          <li>
            Designed RESTful APIs and integrated backend systems using Node.js
            and MongoDB/PostgreSQL
          </li>
          <li>
            Maintained full project lifecycle, including planning, testing, and
            deployment
          </li>
          <li>Delivered high-performance and accessible frontend interfaces</li>
          <li>
            🧠 <strong>Highlighted Open Source Project:</strong>{" "}
            <span className="text-white bg-gradient-to-r from-purple-600 to-blue-500 px-2 py-0.5 rounded-md">
              CodeFramer
            </span>{" "}
            — An AI-powered online IDE & compiler with over{" "}
            <strong>2,000+ active users</strong>, supporting multi-language
            execution in Docker-based sandboxes.
          </li>
        </ul>
      </div>
    ),
  },
];
const About = async () => {
  const data = await getData();

  return (
    <section className="flex flex-col items-center justify-center gap-10 text-white">
      <div className="md:w-[90%] xl:w-[1200px] px-4 md:px-0 my-24 md:my-32 space-y-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 items-center">
          <div className="space-y-8 flex-1">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 leading-tight tracking-tight">
              Know Who I&apos;M
            </h1>
            <p className="text-neutral-300 md:max-w-2xl text-lg leading-relaxed">
              Hey! I&apos;m <strong>Lakshay Babbar</strong> — a passionate MERN
              stack developer and tech enthusiast. With a strong foundation in
              full-stack development and a growing expertise in Cloud & DevOps,
              I aim to build high-performance, scalable web applications. Dive
              into my journey and see how I turn ideas into reality.
            </p>
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white font-semibold tracking-wide px-4 py-2 rounded-lg"
            >
              <Link href="/projects">Projects</Link>
            </HoverBorderGradient>
          </div>

          <figure className="hidden md:block shadow-xl rounded-xl overflow-hidden transition-transform hover:scale-105">
            <Image
              src={img}
              alt="Lakshay Babbar"
              className="w-80 h-80 object-cover rounded-md mix-blend-luminosity grayscale hover:grayscale-0 transition duration-300"
              priority
            />
          </figure>
        </div>

        <Timeline data={timelineData} />

        <div className="my-20 w-full">
          <h2 className="text-4xl font-bold my-10 bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight">
            What I Know
          </h2>
          {data.skills.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {data.skills.map((item: Skill, idx: any) => (
                <SkillCard key={item._id || idx} data={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-neutral-400 mt-20">
              Could not fetch skills...Please try again.
            </p>
          )}
        </div>
      </div>

      <div className="fixed top-0 z-50 w-full h-screen translate-x-full bg-black animate-slide-in-out" />
      <ShootingStars />
      <div className="fixed inset-0 -z-1 h-full w-full">
        <StarsBackground />
      </div>
    </section>
  );
};
export default About;
