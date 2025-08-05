"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className=" fixed left-4 lg:left-8 right-4 lg:right-8 top-4.5 lg:top-4 grid grid-cols-12 gap-4 lg:gap-8 z-50">
        {/* Logo on left - made larger */}
        <div className="col-span-6 md:col-span-3 flex items-center">
          <span className="block overflow-visible">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 bottom-5 md:bottom-6 overflow-y-visible">
                <Image 
                  src="/images/logo.png" 
                  alt="Logo" 
                  fill
                  className="object-center overflow-y-visible"
                />
              </div>
            </motion.div>
          </span>
        </div>

        {/* Center navigation - Hidden on mobile */}
        <div className="hidden md:flex col-span-6 justify-center h-16">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ 
              duration: 1, 
              delay: 3.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="flex bg-black border border-neutral-800 rounded-3xl p-1 items-center"
          >
            {['Packages', 'Portfolio','About Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="font-medium text-[clamp(16px,1.2vw,20px)] px-4 py-2 text-white hover:text-neutral-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Mail button on right - Simplified for mobile */}
        <div className="col-span-6 md:col-span-3 flex justify-end">
          <MailButton />
        </div>
      </div>
    </header>
  );
}

function MailButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
      href="mailto:codeofsagar@gmail.com"
      className="group cursor-pointer"
      aria-label="Send me an email"
      role="button"
    >
      {/* Desktop version */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 top-0 w-12 3xl:w-14 h-12 3xl:h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center rotate-180 scale-95 group-hover:scale-100 group-hover:rotate-0 group-hover:-translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] -z-10">
          <span className="text-lg lg:text-xl 3xl:text-2xl">🤙🏼</span>
        </div>
        <div className="flex items-center relative px-5 lg:px-6 h-12 lg:h-14 rounded-full bg-neutral-900 text-neutral-100 font-semibold text-[clamp(16px,1.2vw,20px)] border border-neutral-800 z-10">
          <div className="overflow-hidden h-6 lg:h-7">
            <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
              <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-100 font-semibold mb-1.5">
                Get in touch
              </span>
              <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-100 font-semibold mb-1.5">
                Get in touch
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden relative">
        <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center">
          <span className="text-2xl">🤙🏼</span>
        </div>
      </div>
    </motion.a>
  );
}