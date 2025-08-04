import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Header from "../components/layout/Header";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next";
import CTAButton from "@/components/ui/CTAButton";
import { saans } from "@/fonts";
import { FooterProvider } from "@/contexts/footer-context";
import DocumentTitleChanger from "@/components/layout/DocumentTitleChanger";
import { metadata } from "./metadata";
import FooterWrapper from "@/components/layout/FooterWrapper";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { InitialLoadProvider } from "@/contexts/initial-load-context";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <ReactLenis root>
          <InitialLoadProvider>
            <FooterProvider>
              <body
                className={`${saans.className} antialiased bg-neutral-900 text-neutral-900 overscroll-none`}
              >
                <LoadingScreen />
                <DocumentTitleChanger />
                <Header />
                <CTAButton />
                {children}
                <FooterWrapper />
                <Analytics />
              </body>
            </FooterProvider>
          </InitialLoadProvider>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
