"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Don't show footer on lab page
  if (pathname === "/lab") {
    return null;
  }

  return <Footer />;
}
