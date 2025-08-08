"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utlis";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col bg-zinc-950 dark:bg-zinc-900 w-full",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora": "repeating-linear-gradient(100deg, #0a0808 30%, #1a1a1d 15%, #2d2828 20%, #1f1c1c 25%, #B9935B 30%)",
            "--dark-gradient": "repeating-linear-gradient(100deg, #000 0%, #2b2727 7%, transparent 10%, transparent 12%, #000 16%)",
            "--blue-300": "#454f5a",
            "--blue-400": "#5e6266",
            "--blue-500": "#363d44",
            "--indigo-300": "#7d829b",
            "--violet-200": "#B9935B",
            "--black": "#000000",
            "--white": "#f7eeee",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        {/* Increased aurora visibility with larger size and higher opacity */}
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[12px] opacity-40 blur-[15px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] after:absolute after:inset-0 after:mix-blend-difference after:content-[""] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            `[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `after:[background-size:200%,_100%] after:[background-attachment:fixed]`,
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_40%,var(--transparent)_70%)]`,
          )}
        ></div>
        
        {/* Enhanced grain overlay */}
        <div className="absolute inset-0 pointer-events-none [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9ImciPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjQiIG51bU9jdGF2ZXM9IjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')] mix-blend-soft-light" />
        
        {/* Top dark gradient */}
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(to_bottom,rgba(175, 171, 171, 0.8)_0%,rgba(175, 171, 171, 0.8)_50%,transparent_100%)]" />
        
         <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,rgba(119, 119, 119, 0.8)_0%,rgba(119, 119, 119, 0.8)_100%)]" />
        
      </div>
      {children}
    </div>
  );
};

