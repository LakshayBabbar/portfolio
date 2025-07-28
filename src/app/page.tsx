"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

export default function AceternityStyleHomepage() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const techStack = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "TypeScript",
    "AWS",
    "Docker",
    "DevOps",
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Projects Built" },
    { number: "25+", label: "Technologies" },
    { number: "100%", label: "Dedication" },
  ];

  const redirect = useRouter();

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] before:[background-size:24px_24px]"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff10 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-full mb-8 transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-neutral-400 font-medium">
              Available for new opportunities
            </span>
          </div>

          <div
            className={`space-y-6 mb-10 transition-all duration-1000 delay-200 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
                Lakshay Babbar
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
              A <span className="text-neutral-300">Full-Stack Developer</span>{" "}
              at <span className="text-neutral-300">WishGeeks Techserve</span>,
              passionate about{" "}
              <span className="text-neutral-300">Cloud Computing</span> and{" "}
              <span className="text-neutral-300">DevOps</span>.
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-400 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="px-3 py-1.5 bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 rounded-md text-sm text-neutral-300 hover:bg-neutral-800/50 hover:border-neutral-700/50 hover:text-neutral-200 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${400 + index * 50}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="https://drive.google.com/file/d/1-HwkSzC-VrQtCMD3qpLF8i7HJ4OCXpNd/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
            >
              <span>View Resume</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <button
              onClick={() => redirect.push("/about")}
              className="group px-6 py-3 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 text-neutral-300 rounded-lg font-medium hover:bg-neutral-800/50 hover:border-neutral-700/50 hover:text-white transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
            >
              <span>About Me</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-lg mx-auto transition-all duration-1000 delay-800 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-semibold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
