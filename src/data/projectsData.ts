import { ProjectMetadata } from "@/lib/generateProjectContent";

export interface Project extends ProjectMetadata {
  slug: string;
  image: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "stay-africa",
    title: "Stay Africa",
    description: "Discover and book unique accommodations across Africa. From luxury safari lodges to beachfront villas, find your perfect African getaway with Stay Africa's curated selection of properties.",
    image: "/lovable-uploads/stay-africa.png", // Please add this image to the public/lovable-uploads/ directory
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://stay-africa.vercel.app/",
    featured: true,
    category: "Travel & Hospitality",
    client: "Stay Africa",
    role: "Full-Stack Developer",
    deliverables: ["Property Listings", "Booking System", "User Authentication", "Payment Integration"],
    gallery: ["/lovable-uploads/stay-africa.png"]
  },
  {
    slug: "nexus-scale",
    title: "Nexus Scale",
    description: "Nexus Scale is a cutting-edge AI platform that helps businesses scale their operations through intelligent automation and data-driven insights. The platform offers powerful tools for growth optimization and performance tracking.",
    image: "/lovable-uploads/nexus-scale.png",
    technologies: ["React", "Next.js", "TypeScript", "AI/ML", "Node.js", "PostgreSQL"],
    liveUrl: "https://www.nexuscale.ai/",
    featured: true,
    category: "AI Platform",
    client: "Nexus Scale",
    role: "Full-Stack Developer",
    deliverables: ["AI Integration", "Analytics Dashboard", "Automation Tools", "API Development"],
    gallery: ["/lovable-uploads/nexus-scale.png"]
  },
  {
    slug: "ipmtti",
    title: "IPMTTI",
    description: "International Plant Machinery & Technical Training Institute - Kenya's premier technical training institute offering NITA-accredited programs in driving, heavy plant operation, engineering, and hospitality.",
    image: "/lovable-uploads/ipmtti-project.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "CMS"],
    liveUrl: "https://ipmtti.co.ke/",
    featured: true,
    category: "Education Platform",
    client: "IPMTTI Institute",
    role: "Full-Stack Developer",
    deliverables: ["Website Design", "CMS Integration", "Enrollment System", "Course Management"],
    gallery: ["/lovable-uploads/ipmtti-project.png"]
  },
  {
    slug: "stay-kenya",
    title: "Stay Kenya",
    description: "Discover Kenya's hidden treasures - from the majestic Masai Mara to pristine coastal beaches. Experience luxury hospitality in Africa's most breathtaking destinations with curated accommodations and travel experiences.",
    image: "/lovable-uploads/staykenya-project.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://staykenya.vercel.app/",
    featured: true,
    category: "Travel & Tourism",
    client: "Stay Kenya",
    role: "Lead Developer",
    deliverables: ["Booking System", "Property Listings", "Payment Integration", "User Dashboard"],
    gallery: ["/lovable-uploads/staykenya-project.png"]
  },
  {
    slug: "gikomba-market",
    title: "Gikomba Market",
    description: "Kenya's largest second-hand clothing market, now online. Connecting vendors and buyers directly with an easy-to-use platform for browsing and purchasing quality second-hand items.",
    image: "/lovable-uploads/gikomba-project.png",
    technologies: ["React", "Next.js", "TypeScript", "E-commerce", "Vercel"],
    liveUrl: "https://gikomba-beryl.vercel.app/",
    featured: true,
    category: "E-Commerce",
    client: "Gikomba Vendors",
    role: "Full-Stack Developer",
    deliverables: ["Marketplace Platform", "Vendor Onboarding", "Shopping Cart", "Order Management"],
    gallery: ["/lovable-uploads/gikomba-project.png"]
  },
  {
    slug: "kinywa-concept",
    title: "Kinywa Concept",
    description: "Modern web application showcasing innovative design concepts and user experience solutions with clean, contemporary aesthetics.",
    image: "/lovable-uploads/ec3738b8-e1bf-45ca-a11f-c4a96b449759.png",
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Netlify"],
    liveUrl: "https://kinywa-concept.netlify.app/",
    featured: true,
    category: "Web Design",
    client: "Kinywa Concept",
    role: "Frontend Developer",
    deliverables: ["UI/UX Design", "Responsive Layout", "Interactive Elements", "Animation"],
    gallery: ["/lovable-uploads/ec3738b8-e1bf-45ca-a11f-c4a96b449759.png"]
  },
  {
    slug: "thrills-spills-tours",
    title: "Thrills Spills Tours",
    description: "Adventure tourism platform offering thrilling experiences and guided tours. Features booking system, tour packages, and immersive travel experiences.",
    image: "/lovable-uploads/e26eacb4-e786-42fa-8979-02b917ee60ec.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://www.thrillsspillstours.com/",
    featured: true,
    category: "Travel & Tourism",
    client: "Thrills Spills Tours",
    role: "Full-Stack Developer",
    deliverables: ["Booking System", "Tour Management", "Payment Gateway", "Customer Portal"],
    gallery: ["/lovable-uploads/e26eacb4-e786-42fa-8979-02b917ee60ec.png"]
  },
  {
    slug: "zero22-thika",
    title: "Zero22 Thika",
    description: "Business platform providing comprehensive solutions for local enterprises. Features service listings, business management tools, and community connectivity.",
    image: "/lovable-uploads/f9fab85a-a0a8-401f-9208-cdb6d7464c07.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel", "API"],
    liveUrl: "https://zero22thika.vercel.app/",
    featured: true,
    category: "Business Platform",
    client: "Zero22 Thika",
    role: "Full-Stack Developer",
    deliverables: ["Business Directory", "Service Listings", "Management Tools", "API Integration"],
    gallery: ["/lovable-uploads/f9fab85a-a0a8-401f-9208-cdb6d7464c07.png"]
  },
  {
    slug: "pure-fruit",
    title: "Pure Fruit",
    description: "Fresh fruit delivery platform connecting consumers with local farmers. Features organic produce catalog, subscription services, and farm-to-table tracking.",
    image: "/lovable-uploads/7f1309d7-e911-4a4b-a77e-3379910cf797.png",
    technologies: ["React", "Next.js", "TypeScript", "Commerce", "Vercel"],
    liveUrl: "https://purefruit.vercel.app/",
    featured: true,
    category: "E-Commerce",
    client: "Pure Fruit",
    role: "Full-Stack Developer",
    deliverables: ["E-Commerce Platform", "Subscription System", "Delivery Tracking", "Farmer Portal"],
    gallery: ["/lovable-uploads/7f1309d7-e911-4a4b-a77e-3379910cf797.png"]
  },
  {
    slug: "thinkopal-development",
    title: "ThinkOpal Development",
    description: "Software development consultancy showcasing portfolio of digital solutions, custom applications, and innovative technology implementations.",
    image: "/lovable-uploads/3b3c2315-8f59-4031-888a-244c2c531a64.png",
    technologies: ["React", "JavaScript", "Node.js", "CSS3", "Netlify"],
    liveUrl: "https://thinkopal-development.netlify.app/",
    featured: true,
    category: "Portfolio",
    client: "ThinkOpal",
    role: "Full-Stack Developer",
    deliverables: ["Company Website", "Portfolio Showcase", "Case Studies", "Contact System"],
    gallery: ["/lovable-uploads/3b3c2315-8f59-4031-888a-244c2c531a64.png"]
  },
  {
    slug: "peoples-choice-awards",
    title: "People's Choice Awards",
    description: "Premier platform celebrating excellence across various categories in Kenya. Features voting system, nominee registration, and event management for recognizing outstanding achievements.",
    image: "/lovable-uploads/1cfcf7c6-f778-4c50-bd29-ec4bfc237e4d.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.peopleschoiceawards.africa/",
    featured: true,
    category: "Event Platform",
    client: "PCA Africa",
    role: "Lead Developer",
    deliverables: ["Voting System", "Event Management", "Nominee Portal", "Payment Integration"],
    gallery: ["/lovable-uploads/1cfcf7c6-f778-4c50-bd29-ec4bfc237e4d.png"]
  },
  {
    slug: "artistry",
    title: "Artistry",
    description: "World Art Day celebration platform inspired by Leonardo da Vinci. Showcasing featured artworks and promoting creativity, expression, and cultural diversity through digital art galleries.",
    image: "/lovable-uploads/artistry-project.png",
    technologies: ["React", "JavaScript", "CSS3", "Art Gallery", "Vercel"],
    liveUrl: "https://artistry-leo.vercel.app/",
    featured: true,
    category: "Art & Culture",
    client: "Artistry Platform",
    role: "Frontend Developer",
    deliverables: ["Gallery System", "Artist Profiles", "Artwork Showcase", "Responsive Design"],
    gallery: ["/lovable-uploads/artistry-project.png"]
  }
];
