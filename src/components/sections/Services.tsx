"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { lcddot } from "@/fonts";
import Image from "next/image";
import Copy from "@/components/layout/Copy";


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




export default function Services() {
  return (
   
      <section className="px-2 lg:px-4  relative z-10">
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
   
  );
}

function ServicesList() {
  return (
    <ul className="flex flex-col text-[#B9935B]">
     {services.map((service) => (
  <ServiceCard key={service.title} service={service} />
))}

    </ul>
  );
}

function ServiceCard({ service }: { service: Service }) {
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