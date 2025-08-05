"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion, Transition } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

   // Refs for second section animations
  const fastRef = useRef<HTMLHeadingElement>(null);
  const cleanRef = useRef<HTMLHeadingElement>(null);
  const convertingRef = useRef<HTMLHeadingElement>(null);
  const agencyRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  gsap.registerPlugin(ScrollTrigger, useGSAP);

  // Website images for the stack effect
  const websiteImages = [
    {
      id: 1,
      title: "3XSR STUDIO",
      url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop&crop=top",
      alt: "Recording Studio Website"
    },
    {
      id: 2,
      title: "CREATIVE AGENCY",
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop&crop=top",
      alt: "Creative Agency Website"
    },
    {
      id: 3,
      title: "TECH STARTUP",
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=top",
      alt: "Tech Startup Website"
    },
    {
      id: 4,
      title: "E-COMMERCE",
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop&crop=top",
      alt: "E-commerce Website"
    },
    {
      id: 5,
      title: "RESTAURANT",
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=600&fit=crop&crop=top",
      alt: "Restaurant Website"
    }
  ];

  // Fixed transition type
  const transitionSettings: Transition = {
    type: "tween",
    duration: 0.8,
    ease: "easeInOut"
  } as const;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-loop for website images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % websiteImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [websiteImages.length]);


  const getImagePosition = (index: number) => {
    const current = currentImage;
    const total = websiteImages.length;
    const relativeIndex = (index - current + total) % total;

    // Mobile positions
    if (isMobile) {
      if (relativeIndex === 0) {
        return {
          zIndex: 50,
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          filter: 'brightness(1) blur(0px)',
        };
      } else if (relativeIndex === 1) {
        return {
          zIndex: 40,
          opacity: 0.85,
          scale: 0.94,
          x: 20,
          y: 10,
          rotateY: -5,
          rotateX: 1,
          filter: 'brightness(0.9) blur(0.5px)',
        };
      } else if (relativeIndex === 2) {
        return {
          zIndex: 30,
          opacity: 0.7,
          scale: 0.88,
          x: 30,
          y: 15,
          rotateY: -8,
          rotateX: 2,
          filter: 'brightness(0.75) blur(1px)',
        };
      } else {
        return {
          zIndex: 20,
          opacity: 0,
          scale: 0.85,
          x: 40,
          y: 20,
          rotateY: -10,
          rotateX: 3,
          filter: 'brightness(0.6) blur(2px)',
        };
      }
    }
    
    // Desktop positions
    if (relativeIndex === 0) {
      return {
        zIndex: 50,
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        filter: 'brightness(1) blur(0px)',
      };
    } else if (relativeIndex === 1) {
      return {
        zIndex: 40,
        opacity: 0.85,
        scale: 0.94,
        x: 40,
        y: 10,
        rotateY: -10,
        rotateX: 2,
        filter: 'brightness(0.9) blur(0.5px)',
      };
    } else if (relativeIndex === 2) {
      return {
        zIndex: 30,
        opacity: 0.7,
        scale: 0.88,
        x: 70,
        y: 20,
        rotateY: -15,
        rotateX: 4,
        filter: 'brightness(0.75) blur(1px)',
      };
    } else {
      return {
        zIndex: 20,
        opacity: 0,
        scale: 0.85,
        x: 90,
        y: 30,
        rotateY: -20,
        rotateX: 5,
        filter: 'brightness(0.6) blur(2px)',
      };
    }
  };

   useGSAP(
    () => {
      const setupScrollTrigger = () => {
        ScrollTrigger.create({
          trigger: ".hero",
          start: "top top",
          end: `+=${window.innerHeight * 2}px`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // First section animation
            if (progress <= 0.5) {
              
              let opacity = 1;
              let translateZ = 0;
              
              if (progress >= 0.3) {
                const fadeProgress = (progress - 0.3) / 0.2;
                opacity = 1 - fadeProgress;
                translateZ = -fadeProgress * 300;
              }

              if (headerRef.current) {
                gsap.set(headerRef.current, {
                  transform: `translateZ(${translateZ}px)`,
                  opacity,
                });
              }
            } else {
              if (headerRef.current) {
                gsap.set(headerRef.current, { opacity: 0 });
              }
            }

            // Second section animation
            if (progress < 0.4) {
              if (secondSectionRef.current) {
                gsap.set(secondSectionRef.current, {
                  transform: "translateZ(800px)",
                  opacity: 0,
                });
              }
            } else if (progress >= 0.4 && progress <= 0.8) {
              const sectionProgress = (progress - 0.4) / 0.4;
              const translateZ = 800 - sectionProgress * 800;
              const opacity = sectionProgress;

              if (secondSectionRef.current) {
                gsap.set(secondSectionRef.current, {
                  transform: `translateZ(${translateZ}px)`,
                  opacity,
                });
              }
            } else if (progress > 0.8) {
              if (secondSectionRef.current) {
                gsap.set(secondSectionRef.current, {
                  transform: "translateZ(0px)",
                  opacity: 1,
                });
              }
            }
          },
        });
      };

      setupScrollTrigger();

      // Second section text animations
      if (secondSectionRef.current) {
        gsap.fromTo(
          fastRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
              trigger: secondSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );

        gsap.fromTo(
          cleanRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
            scrollTrigger: {
              trigger: secondSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );

        gsap.fromTo(
          convertingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.6,
            scrollTrigger: {
              trigger: secondSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );

        gsap.fromTo(
          agencyRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.8,
            scrollTrigger: {
              trigger: secondSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );

        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1,
            scrollTrigger: {
              trigger: secondSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            }
          }
        );
      }

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      <AuroraBackground className="">
        <section className="hero relative w-full" style={{ perspective: '1000px' }}>
          {/* First Section - Original Hero Content */}
          <div 
            className="hero-content " 
            style={{ perspective: '1000px' }}
            ref={headerRef}
          >
            <div className="container mx-auto px-5 md:px-6 py-2 md:py-16 relative z-10 min-h-screen flex flex-col justify-center items-center lg:items-stretch">
              
              {/* Top Centered Title */}
              <motion.div 
                className="w-full text-center mb-0  md:mt-0 md:mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase mb-8"
                  style={{color:"#B9935B"}}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Landing Page Lead Booster
                </motion.h2>
              </motion.div>

              {/* Restored original structure with mobile centering */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 md:gap-12 items-center">
                
                {/* Left Section - Content */}
                <motion.div 
                  className="space-y-4 md:space-y-8 w-full text-center lg:text-left order-2 lg:order-1 relative bottom-16 lg:bottom-0 "
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="space-y-0 md:space-y-6">
                    <motion.h1 
                      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      Turn <span  style={{color:"#B9935B"}}>Clicks</span>
                      <br />
                      Into <span style={{color:"#B9935B"}}>Clients</span>.
                    </motion.h1>

                    <motion.div 
                      className="space-y-2 md:space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
                        Custom-built landing page proven
                      </p>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
                        to convert cold traffic into leads.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="pt-0 md:pt-4"
                  >
                    <button className="text-black font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl" style={{background:"#B9935B"}}>
                      Build My Page Now
                    </button>
                  </motion.div>
                </motion.div>

                {/* Right Section - Responsive website image stack */}
                <div className="w-full flex justify-center order-1 lg:order-2 mb-24 lg:mb-0">
                  <div className={`relative w-full max-w-2xl ${isMobile ? 'h-[180px] sm:h-[220px]' : 'h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px]'}`}>
                    {/* Stack of all images */}
                    {websiteImages.map((image, index) => {
                      const position = getImagePosition(index);
                      const isCurrent = index === currentImage;
                      
                      return (
                        <motion.div
                          key={image.id}
                          className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-600/50"
                          style={{ 
                            zIndex: position.zIndex,
                            transformStyle: "preserve-3d"
                          }}
                          initial={false}
                          animate={{
                            opacity: position.opacity,
                            scale: position.scale,
                            y: position.y,
                            x: position.x,
                            rotateY: position.rotateY,
                            rotateX: position.rotateX,
                            filter: position.filter
                          }}
                          transition={transitionSettings}
                        >
                          {/* Browser Chrome */}
                          <div className={`bg-gray-800 flex items-center ${
                            isCurrent ? 'h-6 md:h-8 px-3 space-x-2' : 'h-4 md:h-6 px-2 space-x-1 max-w-full'
                          }`}>
                            <div className={`flex ${
                              isCurrent ? 'space-x-2' : 'space-x-1'
                            }`}>
                              <div className={`${isCurrent ? 'w-2 h-2' : 'w-1.5 h-1.5'} bg-red-500 rounded-full`}></div>
                              <div className={`${isCurrent ? 'w-2 h-2' : 'w-1.5 h-1.5'} bg-yellow-500 rounded-full`}></div>
                              <div className={`${isCurrent ? 'w-2 h-2' : 'w-1.5 h-1.5'} bg-green-500 rounded-full`}></div>
                            </div>
                            <div className={`flex-1 bg-gray-700 rounded ${
                              isCurrent ? 'h-4 md:h-5 ml-3 px-2' : 'h-3 md:h-4 ml-2 px-1.5'
                            } flex items-center`}>
                              <div className={`${
                                isCurrent ? 'w-2 h-2' : 'w-1.5 h-1.5'
                              } ${isCurrent ? 'bg-green-400' : 'bg-gray-500'} rounded-full mr-1 md:mr-2`}></div>
                              <div className={`${
                                isCurrent ? 'text-xs' : 'text-[0.6rem] md:text-xxs'
                              } ${isCurrent ? 'text-gray-300' : 'text-gray-400'} truncate`}>
                                {isCurrent 
                                  ? `${image.title.toLowerCase().replace(' ', '')}.com`
                                  : 'website.com'}
                              </div>
                            </div>
                            {isCurrent && <div className="text-gray-400 text-xs hidden md:block">⋯</div>}
                          </div>
                          
                          {/* Website Content */}
                          <div className={`bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden ${isCurrent ? 'h-[calc(100%-1.5rem)]' : 'h-[calc(100%-1rem)]'}`}>
                            <div className="aspect-video w-full h-full">
                              <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                                loading={isCurrent ? "eager" : "lazy"}
                              />
                            </div>
                            
                            {/* Overlay - only for current image */}
                            {isCurrent && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
                                <div className={`absolute bottom-2 left-2 right-2 ${isMobile ? 'md:bottom-2' : 'md:bottom-4 md:left-4 md:right-4'}`}>
                                  <h3 className={`text-white ${isMobile ? 'text-sm' : 'text-lg'} font-bold`}>
                                    {image.title}
                                  </h3>
                                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-300`}>
                                    High-converting landing page design
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - New Content */}
       <div className="absolute inset-0 flex items-start justify-center min-h-screen pt-16 z-10">
  <div
    ref={secondSectionRef}
    className="text-center w-full px-6 max-w-4xl space-y-10"
    style={{ transform: 'translateZ(800px)', opacity: 0 }}
  >
    <p className="text-xl md:text-2xl text-white leading-relaxed">
      You can have the best ads in the world, but if your landing page sucks, 
       you&apos;re throwing money in the fire. Our landing pages don't just look good—they convert.
    </p>

    <div className="space-y-4 md:space-y-6">
      <h2 className="text-4xl md:text-8xl font-bold text-white leading-tight opacity-0"  ref={fastRef}>
        Fast.
      </h2>
      <h2 className="text-4xl md:text-8xl font-bold text-[#B9935B] leading-tight" ref={cleanRef}>
        Clean.
      </h2>
      <h2 className="text-4xl md:text-8xl font-bold text-white leading-tight"  ref={convertingRef}>
        Converting.
      </h2>
    </div>

    <div className="space-y-4 md:space-y-6">
      <h3 className="text-2xl md:text-4xl font-bold text-[#B9935B]"  ref={agencyRef}>AP Agency</h3>
      <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto" ref={descriptionRef} >
        We deliver high-converting landing pages, full website development, 
        and mobile-responsive designs that turn your traffic into customers.
      </p>
    </div>
  </div>
</div>

        </section>
      </AuroraBackground>
    </div>
  );
}