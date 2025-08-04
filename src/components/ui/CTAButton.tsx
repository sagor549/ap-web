"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { lcddot } from "@/fonts";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useFooter } from "@/contexts/footer-context";
import { useTransitionRouter } from "next-view-transitions";
import { pageTransition } from "@/constants/pageTransition";
import { usePathname } from "next/navigation";
import useInitialLoad from "@/contexts/initial-load-context";

const navItems = [
  {
    title: "Home",
    href: "/",
    imageUrl: "/images/pages/home-icon.png",
  },
  {
    title: "Work",
    href: "/work",
    imageUrl: "/images/pages/work-icon.png",
  },
  {
    title: "Lab",
    href: "/lab",
    imageUrl: "/images/pages/lab-icon.png",
  },
];

export default function CTAButton() {
  const ref = useRef<HTMLDivElement>(null);
  const { footerRef } = useFooter();
  const [isOpen, setIsOpen] = useState(false);
  const { isInitialLoad } = useInitialLoad();
  const pathname = usePathname();

  useOnClickOutside(isOpen, ref as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const isFooterInView = useInView(footerRef, { amount: 0.4 });
  const shouldAnimate = pathname !== "/lab" && footerRef.current;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={
        !shouldAnimate || !isFooterInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { y: 200, scale: 0.95, opacity: 1 }
      }
      transition={{
        duration: 1,
        delay: isInitialLoad ? 3 : 0,
        ease: [0.16, 1, 0.3, 1],
        opacity: {
          duration: 1,
          delay: 3,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="py-2 pl-2 pr-4 md:pr-8 rounded-2xl md:rounded-[20px] bg-neutral-900 border border-neutral-800 fixed left-4 md:left-1/2 right-4 md:right-auto md:-translate-x-1/2 bottom-4 md:bottom-6 md:w-[700px] z-50 overflow-hidden"
    >
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="overflow-hidden"
      >
        <nav className="flex flex-col gap-4 mb-4">
          {navItems.map((item, index) => {
            return (
              <NavItem
                key={item.title}
                {...item}
                index={index}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            );
          })}
        </nav>

        <div className="pb-4">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isOpen ? "100%" : "0%" }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
            className="h-px rounded bg-neutral-800"
          ></motion.div>
        </div>
      </motion.div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-5">
          <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-lg md:rounded-xl bg-neutral-100 overflow-hidden relative">
            <video
              src="/videos/emoji.mov"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-[52%] left-[47%] -translate-x-1/2 -translate-y-1/2 h-full w-full scale-140"
            />
          </div>

          <div className="flex flex-col gap-1.5 md:gap-2 w-[250px] sm:w-[500px] relative">
            <Link
              href="/"
              className="md:text-lg font-semibold text-neutral-100 uppercase"
            >
              Sagar Ghosh
            </Link>
            <Slider />
          </div>
        </div>

        {isOpen ? (
          <X
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-7 h-7 text-neutral-100 hover:text-neutral-400 transition-all duration-300 cursor-pointer"
            aria-label="Close menu"
            role="button"
            aria-expanded={isOpen}
            aria-controls="navigation-menu"
          />
        ) : (
          <Menu
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-7 h-7 text-neutral-100 hover:text-neutral-400 transition-all duration-300 cursor-pointer"
            aria-label="Open menu"
            role="button"
            aria-expanded={isOpen}
            aria-controls="navigation-menu"
          />
        )}
      </div>
    </motion.div>
  );
}

function Slider() {
  return (
    <div className="flex justify-center items-center h-4 md:h-4.5 overflow-hidden relative w-full">
      <div className="absolute left-0 h-full w-10 bg-linear-to-r from-neutral-900/95 to-neutral-900/0 z-10" />
      <div className="absolute right-0 h-full w-10 bg-linear-to-l from-neutral-900/95 to-neutral-900/0 z-10" />

      <div className="flex overflow-hidden">
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className={`${lcddot.className} text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-1.5`}
        >
          Modern Web Developer, Web Animator , Saas Builder, Next.js
          Dev,
        </motion.p>
        <motion.p
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className={`${lcddot.className} text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-1.5`}
        >
          Modern Web Developer, Web Animator , Saas Builder, Next.js
          Dev,
        </motion.p>
      </div>
    </div>
  );
}

function NavItem({
  title,
  href,
  imageUrl,
  index,
  isOpen,
  setIsOpen,
}: {
  title: string;
  href: string;
  imageUrl: string;
  index: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(false);
        setTimeout(() => {
          if (pathname === href) return;
          router.push(href, {
            onTransitionReady: pageTransition,
          });
        }, 500);
      }}
      className="flex items-center gap-5 group cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.9,
          y: isOpen ? 0 : 24,
        }}
        transition={{
          duration: 0.5,
          delay: 0.4 + -index * 0.075,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg md:rounded-xl overflow-hidden relative"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center scale-110 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
      </motion.div>
      <div className="overflow-hidden h-8">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: isOpen ? "0%" : "100%" }}
          transition={{
            duration: 0.5,
            delay: 0.2 + -index * 0.075,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1/2"
        >
          <span className="text-lg md:text-xl font-semibold text-neutral-100 mb-1.5">
            {title}
          </span>
          <span className="text-lg md:text-xl font-semibold text-neutral-100 mb-1.5">
            {title}
          </span>
        </motion.div>
      </div>
    </Link>
  );
}