export default function TechnologiesLit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;

    if (!container || !highlight) return;

    const firstItem = container.querySelector(".grid-item:first-child");

    const moveToElement = (element: HTMLElement) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
      }
    };

    const moveHighlight = (e: MouseEvent) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement as HTMLElement);
      } else if (
        hoveredElement &&
        hoveredElement?.parentElement &&
        hoveredElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    if (firstItem) {
      moveToElement(firstItem as HTMLElement);
    }

    container.addEventListener("mousemove", moveHighlight);

    return () => {
      container.removeEventListener("mousemove", moveHighlight);
    };
  }, []);

  return (
    <AuroraBackground>
      <section className="pb-20 md:pb-0 px-4 lg:px-8 relative z-10">
        <LetterScroll />

        <h4 className="font-semibold text-4xl md:text-6xl uppercase mb-4 text-[#B9935B] pt-2">
          Our TechStack
        </h4>
        
        {/* Tech name display */}
        {hoveredTech && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full border border-[#B9935B]/30 z-50">
            <span className="text-[#B9935B] text-xl font-medium">{hoveredTech}</span>
          </div>
        )}
        
        <div ref={containerRef} className="relative pt-22">
          <div className="hidden lg:grid grid-rows-2">
            <div className="grid grid-cols-3 border-b border-neutral-100 h-[clamp(200px,20vw,400px)]">
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group cursor-pointer relative"
                aria-label="Visit React website"
                onMouseEnter={() => setHoveredTech("React")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/react-logo.svg"
                  alt="React"
                  width={90}
                  height={90}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group cursor-pointer relative"
                aria-label="Visit Next.js website"
                onMouseEnter={() => setHoveredTech("Next.js")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/nextjs-logotype-light-background.svg"
                  alt="Next.js"
                  width={150}
                  height={150}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center group cursor-pointer relative"
                aria-label="Visit TypeScript website"
                onMouseEnter={() => setHoveredTech("TypeScript")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/typescript-logo.svg"
                  alt="TypeScript"
                  width={70}
                  height={70}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
            </div>

            <div className="grid grid-cols-7 h-[clamp(200px,15vw,400px)]">
              <a
                href="https://gsap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group cursor-pointer relative"
                aria-label="Visit GSAP website"
                onMouseEnter={() => setHoveredTech("GSAP")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/gsap-black.svg"
                  alt="GSAP"
                  width={80}
                  height={80}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://motion.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group cursor-pointer relative"
                aria-label="Visit Motion website"
                onMouseEnter={() => setHoveredTech("Motion One")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/motion.svg"
                  alt="Motion"
                  width={80}
                  height={80}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group cursor-pointer relative"
                aria-label="Visit TailwindCSS website"
                onMouseEnter={() => setHoveredTech("Tailwind CSS")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/tailwindcss-logo.svg"
                  alt="TailwindCSS"
                  width={70}
                  height={70}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://www.contentful.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group cursor-pointer relative"
                aria-label="Visit Contentful website"
                onMouseEnter={() => setHoveredTech("Contentful")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/contentful-logo.svg"
                  alt="Contentful"
                  width={50}
                  height={50}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://supabase.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group cursor-pointer relative"
                aria-label="Visit Supabase website"
                onMouseEnter={() => setHoveredTech("Supabase")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/supabase-logo.svg"
                  alt="Supabase"
                  width={50}
                  height={50}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center border-r border-neutral-100 group relative"
                aria-label="Visit Vercel website"
                onMouseEnter={() => setHoveredTech("Vercel")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/vercel-logotype-light.svg"
                  alt="Vercel"
                  width={90}
                  height={90}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item flex items-center justify-center group relative"
                aria-label="Visit Figma website"
                onMouseEnter={() => setHoveredTech("Figma")}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <Image
                  src="/images/svg/figma-logo.svg"
                  alt="Figma"
                  width={60}
                  height={60}
                  className="z-10 transition-all duration-300 group-hover:invert-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Grid for mobile */}
          <div className="grid grid-cols-2 lg:hidden">
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit React website"
              onMouseEnter={() => setHoveredTech("React")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/react-logo.svg"
                alt="React"
                width={70}
                height={70}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit Next.js website"
              onMouseEnter={() => setHoveredTech("Next.js")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/nextjs-logotype-light-background.svg"
                alt="Next.js"
                width={100}
                height={100}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit TypeScript website"
              onMouseEnter={() => setHoveredTech("TypeScript")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/typescript-logo.svg"
                alt="TypeScript"
                width={64}
                height={64}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://gsap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit GSAP website"
              onMouseEnter={() => setHoveredTech("GSAP")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/gsap-black.svg"
                alt="GSAP"
                width={80}
                height={80}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://motion.dev/"
              target="_blank"
              className="grid-item flex items-center justify-center border-r border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              onMouseEnter={() => setHoveredTech("Motion One")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/motion.svg"
                alt="Motion"
                width={80}
                height={80}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit TailwindCSS website"
              onMouseEnter={() => setHoveredTech("Tailwind CSS")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/tailwindcss-logo.svg"
                alt="TailwindCSS"
                width={70}
                height={70}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit Contentful website"
              onMouseEnter={() => setHoveredTech("Contentful")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/contentful-logo.svg"
                alt="Contentful"
                width={50}
                height={50}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://supabase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-b border-neutral-100 group cursor-pointer h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit Supabase website"
              onMouseEnter={() => setHoveredTech("Supabase")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/supabase-logo.svg"
                alt="Supabase"
                width={50}
                height={50}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-neutral-100 group h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit Vercel website"
              onMouseEnter={() => setHoveredTech("Vercel")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/vercel-logotype-light.svg"
                alt="Vercel"
                width={90}
                height={90}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center border-neutral-100 justify-center group h-[clamp(200px,20vw,400px)] relative"
              aria-label="Visit Figma website"
              onMouseEnter={() => setHoveredTech("Figma")}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <Image
                src="/images/svg/figma-logo.svg"
                alt="Figma"
                width={60}
                height={60}
                className="z-10 transition-all duration-300 group-hover:invert-0 invert"
              />
            </a>
          </div>
          <div
            ref={highlightRef}
            className="highlight hidden sm:block absolute top-0 left-0 bg-[#B9935B] pointer-events-none transition-all duration-300 mix-blend-lighten"
          ></div>
        </div>
      </section>
    </AuroraBackground>
  );
}

function LetterScroll() {
  const containerRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(".letter", {
      yPercent: 100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "40% 95%",
        end: "100% 80%",
        scrub: 1,
      },
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  }, []);

  return (
    <ul
      ref={containerRef}
      className="letter-scroll flex flex-col justify-center items-center h-[300px] lg:h-[800px] py-24"
    >
      <li className="text-[clamp(48px,14vw,250px)] font-bold  overflow-hidden flex text-white">
        <span className="letter relative inline-block">
          <span>M</span>
          <span className="absolute bottom-full left-0">M</span>
        </span>
        <span className="letter relative inline-block">
          <span>O</span>
          <span className="absolute bottom-full left-0">O</span>
        </span>
        <span className="letter relative inline-block">
          <span>D</span>
          <span className="absolute bottom-full left-0">D</span>
        </span>
        <span className="letter relative inline-block">
          <span>E</span>
          <span className="absolute bottom-full left-0">E</span>
        </span>
        <span className="letter relative inline-block">
          <span>R</span>
          <span className="absolute bottom-full left-0">R</span>
        </span>
        <span className="letter relative inline-block">
          <span>N</span>
          <span className="absolute bottom-full left-0">N</span>
        </span>
      </li>
      <li className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.9] lg:leading-[0.85] overflow-hidden flex text-white">
        <span className="letter relative inline-block ">
          <span>T</span>
          <span className="absolute bottom-full left-0">T</span>
        </span>
        <span className="letter relative inline-block">
          <span>E</span>
          <span className="absolute bottom-full left-0">E</span>
        </span>
        <span className="letter relative inline-block">
          <span>C</span>
          <span className="absolute bottom-full left-0">C</span>
        </span>
        <span className="letter relative inline-block mr-[clamp(16px,4.5vw,72px)]">
          <span>H</span>
          <span className="absolute bottom-full left-0">H</span>
        </span>

        <span className="letter relative inline-block">
          <span>S</span>
          <span className="absolute bottom-full left-0">S</span>
        </span>
        <span className="letter relative inline-block">
          <span>T</span>
          <span className="absolute bottom-full left-0">T</span>
        </span>
        <span className="letter relative inline-block">
          <span>A</span>
          <span className="absolute bottom-full left-0">A</span>
        </span>
        <span className="letter relative inline-block">
          <span>C</span>
          <span className="absolute bottom-full left-0">C</span>
        </span>
        <span className="letter relative inline-block">
          <span>K</span>
          <span className="absolute bottom-full left-0">K</span>
        </span>
      </li>
    </ul>
  );
}