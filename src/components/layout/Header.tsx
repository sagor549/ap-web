"use client";

import { motion } from "motion/react";

export default function Header() {
  return (
    <header>
      <div className="overflow-hidden fixed left-4 lg:left-8 right-4 lg:right-8 top-4.5 lg:top-6 grid grid-cols-12 gap-4 lg:gap-8 z-50">
        <div className="hidden lg:block col-span-3">
          <span className="block overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
            >
              India Based
            </motion.div>
          </span>
          <span className="block overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
              className="block font-medium text-neutral-400 text-[clamp(16px,1.2vw,20px)]"
            >
              Working globally
            </motion.div>
          </span>
        </div>
        <div className="col-span-3">
          <span className="block overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
            >
              Developer at
            </motion.div>
          </span>
          <span className="block overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
            >
              <a
                href="https://www.upwork.com/freelancers/~0183879b494d85ae53?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="overflow-hidden h-6">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2">
                    <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-400 font-medium mb-1.5">
                      UpWork
                    </span>
                    <span className="text-[clamp(16px,1.2vw,20px)] text-neutral-400 font-medium mb-1.5">
                      UpWork
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          </span>
        </div>
        <div className="hidden lg:block col-span-3">
          <span className="block overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
              className="block font-medium text-[clamp(16px,1.2vw,20px)]"
            >
              Freelance availability
            </motion.div>
          </span>
          <span className="block overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
              className="block font-medium text-neutral-400 text-[clamp(16px,1.2vw,20px)]"
            >
              Full time
            </motion.div>
          </span>
        </div>
        <MailButton />
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
      href="codeofsagar@gmail.com"
      className="fixed right-4 lg:right-8 top-4 lg:top-6 group cursor-pointer"
      aria-label="Send me an email"
      role="button"
    >
      <div className="relative">
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
    </motion.a>
  );
}
