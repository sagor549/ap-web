"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { cn } from "../../lib/utlis";

function AboutSection() {
  const headerRef1 = useRef(null);
  const headerRef2 = useRef(null);
  const headerRef3 = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const headers = [
      { ref: headerRef1, end: "top 80%" },
      { ref: headerRef2, end: "top 70%" },
      { ref: headerRef3, end: "top 60%" },
    ];

    headers.forEach(header => {
      gsap.from(header.ref.current, {
        scrollTrigger: {
          trigger: header.ref.current,
          start: "top 100%",
          end: header.end,
          scrub: true,
        },
        y: "100%",
      });
    });

    // Content fade-in
    gsap.from(".bio", {
      scrollTrigger: {
        trigger: ".bio",
        start: "top 80%",
        end: "top 70%",
      },
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });

    // Stats animations
    gsap.from([stat1Ref.current, stat2Ref.current], {
      scrollTrigger: {
        trigger: stat1Ref.current,
        start: "top 90%",
        end: "top 70%",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      stagger: 0.3
    });

    // Icon animations
    gsap.to(icon1Ref.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    gsap.to(icon2Ref.current, {
      y: -15,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });
    
    gsap.to(icon3Ref.current, {
      y: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });
  });

  return (
    <AuroraBackground showRadialGradient>
    <section
      id="about"
      className="min-h-[100dvh] text-bridal-health flex flex-col justify-center px-4 py-20 lg:px-12 relative overflow-hidden"
      
    >
      {/* Animated Headers - Centered */}
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="mask overflow-hidden">
          <h2 ref={headerRef1} className="text-4xl lg:text-6xl uppercase" style={{ color: 'white' }}>
            You can have the best ads
          </h2>
        </div>
        <div className="mask overflow-hidden">
          <h2
            ref={headerRef2}
            className="text-4xl lg:text-6xl uppercase  mt-0 md:mt-5"
            style={{ color: '#B9935B' }}
          >
            in the world<span className="text-white">, BUT</span>
          </h2>
        </div>
        <div className="mask overflow-hidden">
          <h2 
            ref={headerRef3} 
            className="text-4xl lg:text-6xl  uppercase   mt-2 text-white   md:mt-5"  
           
          >
            your landing  <span className="" style={{ color: '#B9935B' }}> page SUCKS ?
            </span>
          </h2>
        </div>
      </div>
      
      {/* Content Section - Centered and Compact */}
      <div className="flex flex-col lg:flex-row gap-16 mt-8 lg:mt-12 items-center justify-center">
        {/* Image Container */}
        <div className="relative w-full max-w-2xl h-60 lg:h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/lab/01.png"
            alt="Conversion rate skyrocketing"
            fill
            className="object-center object-cover"
          />
          <div className="absolute inset-0 bg-[#3F3F45] mix-blend-multiply opacity-70" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex flex-col gap-4">
            <p className="text-lg md:text-4xl bio text-white text-center lg:text-left">
              <span className="" style={{ color: '#B9935B' }}>You're throwing money in the fire.</span> Our landing pages don't just look pretty—they <span className="" style={{ color: '#B9935B' }}>convert visitors into customers</span>. Fast loading, clean design, and strategic psychology <span className="" style={{ color: '#B9935B' }}>turn clicks into cash</span>. <span className="" style={{ color: '#B9935B' }}>Stop burning ad spend</span> and start building revenue machines.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#conversion"
                className="text-xs lg:text-sm tracking-wide uppercase  px-6 py-3 bio transition-all hover:bg-[#B9935B] hover:text-white border border-[#B9935B]"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#B9935B'
                }}
              >
                Ignite Your Conversions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Centered */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mt-12 lg:mt-16 text-center">
        <div ref={stat1Ref} className="text-6xl lg:text-7xl  leading-none" style={{ color: '#B9935B' }}>
          90%<span className="text-white text-lg lg:text-xl font-normal block mt-2">of visitors bounce in the first 3 seconds</span>
        </div>
        
        <div ref={stat2Ref} className="text-6xl lg:text-7xl  leading-none" style={{ color: '#B9935B' }}>
          3.2X<span className="text-white text-lg lg:text-xl font-normal block mt-2">better conversion than industry averages</span>
        </div>
      </div>

      {/* Animated Icons - Positioned to avoid content */}
      <div ref={icon1Ref} className="absolute left-[85%] top-[15%] hidden lg:block">
        <Image
          src="/images/urchinIcon.png"
          alt="Urchin Icon"
          width={64}
          height={64}
          className="spin"
        />
      </div>

      <div ref={icon2Ref} className="absolute left-[10%] top-[50%] hidden ">
        <Image
          src="/images/tubularIcon.png"
          alt="Tubular Icon"
          width={64}
          height={64}
          className="spin"
        />
      </div>

      <div ref={icon3Ref} className="absolute left-[80%] bottom-[20%] hidden lg:block">
        <Image
          src="/images/flowerSwiss.png"
          alt="Flower Icon"
          width={64}
          height={64}
          className="spin"
        />
      </div>
    </section>
    </AuroraBackground>
  );
}
interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  showRadialGradient?: boolean;
}

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col bg-zinc-950 dark:bg-zinc-900 w-full",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={
          {
            "--aurora": "repeating-linear-gradient(100deg, #0a0808 30%, #1a1a1d 15%, #2d2828 20%, #1f1c1c 25%, #B9935B 30%)",
            "--dark-gradient": "repeating-linear-gradient(100deg, #000 0%, #2b2727 7%, transparent 10%, transparent 12%, #000 16%)",
            "--blue-300": "#454f5a",
            "--blue-400": "#5e6266",
            "--blue-500": "#363d44",
            "--indigo-300": "#7d829b",
            "--violet-200": "#B9935B",
            "--black": "#000000",
            "--white": "#f7eeee",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        {/* Increased aurora visibility with larger size and higher opacity */}
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[12px] opacity-40 blur-[15px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] after:absolute after:inset-0 after:mix-blend-difference after:content-[""] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            `[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `after:[background-size:200%,_100%] after:[background-attachment:fixed]`,
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_40%,var(--transparent)_70%)]`,
          )}
        ></div>
        
        {/* Enhanced grain overlay */}
        <div className="absolute inset-0 pointer-events-none [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9ImciPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIxLjQiIG51bU9jdGF2ZXM9IjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2cpIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')] mix-blend-soft-light" />
        
        {/* Top dark gradient */}
        <div className="absolute inset-0 pointer-events-none [background-image:linear-gradient(to_bottom,rgba(175, 171, 171, 0.8)_0%,rgba(175, 171, 171, 0.8)_50%,transparent_100%)]" />
        
         <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,rgba(119, 119, 119, 0.8)_0%,rgba(119, 119, 119, 0.8)_100%)]" />
        
      </div>
      {children}
    </div>
  );
};

export default AboutSection;