"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '../ui/aura';



interface WebsiteImage {
  id: number;
  title: string;
  url: string;
  alt: string;
}

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 1024);
      const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);


  const websiteImages: WebsiteImage[] = [
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

  // Auto-loop functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % websiteImages.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [websiteImages.length]);

 const getImagePosition = (index: number) => {
    const current = currentImage;
    const total = websiteImages.length;
    const relativeIndex = (index - current + total) % total;

    // Desktop layout - centered stack
    if (isDesktop) {
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
          transformOrigin: 'center center',
        };
      } else if (relativeIndex === 1) {
        return {
          zIndex: 40,
          opacity: 1,
          scale: 0.94,
          x: 60,
          y: 10,
          rotateY: -18,
          rotateX: 2,
          filter: 'brightness(0.9) blur(0.5px)',
          transformOrigin: 'center center',
        };
      } else if (relativeIndex === 2) {
        return {
          zIndex: 30,
          opacity: 1,
          scale: 0.88,
          x: 120,
          y: 20,
          rotateY: -30,
          rotateX: 4,
          filter: 'brightness(0.75) blur(1px)',
          transformOrigin: 'center center',
        };
      } else {
        return {
          zIndex: 20,
          opacity: 1,
          scale: 0.85,
          x: 150,
          y: 30,
          rotateY: -45,
          rotateX: 5,
          filter: 'brightness(0.6) blur(2px)',
          transformOrigin: 'center center',
        };
      }
    } 
    // Mobile layout - centered stack
    else {
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
          transformOrigin: 'center center',
        };
      } else if (relativeIndex === 1) {
        return {
          zIndex: 40,
          opacity: 0.85,
          scale: 0.94,
          x: 30,
          y: 10,
          rotateY: -18,
          rotateX: 2,
          filter: 'brightness(0.9) blur(0.5px)',
          transformOrigin: 'center center',
        };
      } else if (relativeIndex === 2) {
        return {
          zIndex: 30,
          opacity: 0.7,
          scale: 0.88,
          x: 60,
          y: 20,
          rotateY: -30,
          rotateX: 4,
          filter: 'brightness(0.75) blur(1px)',
          transformOrigin: 'center center',
        };
      } else {
        return {
          zIndex: 20,
          opacity: 0,
          scale: 0.85,
          x: 90,
          y: 30,
          rotateY: -45,
          rotateX: 5,
          filter: 'brightness(0.6) blur(2px)',
          transformOrigin: 'center center',
        };
      }
    }
  };


  // Animation settings
  const transitionSettings = {
    duration: 0.8,
    ease: "easeInOut" as const
  };




  return (
  <div>
      <AuroraBackground>
  
   
      <div className="container mx-auto px-4 md:px-6 py-30 md:py-12 relative z-10 min-h-screen flex flex-col justify-center ">
        {/* Top Centered Title */}
        <motion.div 
          className="w-full text-center mb-6 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase" 
            style={{color:"#B9935B"}}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Landing Page Lead Booster
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Section - Content */}
          <motion.div 
            className="space-y-6 md:space-y-8 w-full text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4 md:space-y-9">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-9xl xl:text-9xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Turn <span  style={{color:"#B9935B"}}>Clicks  </span>
                
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
              className="pt-4"
            >
              <button className="text-black font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl" style={{background:"#B9935B"}}>
                Build My Page Now
              </button>
            </motion.div>
          </motion.div>

          {/* Right Section - Responsive website image stack */}
          <div className="w-full flex items-center justify-center order-1 lg:order-2 "
               >
            <div className="relative w-72 md:w-6xl max-w-6xl h-[180px] sm:h-[280px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
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
                    <div className="h-[calc(100%-1.5rem)] md:h-[calc(100%-2rem)] bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
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
                          <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4">
                            <h3 className="text-white text-sm md:text-lg font-bold">
                              {image.title}
                            </h3>
                            <p className="text-gray-300 text-xs md:text-sm">
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
       </AuroraBackground>
   </div>
  );
};

export default HeroSection