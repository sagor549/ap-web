export type Project = {
  title: string;
  icon: string;
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
    title: "Jazmin Wong",
    icon: "/images/work/jazmin-wong/jazmin-wong-icon.png",
    slug: "jazmin-wong",
    category: "Portfolio",
    keywords: [
      "Art Direction",
      "Voice & Tone",
      "UI",
      "UX",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Matter.js",
      "Lenis",
      "Vercel",
    ],
    summary: [
      "Designed and developed a personal website for Jazmin Wong, a creative content strategist. The project emphasized a bold, engaging layout with playful micro-interactions to reflect her dynamic approach to content creation.",
    ],
    year: 2025,
    url: "https://jazzicreates.tv",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1744731036457-b74958fd6bf5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/jazmin-wong-preview-compressed.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/jazmin-wong/image-01.png",
      },
      {
        type: "video",
        url: "/videos/work/jazmin-wong/video-01.mp4",
      },
      {
        type: "image",
        url: "/images/work/jazmin-wong/image-03.png",
      },
      {
        type: "image",
        url: "/images/work/jazmin-wong/image-04.png",
      },
      {
        type: "image",
        url: "/images/work/jazmin-wong/image-05.png",
      },
      {
        type: "image",
        url: "/images/work/jazmin-wong/image-06.png",
      },
    ],
  },
  {
    title: "Trackstack",
    icon: "/images/work/trackstack/trackstack-icon.png",
    slug: "trackstack",
    category: "Product",
    keywords: [
      "Art Direction",
      "Naming & Copywriting",
      "Voice & Tone",
      "Brand Design",
      "Strategy",
      "UX",
      "UI",
      "Web Design",
      "Product Design",
      "Media Production",
    ],
    summary: [
      "Redesigned the website for a UK-based software company ",
      "supporting 10,000+ high-performance DJs and labels. The ",
      "goal was to communicate their mission of streamlining career ",
      "growth. I currently work on their product team as a developer.",
    ],
    year: 2025,
    url: null,
    backgroundImageUrl: "/images/work/trackstack/cover.jpg",
    videoUrl: "/videos/trackstack-preview-compressed.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/trackstack/image-01.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-02.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-07.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-03.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-05.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-06.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-04.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-08.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-09.png",
      },
      {
        type: "image",
        url: "/images/work/trackstack/image-10.png",
      },
    ],
  },
  {
    title: "Kick & Bass",
    icon: "/images/work/kick-bass/kick-bass-icon.png",
    slug: "kick-bass",
    category: "Services",
    keywords: [
      "Art Direction",
      "Web Design",
      "Responsive Design",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Lenis",
      "Contentful",
      "Vercel",
      "Shopify API",
    ],
    summary: [
      "Designed & developed the primary website for an artist-run ",
      "tech house coaching and mentoring community. The focus   ",
      "was on creating a visually striking and intuitive user  ",
      "experience to optimize visitor-to-paid-member conversion.",
    ],
    year: 2024,
    url: "https://kick-bass.com",
    backgroundImageUrl: "/images/work/kick-bass/cover.png",
    videoUrl: "/videos/kickbass-preview-compressed.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/kick-bass/image-01.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-02.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-03.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-04.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-05.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-06.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-07.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-08.png",
      },
      {
        type: "image",
        url: "/images/work/kick-bass/image-09.png",
      },
    ],
  },
  {
    title: "Socialstats",
    icon: "/images/work/socialstats/socialstats-icon.png",
    slug: "socialstats",
    category: "Product",
    keywords: [
      "Research & Insights",
      "Naming & Copywriting",
      "Competitive Study",
      "Voice & Tone",
      "Workshops",
      "Strategy",
      "UX",
      "UI",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Designed the home and pricings page for a social media analytics  ",
      "platform that helps artists and creators track their social  ",
      "media performance. This 4-week project focused on seamless UX  ",
      "and efficient developer handoff.",
    ],
    year: 2024,
    url: null,
    backgroundImageUrl: "/images/work/socialstats/cover.png",
    videoUrl: "/videos/socialstats-preview-compressed.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/socialstats/image-01.png",
      },
      {
        type: "image",
        url: "/images/work/socialstats/image-02.png",
      },
      {
        type: "image",
        url: "/images/work/socialstats/image-03.png",
      },
      {
        type: "image",
        url: "/images/work/socialstats/image-04.png",
      },
      {
        type: "image",
        url: "/images/work/socialstats/image-05.png",
      },
      {
        type: "image",
        url: "/images/work/socialstats/image-06.png",
      },
    ],
  },
  {
    title: "Westend",
    icon: "/images/work/westend/westend-icon.png",
    slug: "westend",
    category: "Portfolio",
    keywords: [
      "Art Direction",
      "Web Design",
      "Responsive Design",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Contentful",
      "Vercel",
    ],
    summary: [
      "Designed and developed the official website for professional DJ ",
      "and producer Westend, focusing on showcasing his latest ",
      "releases, past performances, and upcoming tour dates.",
    ],
    year: 2024,
    url: "https://itsthewestend.com",
    backgroundImageUrl: "/images/other/westend.jpg",
    videoUrl: "/videos/westend-preview-compressed.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/westend/image-01.png",
      },
      {
        type: "image",
        url: "/images/work/westend/image-02.png",
      },
      {
        type: "image",
        url: "/images/work/westend/image-03.png",
      },
      {
        type: "image",
        url: "/images/work/westend/image-04.png",
      },
      {
        type: "image",
        url: "/images/work/westend/image-05.png",
      },
      {
        type: "image",
        url: "/images/work/westend/image-06.png",
      },
    ],
  },
  {
    title: "DELIVRD",
    icon: "/images/work/delivrd/delivrd-icon.png",
    slug: "delivrd",
    category: "Showcase",
    keywords: [
      "Next.js",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Supabase",
      "Vercel",
      "Web Design",
      "Responsive Design",
    ],
    summary: [
      "Developed a website that helps aspiring EDM producers easily ",
      "find and submit demos to popular labels. Designed with a clean, ",
      "minimal aesthetic and subtle micro-animations for an engaging ",
      "user experience. I continue to maintain and improve the site.",
    ],
    year: 2023,
    url: "https://delivrd.live",
    backgroundImageUrl:
      "https://images.unsplash.com/photo-1617864848089-9c54bf240fe6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "/videos/delivrd-preview-compressed.mp4",
    media: [
      {
        type: "image",
        url: "/images/work/delivrd/image-01.png",
      },
      {
        type: "image",
        url: "/images/work/delivrd/image-02.png",
      },
    ],
  },
  // {
  //   title: "Presave",
  //   projectType: ["Web Design"],
  //   keywords: ["Web Design", "UX Design", "Responsive Design", "Art Direction"],
  //   summary: [
  //     "Designed an intuitive interface for an automated artist song ",
  //     "release platform (formerly SongShare.com), serving thousands ",
  //     "of artists. This 4-week project focused on seamless UX and ",
  //     "efficient developer handoff.",
  //   ],
  //   year: 2024,
  //   backgroundImageUrl:
  //     "https://images.unsplash.com/photo-1735486228450-ef263cc0d6e4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   videoUrl: "/videos/presave-preview-compressed.mp4",
  //   link: "https://www.presave.com",
  // },
];
