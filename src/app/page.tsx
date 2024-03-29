import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-lvh w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden dark:bg-grid-white/[0.07] justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-28 md:pt-0 flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight">
          Hi I&#39;am Lakshay Babbar
        </h1>
        <p className="mt-10 font-normal text-base md:text-xl text-neutral-400 max-w-72 md:max-w-3xl text-center mx-auto">
          I am a Second year computer application undergrad. I have a good hand
          at FrontEnd. I am a enthusiastic and quick learner who is always
          looking for opportunities to upgrade my skills. Apart from this I am
          good at Linux.
        </p>
        <div className="mt-10 space-x-4">
          <Button size="lg" asChild>
            <Link
              href="https://drive.google.com/file/d/1OqBjz_hYOOd3QHpvI-13Y5FkqdQ4qxjk/view"
              target="_blank"
            >
              Resume
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
