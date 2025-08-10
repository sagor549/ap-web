export type Project = {
  title: string;
  
  slug: string;
  category: string;
  keywords: string[];
  summary: string[];
  year: number;
  url: string | null;
  backgroundImageUrl: string;
  videoUrl: string;
  media: {
    type: "image" | "video";
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "3XSR",
   
    slug: "3xr",
    category: "Portfolio",
    keywords: ["Web Design", "Development", "Next.js", "Tailwind CSS"],
    summary: ["Website project for 3XR."],
    year: 2025,
    url: "https://3xsr.ca/",
    backgroundImageUrl: "/3xr/1.png",
    videoUrl: "/3xr/3xr.mp4",
    media: [
      { type: "image", url: "/3xr/1.png" },
      { type: "image", url: "/3xr/2.png" },
      { type: "image", url: "/3xr/3.png" },
      { type: "image", url: "/3xr/4.png" },
      { type: "image", url: "/3xr/5.png" },
      { type: "video", url: "/3xr/3xr.mp4" },
    ],
  },
  {
    title: "AP Video Ad Agency",
   
    slug: "ap-video-ad-agency",
    category: "Services",
    keywords: ["Video Production", "Marketing", "Next.js", "Tailwind CSS"],
    summary: ["Website for AP Video Ad Agency."],
    year: 2025,
    url: "https://offer.apagency.ca/",
    backgroundImageUrl: "/video/1.png",
    videoUrl: "/video/video.mp4",
    media: [
      { type: "image", url: "/video/1.png" },
      { type: "image", url: "/video/2.png" },
      { type: "image", url: "/video/3.png" },
      { type: "image", url: "/video/4.png" },
      { type: "image", url: "/video/5.png" },
      { type: "image", url: "/video/6.png" },
      { type: "image", url: "/video/7.png" },
      { type: "video", url: "/video/video.mp4" },
    ],
  },
  {
    title: "Brass Knuckles",
   
    slug: "brass-knuckles",
    category: "E-commerce",
    keywords: ["E-commerce", "Product Design", "Next.js", "Tailwind CSS"],
    summary: ["E-commerce website for Brass Knuckles."],
    year: 2025,
    url: null,
    backgroundImageUrl: "/ecom/1.png",
    videoUrl: "ecom/ecom.mp4",
    media: [
      { type: "image", url: "/ecom/1.png" },
      { type: "image", url: "/ecom/2.png" },
      { type: "image", url: "/ecom/3.png" },
      { type: "image", url: "/ecom/4.png" },
      { type: "image", url: "/ecom/5.png" },
      { type: "video", url: "/ecom/ecom.mp4" },
    ],
  },
  {
    title: "Balanced Pitch",
   
    slug: "balanced-pitch",
    category: "Music",
    keywords: ["Music", "Branding", "Next.js", "Tailwind CSS"],
    summary: ["Website for Balanced Pitch."],
    year: 2025,
    url: null,
    backgroundImageUrl: "/music/1.png",
    videoUrl: "/music/music.mp4",
    media: [
      { type: "image", url: "/music/1.png" },
      { type: "image", url: "/music/2.png" },
      { type: "image", url: "/music/3.png" },
      { type: "image", url: "/music/4.png" },
      { type: "image", url: "/music/5.png" },
      { type: "image", url: "/music/6.png" },
      { type: "video", url: "/music/music.mp4" },
    ],
  },
  {
    title: "AP Merchandise",
   
    slug: "ap-merchandise",
    category: "Landing page",
    keywords: ["Merchandise", "Storefront", "Next.js", "Tailwind CSS"],
    summary: ["E-commerce site for AP Merchandise."],
    year: 2025,
    url: "https://merchandise.advancedprinting.org/",
    backgroundImageUrl: "/mer/1.png",
    videoUrl: "/mer/mer.mp4",
    media: [
      { type: "image", url: "/mer/1.png" },
      { type: "image", url: "/mer/2.png" },
      { type: "image", url: "/mer/3.png" },
      { type: "image", url: "/mer/4.png" },
      { type: "image", url: "/mer/5.png" },
      { type: "image", url: "/mer/6.png" },
      { type: "video", url: "/mer/mer.mp4" },
    ],
  },
  {
    title: "Toronto Delivery Company",
   
    slug: "toronto-delivery-company",
    category: "Services",
    keywords: ["Logistics", "Delivery", "Next.js", "Tailwind CSS"],
    summary: ["Website for Toronto Delivery Company."],
    year: 2025,
    url: null,
    backgroundImageUrl: "/tdg/1.png",
    videoUrl: "/tdg/tdg.mp4",
    media: [
      { type: "image", url: "/tdg/1.png" },
      { type: "image", url: "/tdg/2.png" },
      { type: "image", url: "/tdg/3.png" },
      { type: "image", url: "/tdg/4.png" },
      { type: "image", url: "/tdg/5.png" },
      { type: "image", url: "/tdg/6.png" },
      { type: "image", url: "/tdg/7.png" },
      { type: "video", url: "/tdg/tdg.mp4" },
    ],
  },
];
