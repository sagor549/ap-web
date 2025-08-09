"use client";

import { cn } from "../../lib/utlis";
import React, { useState, useEffect } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
    
    // Mark as loaded after initial render
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Simplified gradient for mobile
  const mobileGradient = "linear-gradient(250deg, #1a1a1d 0%, #0a0808 30%, #2d2828 60%, #1f1c1c 80%, #B9935B 100%)";
  
  return (
    <div
      className={cn(
        "relative flex flex-col bg-zinc-950 dark:bg-zinc-900 w-full min-h-screen",
        className,
        "overflow-hidden"
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora": isMobile 
              ? mobileGradient
              : "repeating-linear-gradient(250deg, #0a0808 30%, #1a1a1d 15%, #2d2828 20%, #1f1c1c 25%, #B9935B 30%)",
            "--dark-gradient": "repeating-linear-gradient(250deg, #000 0%, #2b2727 7%, transparent 10%, transparent 12%, #000 16%)",
            "--blue-300": "#454f5a",
            "--blue-400": "#5e6266",
            "--blue-500": "#363d44",
            "--indigo-300": "#7d829b",
            "--violet-200": "#B9935B",
            "--black": "#000000",
            "--white": "#b8b1b1",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-[12px] opacity-60 blur-[10px] invert filter will-change-transform 
            [--aurora:repeating-linear-gradient(250deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] 
            [--dark-gradient:repeating-linear-gradient(250deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] 
            after:absolute after:inset-0 after:mix-blend-difference after:content-[""] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            `[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:0%_100%,0%_100%]`,
            `after:[background-size:200%,_100%] after:[background-attachment:fixed]`,
            // Animation only on desktop
            !isMobile && `after:animate-aurora`,
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_0%_100%,black_40%,var(--transparent)_70%)]`,
            "animate-gpu" // For GPU acceleration
          )}
        ></div>
        
        {/* Simplified noise texture for mobile */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9ImciPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjQiIG51bU9jdGF2ZXM9IjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')] mix-blend-soft-light" />
        )}
        
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(to_top,rgba(175, 171, 171, 0.8)_0%,rgba(175, 171, 171, 0.8)_50%,transparent_100%)]" />
        
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_0%_100%,rgba(119, 119, 119, 0.8)_0%,rgba(119, 119, 119, 0.8)_100%)]" />
      </div>
      
      {/* Content container */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};