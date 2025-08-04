import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sagar | Web Developer | Software Engineer",
  description: "Sagar | Software design engineer based in Los India.",

  // Basic SEO
  keywords: [
    "Sofware design engieer",
    "Senior software design engineer",
    "Software engineer",
    "Frontend engineer",
    "Software architect",
    "Software engineer",
    "Software developer",
    "Design engineer",
  ],


  // Open Graph
  openGraph: {
    title: "Software Design Engineer",
    description:
      "Jason Zubiate | Software design engineer based in Los Angeles.",
    url: "https://itsjay.us",
    siteName: "itsjay.us",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jason Zubiate - Design Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Jason Zubiate - Design Engineer",
    description:
      "Jason Zubiate | Software design engineer based in Los Angeles.",
    creator: "@itsjay.us",
    images: [
      {
        url: "/src/app/opengraph-image.png",
        width: 1200,
        height: 675,
        alt: "Jason Zubiate - Design Engineer",
      },
    ],
  },

  // Canonical URL
  alternates: {
    canonical: "https://itsjay.us",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Verification
  verification: {
    google: "google-site-verification-code-123456",
    yandex: "yandex-verification-code-123456",
    yahoo: "yahoo-verification-code-123456",
    other: {
      me: ["https://linkedin.com/in/jasonzubiate"],
    },
  },

  // App links
  appleWebApp: {
    title: "Jason Zubiate Portfolio",
    statusBarStyle: "default",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Other
  category: "Portfolio",
  colorScheme: "light dark",
  themeColor: "#FBC1D5",
};
