"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { pageTransition } from "@/constants/pageTransition";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const router = useTransitionRouter();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-4 flex flex-col">
            <div className="mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Ap Agency Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-neutral-400 max-w-xs">
                Creating innovative digital experiences that connect brands with their audience.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-auto">
              <a 
                href="https://www.instagram.com/ap.digitalagency/?igsh=MXJqOTN0eWhiYXFscQ%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Our Services</h3>
              <ul className="space-y-3">
                <li className="text-neutral-400 block py-1">
                  𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐁𝐫𝐚𝐧𝐝𝐢𝐧𝐠
                </li>
                <li className="text-neutral-400 block py-1">
                  𝐔𝐗/𝐜𝐨𝐝𝐢𝐧𝐠
                </li>
                <li className="text-neutral-400 block py-1">
                  𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐝𝐞𝐬𝐢𝐠𝐧 & 𝐩𝐡𝐨𝐭𝐨𝐬
                </li>
                <li className="text-neutral-400 block py-1">
                  𝐜𝐨𝐦𝐦𝐞𝐫𝐜𝐢𝐚𝐥 𝐯𝐢𝐝𝐞𝐨 𝐬𝐡𝐨𝐨𝐭𝐢𝐧𝐠𝐬
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname === "/") return;
                      router.push("/", { onTransitionReady: pageTransition });
                    }}
                    className="text-neutral-400 hover:text-white transition-colors block py-1"
                  >
                    Home
                  </Link>
                </li>
               
                <li>
                  <Link 
                    href="/work" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname === "/work") return;
                      router.push("/work", { onTransitionReady: pageTransition });
                    }}
                    className="text-neutral-400 hover:text-white transition-colors block py-1"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname === "/contact") return;
                      router.push("/contact", { onTransitionReady: pageTransition });
                    }}
                    className="text-neutral-400 hover:text-white transition-colors block py-1"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wide">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="text-neutral-400">
                  <span className="block font-medium text-white">Email Us</span>
                  <a href="mailto:info@apagency.ca" className="hover:text-white transition-colors">
                    info@apagency.ca
                  </a>
                </li>
                <li className="text-neutral-400">
                  <span className="block font-medium text-white mt-3">Call Us</span>
                  <a href="tel:+16474240504" className="hover:text-white transition-colors">
                    (647) 424-0504
                  </a>
                </li>
                <li className="text-neutral-400">
                  <span className="block font-medium text-white mt-3">HQ Location</span>
                  10330 Yonge St, Richmond Hill, ON L4C 5N1, Canada
                </li>
                <li className="text-neutral-400">
                  <span className="block font-medium text-white mt-3">Working Hours</span>
                  Monday-Friday: 9am - 7pm<br />
                  Saturday: 12pm - 4pm
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Ap Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}