"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Star, Zap, Target, TrendingUp, Award } from "lucide-react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AuroraBackground } from "../ui/aurora-background";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  rating: number;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-[#B9935B] fill-current" : "text-gray-500"}`}
      />
    ));
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-1 md:py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border-2 border-[#B9935B]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-0 md:py-10">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="flex gap-2 mb-2">
              {renderStars(testimonials[active].rating)}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-[#B9935B] text-sm">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-[#B9935B] bg-transparent"
            >
              <IconArrowLeft className="h-5 w-5 text-[#B9935B] transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full border border-[#B9935B] bg-transparent"
            >
              <IconArrowRight className="h-5 w-5 text-[#B9935B] transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef1 = useRef<HTMLHeadingElement>(null);
  const headerRef2 = useRef<HTMLHeadingElement>(null);
  const headerRef3 = useRef<HTMLHeadingElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  
  // Refs for stats animation
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Stats counting animation
    const statRefs = [stat1Ref, stat2Ref, stat3Ref];
    const targetValues = [500, 12.8, 7];
    
    statRefs.forEach((ref, index) => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value: targetValues[index],
        duration: 2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (ref.current) {
            if (index === 1) { // Percentage value
              ref.current.textContent = counter.value.toFixed(1) + '%';
            } else {
              ref.current.textContent = Math.round(counter.value).toString();
            }
          }
        }
      });
    });

  }, []);

  const testimonials: Testimonial[] = [
    {
      quote: "Our conversion rate jumped from 2.3% to 12.8% in just two weeks. The ROI was immediate and substantial. This is exactly what we needed.",
      name: "Sarah Chen",
      designation: "Marketing Director, TechFlow",
      src: "/images/cus3.avif",
      rating: 5
    },
    {
      quote: "Finally, a landing page that actually converts. Clean, fast, and strategically designed. Worth every penny and more.",
      name: "Marcus Rodriguez",
      designation: "Founder, GrowthLab",
      src: "/images/cus5.jpg",
      rating: 5
    },
    {
      quote: "The A/B testing and optimization made all the difference. Our cost per acquisition dropped by 40% within the first month.",
      name: "Emily Watson",
      designation: "CMO, ScaleUp Inc",
      src: "/images/cus1.webp",
      rating: 5
    },
    {
      quote: "Professional, results-driven, and backed by a solid guarantee. This is how landing pages should be done in 2024.",
      name: "David Kim",
      designation: "CEO, ConvertPro",
      src: "/images/cus2.jpg",
      rating: 5
    },
    {
      quote: "The speed optimization alone improved our Google Ads quality score. The conversions were just the cherry on top.",
      name: "Lisa Thompson",
      designation: "Digital Marketing Manager",
      src: "/images/cus4.jpg",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-[#B9935B] mb-4" />,
      title: "Crafted for speed and maximum conversions",
      description: "Every element optimized for performance and user experience",
    },
    {
      icon: <Target className="w-8 h-8 text-[#B9935B] mb-4" />,
      title: "Continuous testing and optimization",
      description: "Data-driven improvements that keep your conversion rates climbing",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#B9935B] mb-4" />,
      title: "Focused on real results, not just design",
      description: "Beautiful pages that actually drive business growth",
    }
  ];

  return (
    <AuroraBackground>
      <section
        ref={sectionRef}
        id="reviews"
        className="min-h-screen flex flex-col py-10 lg:px-12 relative overflow-hidden"
      >
        {/* Animated Headers */}
        <div className="flex flex-col items-center text-center mb-16 max-w-full">
          <div className="mask overflow-hidden">
            <h2 ref={headerRef1} className="text-4xl md:text-6xl uppercase mb-0 md:mb-6" style={{ color: 'white' }}>
            Don&#39;t Send Traffic to a
            </h2>
          </div>
          <div className="mask overflow-hidden">
            <h2
              ref={headerRef2}
              className="text-4xl lg:text-6xl uppercase"
              style={{ color: '#B9935B' }}
            >
              Glorified Brochure <span className="text-white"></span>
            </h2>
          </div>
          <div className="mask overflow-hidden">
            <h2 
              ref={headerRef3} 
              className="text-4xl lg:text-6xl uppercase mt-4"  
              style={{ color: 'white' }}
            >
              Send it to a <span className="text-white">Buying Machine</span>
            </h2>
          </div>
        </div>

        {/* Intro Text */}
        <div className="mx-auto text-center mb-20 max-w-3xl px-4">
          <p className="text-xl md:text-2xl text-white mb-8">
Pick the Landing Page Lead Booster when you&#39;re tired of low conversions and ready to scale.
          </p>
          <p className="text-xl md:text-2xl text-[#B9935B] leading-relaxed tracking-normal">
           We write, build, and optimize the one page that will bring you the biggest ROI of your entire funnel.
  It&#39;s not magic. It&#39;s just better execution—with a hard guarantee to back it up.
          </p>
        </div>

        {/* Benefits Section - Elegant Minimalist */}
        <div className="max-w-5xl mx-auto mb-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="inline-block"
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] rounded-full px-8 py-4 border border-[#2a2a2a] shadow-lg">
            <div className="flex space-x-1">
              {Array(5).fill(0).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  <Star
                    className={`w-6 h-6 ${i < 5 ? "text-[#B9935B] fill-current" : "text-gray-500"}`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-xl font-bold text-white">4.9/5</span>
            <span className="text-gray-300">from 247+ clients</span>
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Award className="w-6 h-6 text-[#B9935B]" />
            </motion.div>
          </div>
        </div>

        {/* Animated Testimonials */}
        <div className="mb-20">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>

        {/* Stats Section - Animated Numbers with Stars */}
        <div className="max-w-4xl mx-auto mb-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                   
                  </motion.div>
                ))}
              </div>
              <div ref={stat1Ref} className="text-5xl font-bold text-[#B9935B] mb-2">0</div>
              <div className="text-xl text-white">Happy Clients</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                   
                  </motion.div>
                ))}
              </div>
              <div ref={stat2Ref} className="text-5xl font-bold text-[#B9935B] mb-2">0%</div>
              <div className="text-xl text-white">Avg Conversion Rate</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                   
                  </motion.div>
                ))}
              </div>
              <div ref={stat3Ref} className="text-5xl font-bold text-[#B9935B] mb-2">0</div>
              <div className="text-xl text-white">Avg Delivery Time</div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center mb-20">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#B9935B",
              color: "#0a0a0a"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-sm lg:text-base uppercase px-8 py-4 transition-all border border-[#B9935B] font-bold"
            style={{ 
              backgroundColor: 'transparent',
              color: '#B9935B'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Zap className="w-5 h-5" fill="#B9935B" />
            </motion.div>
            <span>Ignite Your Conversions</span>
          </motion.button>
        </div>

        {/* Animated Icons */}
        <div ref={icon1Ref} className="absolute left-[85%] top-[15%] hidden lg:block">
          <Image
            src="/images/urchinIcon.png"
            alt="Urchin Icon"
            width={64}
            height={64}
            className="spin"
          />
        </div>

        <div ref={icon2Ref} className="absolute left-[10%] top-[50%] hidden lg:block">
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