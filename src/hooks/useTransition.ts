"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);
CustomEase.create("easeInOutQuart", "0.76, 0, 0.24, 1");

export default function useTransition() {
  useGSAP(() => {
    gsap.to(".revealer", {
      scaleY: 0,
      duration: 1.25,
      delay: 1,
      ease: "easeInOutQuart",
    });
  }, []);
}
