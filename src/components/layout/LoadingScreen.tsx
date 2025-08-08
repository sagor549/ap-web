"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.1, 1],
              opacity: 1,
              transition: {
                duration: 0.8,
                times: [0, 0.5, 1]
              }
            }}
            exit={{ 
              scale: 0.9,
              opacity: 0,
              transition: { duration: 0.5 }
            }}
          >
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="w-40 h-40 md:w-52 md:h-52"
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1.8,
              opacity: [0, 0.3, 0],
              transition: { 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.5
              }
            }}
            className="absolute rounded-full bg-white/10"
            style={{ width: "200px", height: "200px" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}