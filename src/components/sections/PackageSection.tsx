"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Check } from 'lucide-react';





function PackageSection() {
  const headerRef1 = useRef(null);
  const headerRef2 = useRef(null);
  const guaranteeRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const priceRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const headers = [
      { ref: headerRef1, end: "top 80%" },
      { ref: headerRef2, end: "top 70%" },
      { ref: guaranteeRef, end: "top 60%" }
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
    gsap.from(".feature-item", {
      scrollTrigger: {
        trigger: ".feature-item",
        start: "top 80%",
        end: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
    });

    // Price animation
    gsap.from(priceRef.current, {
      scrollTrigger: {
        trigger: priceRef.current,
        start: "top 90%",
        end: "top 70%",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      duration: 1
    });

    // Button animation
    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 90%",
        end: "top 70%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.5
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

  const features = [
    "1 custom high-converting landing page (desktop + mobile)",
    "Copywriting designed to convert cold traffic",
    "On-brand design optimized for speed & flow",
    "Form integration with your CRM or email platform",
    "Pixel, analytics, and conversion tracking setup",
    "A/B variant included for testing (headline or layout)",
    "7-day post-launch monitoring + 1 revision"
  ];

  return (
     
    <section
      id="packages"
      className="min-h-[100dvh] text-bridal-health flex flex-col justify-center px-4 py-12 lg:px-12 relative overflow-hidden"
      
    >
      {/* Centered Headers */}
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="mask overflow-hidden">
          <h2 ref={headerRef1} className="text-4xl lg:text-6xl uppercase" style={{ color: 'white' }}>
            Landing Page Lead Booster
          </h2>
        </div>
        <div className="mask overflow-hidden">
          <h2
            ref={headerRef2}
            className="text-4xl lg:text-6xl uppercase mt-0 md:mt-5"
            style={{ color: '#B9935B' }}
          >
            The Closer
          </h2>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          {/* Video Container */}
          <div className="relative w-full h-80 lg:h-full rounded-lg overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/trackstack-preview-compressed.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-[#3F3F45] mix-blend-multiply opacity-70" />
          </div>
          
          <div>
            <h3 className="text-2xl lg:text-5xl mb-4  mt-0 md:mt-5" style={{ color: '#B9935B' }}>Who it&#39;s for:</h3>
            <ul className="space-y-5 text-lg lg:text-xl text-white">
              <li className="flex items-start gap-3">
                <span className="text-[#B9935B]">•</span>
                <span>Anyone running paid ads (Google, Meta, TikTok, YouTube, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B9935B]">•</span>
                <span>Businesses tired of getting clicks but no customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B9935B]">•</span>
                <span>Founders who want ROI, not design fluff</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 lg:w-1/3  ml-0 md:ml-32">
          <div>
            <h3 className="text-2xl lg:text-5xl mb-4" style={{ color: '#B9935B' }}>What You Get:</h3>
            <div className="space-y-3 text-xl">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item flex items-start gap-3 p-3 rounded-lg"
                >
                  <Check className="flex-shrink-0 mt-1" style={{ color: '#B9935B' }} size={20} />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div ref={priceRef} className="text-5xl lg:text-6xl mb-2" style={{ color: '#B9935B' }}>
              $949
            </div>
            <p className="text-white mb-6">Flat Rate (payment plan available)</p>
            
            <Link
              href="/contact"
              ref={buttonRef}
              className="text-sm lg:text-base tracking-wide uppercase px-6 py-3 w-full max-w-xs text-center transition-all hover:bg-[#B9935B] hover:text-white border border-[#B9935B]"
              style={{ 
                backgroundColor: 'transparent',
                color: '#B9935B',
              }}
            >
              Ignite Your Conversions
            </Link>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="mt-12 lg:mt-16">
        <div className="mask overflow-hidden">
          <Link href="/contact" 
            ref={guaranteeRef} 
            className="text-3xl lg:text-4xl uppercase text-center"
            style={{ color: '#B9935B' }}
          >
            Iron-Clad Guarantee
          </Link>
        </div>
        
        <div className="text-center mt-6 max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl text-white">
           If your new landing page doesn&#39;t hit a 10%+ conversion rate or significantly 
  outperform your current one within 30 days, we&#39;ll optimize it again for free.
          </p>
          <p className="text-xl lg:text-2xl mt-4" style={{ color: '#B9935B' }}>
            Still doesn&#39;t hit? You get your money back. No questions. No excuses.
          </p>
        </div>
      </div>

      {/* Animated Icons */}
      <div ref={icon1Ref} className="absolute left-[85%] top-[15%] hidden ">
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

      <div ref={icon3Ref} className="absolute left-[80%] bottom-[20%] hidden ">
        <Image
          src="/images/flowerSwiss.png"
          alt="Flower Icon"
          width={64}
          height={64}
          className="spin"
        />
      </div>
    </section>
   
  );
}



export default PackageSection;