"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import useWindowSize from "@/hooks/useWindowSize";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";
import useInitialLoad from "@/contexts/initial-load-context";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { isInitialLoad } = useInitialLoad();

  return (
    <>
      <section className="h-[100svh] relative px-4 lg:px-8 overflow-x-hidden">
        {/* Mobile */}
        <div className="flex flex-col justify-between h-full py-32 lg:hidden">
          <div className="flex flex-col gap-1">
            <div className="overflow-hidden mb-1 w-full relative">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: isInitialLoad ? 2.5 : 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex justify-between w-full"
              >
                <p className="text-[clamp(14px,1.2vw,20px)] uppercase font-semibold">
                  A
                </p>
                <p className="text-[clamp(14px,1.2vw,20px)] uppercase font-semibold absolute left-1/2 -translate-x-1/2">
                  Seriously
                </p>
                <p className="text-[clamp(14px,1.2vw,20px)] uppercase font-semibold">
                  Good
                </p>
              </motion.div>
            </div>
            <MobileVideo />
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: isInitialLoad ? 2.6 : 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full pointer-events-none lg:pr-[4vw]"
              >
                <img
                  src="/images/other/design.png"
                  alt="Design"
                  className="h-[15vw] md:h-[16vw] lg:h-[17vw]"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden w-full">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  delay: isInitialLoad ? 2.7 : 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/images/other/engineer.png"
                  alt="Engineer"
                  className="w-full pointer-events-none"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block">
        <div className="flex flex-col uppercase font-semibold absolute bottom-[15vh] lg:bottom-[20vh] left-8 right-8">
          <div className="overflow-hidden mb-2 lg:mb-0 lg:w-full relative mx-auto lg:mx-0">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: isInitialLoad ? 2.5 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex justify-between w-full"
            >
              <p className="text-[clamp(14px,1.2vw,20px)] uppercase block">A</p>
              <p className="text-[clamp(14px,1.2vw,20px)] uppercase absolute left-1/2 -translate-x-1/2">
                Seriously
              </p>
              <p className="text-[clamp(14px,1.2vw,20px)] uppercase block">
                Good
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0">
            <div className="overflow-hidden mr-[4vw]">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.2,
                  delay: isInitialLoad ? 2.6 : 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/images/other/design.png"
                  alt="Design"
                  className="h-[10vw] w-auto object-contain pointer-events-none"
                />
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.2,
                  delay: isInitialLoad ? 2.6 : 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/images/other/engineer.png"
                  alt="Engineer"
                  className="h-[10vw] w-auto object-contain pointer-events-none"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden absolute left-8 bottom-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: isInitialLoad ? 3 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-1"
          >
            <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
            <p className="text-[clamp(12px,1.2vw,20px)] font-medium">
              Scroll for
            </p>
          </motion.div>
        </div>
        <div className="overflow-hidden absolute right-8 bottom-6">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: isInitialLoad ? 3 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-1"
          >
            <p className="text-[clamp(12px,1.2vw,20px)] font-medium">
              cool sh*t
            </p>
            <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
          </motion.div>
        </div>
      </section>

      <section className="hidden md:block intro h-[100svh] px-8">
        <DesktopVideo />
      </section>
    </>
  );
}

function MobileVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });
  const { isInitialLoad } = useInitialLoad();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const delay = isInitialLoad ? 2500 : 500;
      const timeoutId = setTimeout(() => {
        video.play().catch(() => {
          console.log("Autoplay failed");
        });
      }, delay);

      return () => clearTimeout(timeoutId);
    } else {
      video.pause();
    }
  }, [isInView, isInitialLoad]);

  return (
    <div ref={containerRef} className="relative md:hidden">
      <motion.video
        ref={videoRef}
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        transition={{
          duration: 1.2,
          delay: isInitialLoad ? 2.6 : 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        src="/videos/hero-video-compressed.mp4"
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full pointer-events-none aspect-video rounded-xl overflow-hidden"
      />
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: isInitialLoad ? 3 : 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-2 right-2 z-10"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        role="button"
      >
        <div className="bg-neutral-100/50 shadow-2xl backdrop-blur-2xl w-10 h-10 rounded-full flex items-center justify-center">
          {!isMuted ? (
            <Volume2 className="w-5 h-5 text-neutral-900" aria-hidden="true" />
          ) : (
            <VolumeX className="w-5 h-5 text-neutral-900" aria-hidden="true" />
          )}
        </div>
      </motion.button>
    </div>
  );
}

function DesktopVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const isInView = useInView(videoContainerRef, { once: false });
  const [isMuted, setIsMuted] = useState(true);
  const { isInitialLoad } = useInitialLoad();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      // Initial delay based on isInitialLoad
      const delay = isInitialLoad ? 2500 : 500;
      const timeoutId = setTimeout(() => {
        video.play().catch(() => {
          console.log("Autoplay failed");
        });
      }, delay);

      return () => clearTimeout(timeoutId);
    } else {
      video.pause();
    }
  }, [isInView, isInitialLoad]);

  useGSAP(() => {
    const videoContainer = videoContainerRef.current;

    if (!videoContainer) return;

    if (width >= 768) {
      const breakpoints = [
        { maxWidth: 900, translateY: -95, movMultiplier: 550 },
        { maxWidth: 1600, translateY: -118, movMultiplier: 600 },
        { maxWidth: 2000, translateY: -110, movMultiplier: 700 },
        { maxWidth: 2500, translateY: -115, movMultiplier: 700 },
      ];

      const getInitialValues = () => {
        for (const br of breakpoints) {
          if (width <= br.maxWidth) {
            return {
              translateY: br.translateY,
              movementMultiplier: br.movMultiplier,
            };
          }
        }

        return {
          translateY: -125,
          movementMultiplier: 700,
        };
      };

      const initialValues = getInitialValues();

      const animationState = {
        scrollProgress: 0,
        initialTranslateY: initialValues.translateY,
        currentTranslateY: initialValues.translateY,
        movementMultiplier: initialValues.movementMultiplier,
        scale: 0.35,
        targetMouseX: 0,
        currentMouseX: 0,
      };

      gsap.timeline({
        scrollTrigger: {
          trigger: ".intro",
          start: "top bottom",
          end: "top 10%",
          scrub: true,
          onUpdate: (self) => {
            animationState.scrollProgress = self.progress;

            animationState.currentTranslateY = gsap.utils.interpolate(
              animationState.initialTranslateY,
              0,
              animationState.scrollProgress
            );

            animationState.scale = gsap.utils.interpolate(
              0.35,
              1,
              animationState.scrollProgress
            );
          },
        },
      });

      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        animationState.targetMouseX = (mouseX / width - 0.5) * 2;
      });

      const animate = () => {
        if (width < 768) return;

        const { scale, targetMouseX, currentMouseX, currentTranslateY } =
          animationState;

        const margin = 32; // or whatever value you want
        const videoWidth = videoContainer.offsetWidth * scale;
        const maxTranslate = (width - margin * 2 - videoWidth) / 2;

        let horizontalMovement = targetMouseX * maxTranslate;
        horizontalMovement = Math.max(
          Math.min(horizontalMovement, maxTranslate),
          -maxTranslate
        );

        animationState.currentMouseX = gsap.utils.interpolate(
          currentMouseX,
          horizontalMovement,
          0.15
        );

        videoContainer.style.transform = `translateY(${currentTranslateY}vh) translateX(${animationState.currentMouseX}px) scale(${scale})`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [width]);

  return (
    <motion.div
      ref={videoContainerRef}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0 0)" }}
      transition={{
        duration: 1.2,
        delay: isInitialLoad ? 2.6 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="video-preview relative w-full aspect-video overflow-hidden rounded-3xl will-change-transform cursor-pointer "
      onClick={() => setIsMuted(!isMuted)}
    >
      <div className="video-wrapper absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
        <motion.video
          ref={videoRef}
          src="/videos/hero-video-compressed.mp4"
          muted={isMuted}
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none"
        />
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: isInitialLoad ? 1 : 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-10 scale-0 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        role="button"
      >
        <div className="bg-neutral-100/50 shadow-2xl backdrop-blur-2xl w-[4vw] h-[4vw] rounded-full flex items-center justify-center">
          {isMuted ? (
            <Volume2
              className="w-[2vw] h-[2vw] text-neutral-900"
              aria-hidden="true"
            />
          ) : (
            <VolumeX
              className="w-[2vw] h-[2vw] text-neutral-900"
              aria-hidden="true"
            />
          )}
        </div>
      </motion.button>
    </motion.div>
  );
}
