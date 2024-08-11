import Footer from "@/components/ui/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-lvh w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden dark:bg-grid-white/[0.1] justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-40 md:pt-0 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 max-w-72 md:max-w-none leading-tight">
            Hi I&#39;m Lakshay Babbar
          </h1>
          <p className="mt-10 font-normal text-base md:text-xl text-neutral-400 max-w-72 md:max-w-3xl text-center mx-auto">
            A MERN stack developer and a third-year Computer
            Applications student passionate about mastering Cloud Computing and
            DevOps.
          </p>
          <div className="mt-10 flex gap-4 items-center">
            <Button asChild className="py-2 px-5">
              <Link
                href="https://drive.google.com/file/d/1-HwkSzC-VrQtCMD3qpLF8i7HJ4OCXpNd/view?usp=drivesdk"
                target="_blank"
              >
                Resume
              </Link>
            </Button>
            <Link href="about">
              <HoverBorderGradient
                containerClassName="rounded-md"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span className="flex items-center">About Me</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
