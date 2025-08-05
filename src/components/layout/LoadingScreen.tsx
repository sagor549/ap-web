"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import useDisableScroll from "@/hooks/useDisableScroll";

export default function LoadingScreen() {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useDisableScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => prev + 1);
    }, 10);

    if (percent === 100) {
      clearInterval(interval);
      setIsLoading(false);
    }
    return () => clearInterval(interval);
  }, [percent]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isLoading ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 1 }}
      className="loading-screen fixed flex items-center justify-center inset-0 z-999 bg-neutral-100  pointer-events-none"
    >
      <div className="overflow-hidden">
        <motion.p
          animate={!isLoading ? { y: "-100%" } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.7, 0, 0.84, 0] }}
          className="text-sm font-semibold tracking-tight"
        >
          {percent}
        </motion.p>
      </div>
    </motion.div>
  );
}