"use client";

import { motion } from "motion/react";
import InfiniteGrid from "@/components/layout/InfiniteGrid";
import useInitialLoad from "@/contexts/initial-load-context";

export default function Lab() {
  const { isInitialLoad } = useInitialLoad();

  return (
    <main className="bg-neutral-100 h-screen w-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="hidden md:block overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: isInitialLoad ? 2.6 : 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className=" text-[clamp(100px,14vw,500px)] font-bold uppercase leading-none typeface-respira-black text-center w-full whitespace-nowrap select-none will-change-transform"
          >
            The Lab
          </motion.h1>
        </div>
        <div className="md:hidden flex flex-col items-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: isInitialLoad ? 2.6 : 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(100px,14vw,500px)] font-bold uppercase leading-none typeface-respira-black text-center w-full whitespace-nowrap select-none will-change-transform"
            >
              The
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: isInitialLoad ? 2.7 : 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(100px,14vw,500px)] font-bold uppercase leading-none typeface-respira-black text-center w-full whitespace-nowrap select-none will-change-transform"
            >
              Lab
            </motion.h1>
          </div>
        </div>
      </div>
      <InfiniteGrid />
    </main>
  );
}
