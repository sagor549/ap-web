"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function LiveTime() {
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [showSemicolon, setShowSemicolon] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      // Split time into hours and minutes, handling both "1:30 PM" and "11:30 PM" formats
      const [time, period] = timeString.split(" ");
      const [hourPart, minutePart] = time.split(":");

      setHours(`${hourPart}`);
      setMinutes(`${minutePart} ${period}`);
    };

    // Update time immediately
    updateTime();

    // Update time every second
    const timeInterval = setInterval(updateTime, 1000);

    // Blink semicolon every second
    const blinkInterval = setInterval(() => {
      setShowSemicolon((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="overflow-hidden fixed top-6 right-6 hidden lg:block">
      <motion.p
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="font-medium tracking-tight z-999"
      >
        <span>Los Angeles, CA {hours}</span>
        <span style={{ opacity: showSemicolon ? 1 : 0 }}>:</span>
        <span>{minutes}</span>
      </motion.p>
    </div>
  );
}
