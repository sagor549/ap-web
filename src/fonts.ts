import localFont from "next/font/local";

export const saans = localFont({
  src: [
    {
      path: "./Saans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Saans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Saans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Saans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-saans",
});

export const saansMono = localFont({
  src: [
    {
      path: "./SaansMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const lcddot = localFont({
  src: [
    {
      path: "./lcddot.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lcddot",
});
