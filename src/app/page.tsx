"use client";


import Services from "@/components/sections/Services";
import TechnologiesList from "@/components/sections/TechnologiesList";
import Work from "@/components/sections/Work";

import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="bg-neutral-100">
      <HeroSection/>
      
      
      <Work />
      <Services />
      <TechnologiesList />
    </main>
  );
}
