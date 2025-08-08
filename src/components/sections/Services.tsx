"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { lcddot } from "@/fonts";
import Image from "next/image";
import Copy from "@/components/layout/Copy";
import { cn } from "../../lib/utlis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Service = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
};

const services = [
  {
    title: "Website Development",
    description:
      "Building high-performance websites with modern tech stacks. We create responsive, SEO-optimized sites that convert visitors into customers and elevate your digital presence.",
    keywords: [
      "React/Next.js",
      "Responsive Design",
      "Performance Optimization",
      "E-commerce Solutions",
      "CMS Integration",
      "SEO Foundations",
    ],
    image: "/images/services/brand-strategy.png",
  },
  {
    title: "Landing Page Design",
    description:
      "Crafting conversion-focused landing pages that drive results. Our data-driven approach combines persuasive copy, strategic CTAs, and compelling visuals to maximize your ROI.",
    keywords: [
      "Conversion Optimization",
      "A/B Testing",
      "Lead Generation",
      "UI/UX Design",
      "Framer Development",
      "Analytics Integration",
    ],
    image: "/images/services/digital-design.png",
  },
  {
    title: "Digital Strategy",
    description:
      "Developing comprehensive digital roadmaps that align with business objectives. We identify growth opportunities and create actionable plans to amplify your online impact.",
    keywords: [
      "Market Analysis",
      "User Journey Mapping",
      "Content Strategy",
      "KPI Definition",
      "Technical Audits",
      "Competitive Research",
    ],
    image: "/images/services/development.png",
  },
];

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
            "--aurora": "repeating-linear-gradient(280deg, #0a0808 30%, #1a1a1d 15%, #2d2828 20%, #1f1c1c 25%, #B9935B 30%)",
            "--dark-gradient": "repeating-linear-gradient(280deg, #000 0%, #2b2727 7%, transparent 10%, transparent 12%, #000 16%)",
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
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[12px] opacity-40 blur-[15px] invert filter will-change-transform 
            [--aurora:repeating-linear-gradient(280deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] 
            [--dark-gradient:repeating-linear-gradient(280deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] 
            after:absolute after:inset-0 after:mix-blend-difference after:content-[""] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            `[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `after:[background-size:200%,_100%] after:[background-attachment:fixed]`,
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_100%,black_40%,var(--transparent)_70%)]`,
          )}
        ></div>
        
        <div className="absolute inset-0 pointer-events-none [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9ImciPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjQiIG51bU9jdGF2ZXM9IjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')] mix-blend-soft-light" />
        
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(to_top,rgba(175, 171, 171, 0.8)_0%,rgba(175, 171, 171, 0.8)_50%,transparent_100%)]" />
        
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_50%_100%,rgba(119, 119, 119, 0.8)_0%,rgba(119, 119, 119, 0.8)_100%)]" />
      </div>
      {children}
    </div>
  );
};

export default function Services() {
  return (
    <AuroraBackground>
      <section className="px-2 lg:px-4 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col gap-16 lg:gap-16 px-4 pt-16 lg:pt-24 pb-4">
          <div className="flex flex-col">
            <Copy>
              <h2 className="text-5xl md:text-7xl text-white uppercase mb-4 text-center">
                Our Services
              </h2>
            </Copy>
            <Copy>
              <p className="text-neutral-100 text-3xl md:text-4xl text-center max-w-4xl mx-auto">
                We transform <span className="text-[#B9935B]">digital visions</span> into 
                high-performing websites and landing pages. Through our 
                <span className="text-[#B9935B]"> strategic approach</span>, we create 
                <span className="text-[#B9935B]"> measurable results</span> that drive growth 
                and establish <span className="text-[#B9935B]">digital excellence</span>.
              </p>
            </Copy>
          </div>

          <div className="flex flex-col bg-black/20 backdrop-blur-sm rounded-xl lg:rounded-2xl px-4 lg:px-5 text-[#B9935B] border border-neutral-700">
            <ServicesList />
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}

function ServicesList() {
  return (
    <ul className="flex flex-col text-[#B9935B]">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </ul>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const keywordsRef = useRef(null);
  const imageContainerRef = useRef(null);

  const isKeywordsInView = useInView(keywordsRef, {
    once: true,
    margin: "0px 0px -15% 0px",
  });
  const isImageInView = useInView(imageContainerRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-3vh", "3vh"]);

  return (
    <li className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 pt-10 last:pb-4 not-last:pb-10 lg:last:pb-10 not-last:border-b not-last:border-neutral-700">
      <div className="lg:col-span-5 mb-6 lg:mb-0">
        <Copy>
          <h3 className="text-4xl md:text-5xl font-medium text-[#B9935B]">
            {service.title}
          </h3>
        </Copy>
      </div>

      <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-4 mb-8 lg:mb-0">
        <Copy>
          <p className="text-xl md:text-2xl text-neutral-100">
            {service.description}
          </p>
        </Copy>

        <ul ref={keywordsRef} className="flex gap-1.5 flex-wrap">
          {service.keywords.map((keyword, index) => (
            <motion.li
              key={keyword}
              initial={{ y: 24, opacity: 0, scale: 0.9 }}
              animate={
                isKeywordsInView
                  ? { y: 0, opacity: 1, scale: 1 }
                  : { y: 24, opacity: 0, scale: 0.9 }
              }
              transition={{
                duration: 1,
                delay: index * 0.025,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${lcddot.className} text-[10px] text-[#B9935B] uppercase tracking-[1.1] bg-[#B9935B]/10 px-2 3xl:px-3 pt-2 pb-1.5 rounded-md whitespace-nowrap`}
            >
              {keyword}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div className="lg:col-span-3">
        <div
          ref={imageContainerRef}
          className="h-[220px] sm:h-[400px] md:h-[450px] lg:h-[clamp(220px,15vw,360px)] rounded-lg overflow-hidden relative"
        >
          <motion.div
            className="absolute inset-0 w-full h-[120%] lg:-top-[10%]"
            style={{ y }}
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={
              isImageInView
                ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
                : {}
            }
            transition={{
              duration: 1.6,
              ease: [0.87, 0, 0.13, 1],
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </li>
  );
}