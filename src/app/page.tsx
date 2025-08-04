"use client";

import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechnologiesList from "@/components/sections/TechnologiesList";
import Work from "@/components/sections/Work";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-neutral-100">
      <Hero />
      <About />
      <Work />
      <Services />
      <TechnologiesList />
    </main>
  );
}
