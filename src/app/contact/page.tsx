"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Send, Mail, MapPin, Phone } from 'lucide-react';

function Contact() {
  const headerRef1 = useRef(null);
  const headerRef2 = useRef(null);
  const headerRef3 = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const formRef = useRef(null);

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

    // Form animation
    gsap.from(".form-element", {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 90%",
        end: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
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
    <section
      id="contact"
      className="min-h-[100dvh] text-bridal-health flex flex-col justify-center px-4 py-32 lg:px-12 lg:py-40 relative overflow-hidden"
      style={{ 
        backgroundColor: '#1a1a1a',
        backgroundImage: 'url("/images/grain.png")',
        backgroundSize: '200px 200px'
      }}
    >
      {/* Animated Headers */}
      <div className="mask">
        <h2 ref={headerRef1} className="text-[8.5dvw] leading-[1] uppercase font-medium tracking-tight" style={{ color: '#B9935B' }}>
          Ready to convert
        </h2>
      </div>
      <div className="mask">
        <h2
          ref={headerRef2}
          className="text-[8.5dvw] leading-[1] uppercase font-medium tracking-tight ml-[18%]"
          style={{ color: '#B9935B' }}
        >
          more visitors
        </h2>
      </div>
      <div className="mask ml-[45%]">
        <h2 ref={headerRef3} className="text-[8.5dvw] leading-[1] uppercase font-medium tracking-tight" style={{ color: '#B9935B' }}>
          into customers?
        </h2>
      </div>

      {/* Content Section */}
      <div className="mt-20 lg:mt-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <h3 className="text-5xl font-bold" style={{ color: '#B9935B' }}>
              Let's Talk Growth
            </h3>
            
            <p className="text-xl text-white/90">
              Fill out the form or contact us directly. We'll show you how our landing pages 
              can transform your conversion rates within days.
            </p>
            
            <div className="space-y-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#B9935B] p-2 rounded-full">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email Us</h4>
                  <p className="text-white/80">growth@apo.agency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#B9935B] p-2 rounded-full">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Call Us</h4>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#B9935B] p-2 rounded-full">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">HQ Location</h4>
                  <p className="text-white/80">123 Conversion Ave, Suite 500<br/>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-6 rounded-xl" style={{ backgroundColor: 'rgba(185, 147, 91, 0.1)' }}>
              <h4 className="text-2xl font-bold text-white mb-3">Working Hours</h4>
              <p className="text-white/90">Monday-Friday: 9am - 6pm PST</p>
              <p className="text-white/90">Saturday: 10am - 2pm PST</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div ref={formRef} className="bg-[#262626] rounded-2xl p-8 lg:p-12 shadow-2xl">
            <form className="space-y-6">
              <div className="form-element">
                <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#1a1a1a] border border-[#B9935B]/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9935B] transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-element">
                <label htmlFor="email" className="block text-white mb-2">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#1a1a1a] border border-[#B9935B]/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9935B] transition-all"
                  placeholder="john@company.com"
                />
              </div>
              
              <div className="form-element">
                <label htmlFor="company" className="block text-white mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-[#1a1a1a] border border-[#B9935B]/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9935B] transition-all"
                  placeholder="Company Inc."
                />
              </div>
              
              <div className="form-element">
                <label htmlFor="message" className="block text-white mb-2">How can we help?</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-[#B9935B]/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9935B] transition-all"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>
              
              <div className="form-element">
                <label htmlFor="budget" className="block text-white mb-2">Monthly Ad Spend</label>
                <select
                  id="budget"
                  className="w-full bg-[#1a1a1a] border border-[#B9935B]/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B9935B] appearance-none"
                >
                  <option value="">Select your monthly ad spend</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-20k">$5,000 - $20,000</option>
                  <option value="20k-50k">$20,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              
              <div className="form-element mt-10">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-lg font-bold py-4 px-8 rounded-lg transition-all hover:bg-[#9e7c4f]"
                  style={{ 
                    backgroundColor: '#B9935B',
                    color: '#1a1a1a'
                  }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Guarantee Section */}
      <div className="mt-20 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-3 p-3 rounded-full" style={{ backgroundColor: 'rgba(185, 147, 91, 0.1)' }}>
          <div className="bg-[#B9935B] rounded-full p-2">
            <Send size={20} className="text-white" />
          </div>
          <p className="text-lg text-white">
            We respond to all inquiries within <span className="font-bold" style={{ color: '#B9935B' }}>24 business hours</span>
          </p>
        </div>
      </div>

      {/* Animated Icons */}
      <div ref={icon1Ref} className="absolute left-[80%] top-36 hidden lg:flex">
        <Image
          src="/images/urchinIcon.png"
          alt="Urchin Icon"
          width={96}
          height={96}
          className="spin"
        />
      </div>

      <div ref={icon2Ref} className="absolute left-[5%] bottom-[27%] hidden lg:flex">
        <Image
          src="/images/tubularIcon.png"
          alt="Tubular Icon"
          width={96}
          height={96}
          className="spin"
        />
      </div>

      <div ref={icon3Ref} className="absolute left-[85%] bottom-28 hidden lg:flex">
        <Image
          src="/images/flowerSwiss.png"
          alt="Flower Icon"
          width={96}
          height={96}
          className="spin"
        />
      </div>
    </section>
  );
}

export default Contact;