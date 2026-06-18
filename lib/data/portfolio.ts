export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "corp-1",
    title: "TechCorp Annual Conference",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    description: "Full AV production for a 2,000-attendee corporate conference with LED video wall, multi-camera streaming, and dynamic lighting.",
  },
  {
    id: "corp-2",
    title: "Global Finance Summit",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop",
    description: "High-stakes financial conference with broadcast-quality webcasting, interpretation systems, and precision audio.",
  },
  {
    id: "corp-3",
    title: "Product Launch — NextGen",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1978&auto=format&fit=crop",
    description: "Theatrical product launch with projection mapping, custom scenic elements, and immersive sound design.",
  },
  {
    id: "concert-1",
    title: "Aurora World Tour",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
    description: "Full production for a 30-city arena tour including lighting, audio, video, and rigging.",
  },
  {
    id: "concert-2",
    title: "Summer Music Festival",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
    description: "Multi-stage festival production with simultaneous live sets, delay towers, and broadcast feed.",
  },
  {
    id: "concert-3",
    title: "Intimate Acoustic Series",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    description: "Premium audio and ambient lighting for an exclusive acoustic performance series.",
  },
  {
    id: "trade-1",
    title: "InnovateExpo 2024",
    category: "Trade Shows",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop",
    description: "Custom booth design with interactive LED displays, product demonstration zones, and integrated AV.",
  },
  {
    id: "trade-2",
    title: "Healthcare Tech Summit",
    category: "Trade Shows",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop",
    description: "Exhibition hall AV infrastructure with presentation stages, digital signage, and attendee engagement tools.",
  },
  {
    id: "wedding-1",
    title: "Grand Ballroom Wedding",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    description: "Elegant wedding production with uplighting, gobo projections, wireless audio, and dance floor effects.",
  },
  {
    id: "wedding-2",
    title: "Garden Estate Celebration",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
    description: "Outdoor wedding with weather-resistant audio, ambient string lighting, and tented reception setup.",
  },
  {
    id: "gala-1",
    title: "Arts Foundation Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop",
    description: "Black-tie gala with sophisticated lighting, podium presentation AV, and live entertainment production.",
  },
  {
    id: "rally-1",
    title: "Governor's Campaign Rally",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop",
    description: "Large-scale rally production with distributed audio, jumbotrons, and rapid deployment/strike.",
  },
];

export const categories = ["All", "Corporate", "Concerts", "Trade Shows", "Weddings"];
