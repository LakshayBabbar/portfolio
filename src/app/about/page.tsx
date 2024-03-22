import SkillCard from "@/components/ui/SkillCard";
import Image from "next/image";
import img from "../../../public/pic2.jpg";
import { skillData } from "@/lib/data";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 dark:bg-dot-white/[0.16]">
      <div className="md:w-[90%] xl:w-[70%] px-4 md:px-0 mt-32">
        <div className="flex md:justify-between">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold ">About Me</h1>
            <p className="md:max-w-xl xl:max-w-2xl text-neutral-200">
              As a 2nd-year student and MERN stack developer, currently pursuing
              a Bachelor&apos;s in Computer Application from SGTBIMIT, I&apos;m
              on a journey to become a proficient full-stack developer. With
              expertise in MongoDB, Express.js, React.js, and Node.js, I
              specialize in crafting dynamic web applications. My portfolio
              showcases projects demonstrating my commitment to clean code and
              innovative solutions. I&apos;m dedicated to continuous learning
              and contributing meaningfully to the software development
              landscape.
            </p>
          </div>
          <figure className="hidden md:block">
            <Image
              src={img}
              alt="Profile pic"
              className="md:size-72 xl:size-80 rounded-md grayscale object-cover"
            />
          </figure>
        </div>
        <div>
          <h2 className="text-4xl font-bold my-10">What I Know</h2>
          <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
            {skillData.map((item) => {
              return <SkillCard key={item.title} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
