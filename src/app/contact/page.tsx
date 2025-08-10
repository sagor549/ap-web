"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Send, Mail, MapPin, Phone } from 'lucide-react';


function Contact() {
  const containerRef = useRef(null);
  const headerRef1 = useRef(null);
  const headerRef2 = useRef(null);
  const headerRef3 = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const guaranteeRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const headers = [
      { ref: headerRef1, delay: 0 },
      { ref: headerRef2, delay: 0.1 },
      { ref: headerRef3, delay: 0.2 },
    ];

    headers.forEach(header => {
      gsap.from(header.ref.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: header.delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header.ref.current,
          start: "top 90%",
        }
      });
    });

    // Content animations
    gsap.from(infoRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 90%",
      }
    });

    gsap.from(formRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 90%",
      }
    });

    // Guarantee animation
    gsap.from(guaranteeRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.7,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: guaranteeRef.current,
        start: "top 90%",
      }
    });

    // Floating icons animation
    const icons = [
      { selector: ".icon-1", y: 20, duration: 4, delay: 0.2 },
      { selector: ".icon-2", y: -25, duration: 5, delay: 0.5 },
      { selector: ".icon-3", y: 15, duration: 4.5, delay: 0.8 }
    ];
    
    icons.forEach(icon => {
      gsap.to(icon.selector, {
        y: icon.y,
        duration: icon.duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: icon.delay
      });
    });
  }, { scope: containerRef });

  return (
    

   
    <section
      id="contact"
      ref={containerRef}
      className="min-h-[100dvh] text-bridal-health flex flex-col justify-center px-4 py-20 lg:px-12 lg:py-28 relative overflow-hidden"
     
     
    >
     
      
      {/* Section Header */}
      <div className="relative z-10 text-center   mt-10">
        <div className="overflow-hidden mb-4">
          <h2 
            ref={headerRef1} 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl "
            style={{ color: '#B9935B' }}
          >
            Ready to convert more visitors into customers?
          </h2>
        </div>
        
        
        
       
      </div>

      {/* Content Section */}
      <div className="relative z-10 mt-4 max-w-6xl mx-auto">
        <div ref={infoRef} className="flex flex-col gap-8">
             <div ref={formRef} className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10 shadow-xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B9935B] to-[#d4b37e] rounded-t-2xl"></div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0f0f0f] border border-[#3a3a3a] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#B9935B] transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0f0f0f] border border-[#3a3a3a] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#B9935B] transition-all"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-white mb-2 font-medium">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-[#0f0f0f] border border-[#3a3a3a] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#B9935B] transition-all"
                  placeholder="Company Inc."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className="block text-white mb-2 font-medium">Industry</label>
                  <select
                    id="industry"
                    className="w-full bg-[#0f0f0f] border border-[#3a3a3a] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#B9935B] appearance-none"
                  >
                    <option value="">Select your industry</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saas">SaaS</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-white mb-2 font-medium">Monthly Ad Spend</label>
                  <select
                    id="budget"
                    className="w-full bg-[#0f0f0f] border border-[#3a3a3a] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#B9935B] appearance-none"
                  >
                    <option value="">Select your monthly ad spend</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-20k">$5,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">How can we help?</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-[#0f0f0f] border border-[#3a3a3a] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#B9935B] transition-all"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-lg font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ 
                    backgroundColor: '#B9935B',
                    color: '#1a1a1a',
                    boxShadow: '0 4px 20px rgba(185, 147, 91, 0.3)'
                  }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#B9935B' }}>
Let&#39;s Talk Growth
              </h3>
              
              <p className="text-lg lg:text-xl text-white/90 mb-8">
              We&#39;ll show you how our landing pages can transform your conversion rates within days.
 
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#B9935B] p-2 rounded-full flex-shrink-0 mt-1">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                   <h4 className="text-lg font-semibold text-white">Email Us</h4>
<a 
  href="mailto:info@apagency.ca" 
  className="text-white/80 hover:underline"
>
  info@apagency.ca
</a>

                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#B9935B] p-2 rounded-full flex-shrink-0 mt-1">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Call Us</h4>
                    <p className="text-white/80"> (647) 424-0504</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#B9935B] p-2 rounded-full flex-shrink-0 mt-1">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">HQ Location</h4>
                    <p className="text-white/80">10330 Yonge St, Richmond Hill, ON L4C 5N1, Canada</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 rounded-xl border border-[#B9935B]/20" style={{ backgroundColor: 'rgba(185, 147, 91, 0.08)' }}>
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B9935B]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Working Hours
                </h4>
                <p className="text-white/90">Monday-Friday: 9am - 7pm </p>
                <p className="text-white/90">Saturday: 12am - 4pm </p>
              </div>
            </div>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          
          
          {/* Contact Form */}
         
        </div>
      </div>
      
      {/* Guarantee Section */}
      <div ref={guaranteeRef} className="relative z-10 mt-16 lg:mt-20 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-4 p-4 lg:p-5 rounded-full border border-[#B9935B]/30 backdrop-blur-sm" style={{ backgroundColor: 'rgba(185, 147, 91, 0.1)' }}>
          <div className="bg-[#B9935B] rounded-full p-2">
            <Send size={20} className="text-white" />
          </div>
          <p className="text-lg lg:text-xl text-white">
            We respond to all inquiries within <span className="font-bold" style={{ color: '#B9935B' }}>24 business hours</span>
          </p>
        </div>
      </div>

      {/* Animated Icons - Background elements */}
      <div className="icon-1 absolute left-[5%] top-[10%] hidden lg:flex">
        <Image
          src="/images/urchinIcon.png"
          alt="Urchin Icon"
          width={96}
          height={96}
          className="spin opacity-30"
        />
      </div>

      <div className="icon-2 absolute left-[85%] top-[20%] hidden lg:flex">
        <Image
          src="/images/tubularIcon.png"
          alt="Tubular Icon"
          width={80}
          height={80}
          className="spin opacity-30"
        />
      </div>

      <div className="icon-3 absolute left-[15%] bottom-[15%] hidden lg:flex">
        <Image
          src="/images/flowerSwiss.png"
          alt="Flower Icon"
          width={72}
          height={72}
          className="spin opacity-30"
        />
      </div>
      
      {/* Accent Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#B9935B]/10 to-transparent pointer-events-none"></div>
    </section>
 
  );
}

export default Contact;