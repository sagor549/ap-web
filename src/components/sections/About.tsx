"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { wrapWordsInSpan } from "@/utils/string";
import useWindowSize from "@/hooks/useWindowSize";
import Copy from "../layout/Copy";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { width } = useWindowSize();

  const isVideoInView = useInView(videoRef, {
    once: false,
    margin: "0px 0px -30% 0px",
  });

  useGSAP(() => {
    if (width < 1024) return;

    const paragraph = paragraphRef.current;

    if (!paragraph) return;

    wrapWordsInSpan(paragraph);

    const words = paragraph.querySelectorAll("span");

    words.forEach((word) => {
      word.classList.add("word" + Math.floor(Math.random() * 4));
    });

    document.querySelectorAll("#about .word1").forEach((el) => {
      gsap.to(el, {
        x: "-0.8em",
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          // Start when the word's top reaches 80% of the viewport height
          start: "top 80%",
          // End when the word's bottom reaches 60% of the viewport height
          end: "bottom 60%",
          scrub: 0.2, // Syncs with the scroll and takes 0.2s to update
        },
      });
    });

    document.querySelectorAll("#about .word2").forEach((el) => {
      gsap.to(el, {
        x: "1.6em", // Same value as in CSS
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.2,
        },
      });
    });

    document.querySelectorAll("#about .word3").forEach((el) => {
      gsap.to(el, {
        x: "-2.4em", // Same value as in CSS
        ease: "none",
        scrollTrigger: {
          trigger: el, // We listen to the word's position
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.2,
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="grid grid-cols-12 gap-4 lg:gap-8 pt-56 pb-28 p-4 lg:px-8"
    >
      <div className="flex flex-col col-span-12 lg:col-span-7">
        <Copy>
          <h4 className="font-semibold uppercase mb-4">Myself</h4>
        </Copy>

        {/* Mobile video */}
        <div className="lg:hidden col-span-12 aspect-video rounded-lg overflow-hidden mb-4">
          <motion.video
            ref={videoRef}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={isVideoInView ? { clipPath: "inset(0 0 0 0)" } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src="/videos/about-video-compressed.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="pointer-events-none w-full h-full object-cover"
            onError={(e) => console.error("Video loading error:", e)}
            poster="/images/about-poster.jpg"
          />
        </div>

        <p
          ref={paragraphRef}
          className="hidden lg:block text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
        >
          A web developer who blends creativity with code to build clean, responsive, and purposeful web experiences. With a sharp eye for detail and a love for performance, I bring ideas to life — from social platforms to real-world problem-solving tools — one line of code at a time.


        </p>

        <Copy>
          <p
            ref={paragraphRef}
            className="lg:hidden text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
          >
            A web developer who blends creativity with code to build clean, responsive, and purposeful web experiences. With a sharp eye for detail and a love for performance, I bring ideas to life — from social platforms to real-world problem-solving tools — one line of code at a time.

          </p>
        </Copy>
      </div>

      {/* Desktop video */}
      <div className="hidden lg:block h-full col-span-5">
        <div className="sticky top-[calc(100vh-20vw-172px)] w-full aspect-video rounded-lg lg:rounded-xl overflow-hidden">
          <video
            src="/videos/about-video-compressed.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
