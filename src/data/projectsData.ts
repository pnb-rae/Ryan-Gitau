// Project data for Ryan Gitau's portfolio
import { ProjectMetadata } from "@/lib/generateProjectContent";

export interface Project extends ProjectMetadata {
  slug: string;
  image: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "az-african-store",
    title: "AZ African Store",
    description: "A taste of home for the African community in the UK. AZ African Store brings authentic African ingredients right to your doorstep, making it easy to cook traditional meals with fresh, high-quality products. The platform supports local African producers while helping the diaspora stay connected to their culinary roots.",
    image: "/uploads/az-african-store.png",
    technologies: ["E-commerce", "WooCommerce", "WordPress", "Payment Gateway", "Responsive Design"],
    liveUrl: "https://azafricanstore.com/",
    featured: true,
    category: "E-Commerce",
    client: "AZ African Store",
    role: "Web Developer",
    deliverables: ["E-commerce Platform", "Product Management", "Checkout System", "Mobile Optimization"],
    gallery: ["/uploads/az-african-store.png"]
  },
  {
    slug: "ipmtti",
    title: "IPMTTI",
    description: "A modern website for Kenya's leading technical training institute, making it easy for students to explore courses in driving, engineering, and hospitality. The platform streamlines course registration and provides clear information about career opportunities, helping bridge the skills gap in technical fields across East Africa.",
    image: "/uploads/ipmtti-project.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "CMS"],
    liveUrl: "https://ipmtti.co.ke/",
    featured: true,
    category: "Education Platform",
    client: "IPMTTI Institute",
    role: "Full-Stack Developer",
    deliverables: ["Website Design", "CMS Integration", "Enrollment System", "Course Management"],
    gallery: ["/uploads/ipmtti-project.png"]
  },
  {
    slug: "stay-africa",
    title: "Stay Africa",
    description: "A one-stop travel platform that makes it easy to discover and book unique accommodations across Africa. Whether you're looking for a beachfront villa, safari lodge, or city apartment, Stay Africa connects travelers with authentic local experiences. The platform helps boost tourism by showcasing Africa's diverse destinations while providing a seamless booking experience.",
    image: "/uploads/stay-africa.png",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://stay-africa.vercel.app/",
    featured: true,
    category: "Travel & Accommodation",
    client: "Personal Project",
    role: "Full-Stack Developer",
    deliverables: ["Accommodation Listings", "Booking System", "User Authentication", "Payment Processing"],
    gallery: ["/uploads/stay-africa.png"]
  },
  {
    slug: "barber-kings-kenya",
    title: "Barber Kings Kenya",
    description: "A modern, responsive website for Barber Kings Kenya, showcasing their premium barbering services, booking system, and portfolio. The platform helps customers discover services, view the barber team, and book appointments online with ease.",
    image: "/uploads/barber-kings-kenya.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "https://barberkingskenya.co.ke/",
    featured: true,
    category: "Service Business Website",
    client: "Barber Kings Kenya",
    role: "Full-Stack Developer & UI/UX Designer",
    deliverables: [
      "Responsive website design",
      "Online booking system",
      "Service catalog",
      "Barber portfolio",
      "Contact form with email notifications",
      "SEO optimization",
      "Performance optimization"
    ],
    gallery: [
      "/uploads/barber-kings-kenya.png"
    ]
  },
  {
    slug: "home-deco",
    title: "Home Deco",
    description: "An online store that brings beautiful, high-quality home decor within everyone's reach. Home Deco helps people transform their living spaces with carefully selected furniture and accessories. The platform makes it simple to visualize how items will look in your home, making interior design more accessible and enjoyable for everyone.",
    image: "/uploads/home-deco.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://home-deco-sigma.vercel.app/",
    featured: true,
    category: "E-Commerce",
    client: "Personal Project",
    role: "Frontend Developer",
    deliverables: ["Product Showcase", "Shopping Experience", "Responsive Design", "UI/UX Implementation"],
    gallery: ["/uploads/home-deco.png"]
  },
  {
    slug: "nova-cart",
    title: "Nova Cart",
    description: "A modern online shopping experience that makes finding and buying products effortless. Nova Cart combines style with functionality, offering a smooth journey from browsing to checkout. The platform helps small businesses grow by providing them with professional e-commerce tools to showcase their products effectively.",
    image: "/uploads/nova-cart.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://nova-cart-delta.vercel.app/",
    featured: true,
    category: "E-Commerce",
    client: "Personal Project",
    role: "Full-Stack Developer",
    deliverables: ["Product Catalog", "Shopping Cart", "Checkout System", "Responsive Design"],
    gallery: ["/uploads/nova-cart.png"]
  },
  {
    slug: "tal3nt",
    title: "Tal3nt",
    description: "A smarter way for companies to find the perfect candidates. Tal3nt uses smart matching to connect businesses with skilled professionals, making hiring faster and more efficient. The platform helps job seekers highlight their skills and helps employers find the right talent without the usual recruitment hassle.",
    image: "/uploads/tal3nt.png",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://www.tal3nt.xyz/",
    featured: true,
    category: "Recruitment Platform",
    client: "Tal3nt",
    role: "Full-Stack Developer",
    deliverables: ["User Authentication", "Candidate Matching", "Job Posting System", "Analytics Dashboard"],
    gallery: ["/uploads/tal3nt.png"]
  },
  {
    slug: "bravos",
    title: "Bravos",
    description: "A vibrant community platform where people discover and share amazing content. Bravos helps users find hidden gems across various interests, from tech innovations to creative arts. It's like having a trusted friend recommend the best content across the internet, all in one place.",
    image: "/uploads/bravos.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://bravos-11.vercel.app/",
    featured: true,
    category: "Content Platform",
    client: "Personal Project",
    role: "Full-Stack Developer",
    deliverables: ["Content Discovery", "User Profiles", "Social Sharing", "Responsive Design"],
    gallery: ["/uploads/bravos.png"]
  },
  {
    slug: "gikomba-market",
    title: "Gikomba Market",
    description: "Bringing Kenya's famous second-hand clothing market online. Gikomba Market makes it easy to find quality pre-loved fashion at great prices, while helping local vendors reach more customers. The platform preserves the vibrant market experience while adding the convenience of online shopping.",
    image: "/uploads/gikomba-project.png",
    technologies: ["React", "Next.js", "TypeScript", "E-commerce", "Vercel"],
    liveUrl: "https://gikomba-beryl.vercel.app/",
    featured: true,
    category: "E-Commerce",
    client: "Gikomba Vendors",
    role: "Full-Stack Developer",
    deliverables: ["Marketplace Platform", "Vendor Onboarding", "Shopping Cart", "Order Management"],
    gallery: ["/uploads/gikomba-project.png"]
  },
  {
    slug: "kinywa-concept",
    title: "Kinywa Concept",
    description: "A showcase of creative web design that demonstrates how good design can make technology feel more human. Kinywa Concept turns complex ideas into beautiful, intuitive digital experiences. Each project is a testament to how thoughtful design can solve real problems while delighting users.",
    image: "/uploads/ec3738b8-e1bf-45ca-a11f-c4a96b449759.png",
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Netlify"],
    liveUrl: "https://kinywa-concept.netlify.app/",
    featured: true,
    category: "Web Design",
    client: "Kinywa Concept",
    role: "Frontend Developer",
    deliverables: ["UI/UX Design", "Responsive Layout", "Interactive Elements", "Animation"],
    gallery: ["/uploads/ec3738b8-e1bf-45ca-a11f-c4a96b449759.png"]
  },
  {
    slug: "thrills-spills-tours",
    title: "Thrills Spills Tours",
    description: "Your gateway to unforgettable adventures around the world. Thrills & Spills Tours makes it easy to discover and book exciting experiences, from mountain treks to scuba diving. The platform helps adventure seekers find their next challenge and local guides share their expertise with a global audience.",
    image: "/uploads/e26eacb4-e786-42fa-8979-02b917ee60ec.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://www.thrillsspillstours.com/",
    featured: true,
    category: "Travel & Tourism",
    client: "Thrills Spills Tours",
    role: "Full-Stack Developer",
    deliverables: ["Booking System", "Tour Management", "Payment Gateway", "Customer Portal"],
    gallery: ["/uploads/e26eacb4-e786-42fa-8979-02b917ee60ec.png"]
  },
  {
    slug: "zero22-thika",
    title: "Zero22 Thika",
    description: "A digital hub for local businesses to thrive. Zero22 Thika provides essential tools and connections that help small businesses grow. From managing services to connecting with customers, the platform simplifies the complex world of business management for local entrepreneurs.",
    image: "/uploads/f9fab85a-a0a8-401f-9208-cdb6d7464c07.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel", "API"],
    liveUrl: "https://zero22thika.vercel.app/",
    featured: true,
    category: "Business Platform",
    client: "Zero22 Thika",
    role: "Full-Stack Developer",
    deliverables: ["Business Directory", "Service Listings", "Management Tools", "API Integration"],
    gallery: ["/uploads/f9fab85a-a0a8-401f-9208-cdb6d7464c07.png"]
  },
  {
    slug: "pure-fruit",
    title: "Pure Fruit",
    description: "Farm-fresh fruits delivered straight to your door. Pure Fruit connects health-conscious consumers with local farmers, ensuring you get the freshest seasonal produce while supporting sustainable agriculture. The platform makes eating healthy convenient and helps small-scale farmers reach more customers.",
    image: "/uploads/7f1309d7-e911-4a4b-a77e-3379910cf797.png",
    technologies: ["React", "Next.js", "TypeScript", "Commerce", "Vercel"],
    liveUrl: "https://purefruit.vercel.app/",
    featured: true,
    category: "E-Commerce",
    client: "Pure Fruit",
    role: "Full-Stack Developer",
    deliverables: ["E-Commerce Platform", "Subscription System", "Delivery Tracking", "Farmer Portal"],
    gallery: ["/uploads/7f1309d7-e911-4a4b-a77e-3379910cf797.png"]
  },
  {
    slug: "thinkopal-development",
    title: "ThinkOpal Development",
    description: "A technology partner that transforms ideas into powerful digital solutions. ThinkOpal Development specializes in creating custom software that helps businesses work smarter. From concept to launch, we focus on building tools that solve real problems with clean, efficient code.",
    image: "/uploads/3b3c2315-8f59-4031-888a-244c2c531a64.png",
    technologies: ["React", "JavaScript", "Node.js", "CSS3", "Netlify"],
    liveUrl: "https://thinkopal-development.netlify.app/",
    featured: true,
    category: "Portfolio",
    client: "ThinkOpal",
    role: "Full-Stack Developer",
    deliverables: ["Company Website", "Portfolio Showcase", "Case Studies", "Contact System"],
    gallery: ["/uploads/3b3c2315-8f59-4031-888a-244c2c531a64.png"]
  },
  {
    slug: "peoples-choice-awards",
    title: "People's Choice Awards",
    description: "Celebrating Kenya's most inspiring individuals and organizations. The People's Choice Awards platform makes it easy for the public to nominate and vote for their favorites in various categories. The system ensures a fair and transparent voting process while creating excitement around the annual awards ceremony.",
    image: "/uploads/1cfcf7c6-f778-4c50-bd29-ec4bfc237e4d.png",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.peopleschoiceawards.africa/",
    featured: true,
    category: "Event Platform",
    client: "PCA Africa",
    role: "Lead Developer",
    deliverables: ["Voting System", "Event Management", "Nominee Portal", "Payment Integration"],
    gallery: ["/uploads/1cfcf7c6-f778-4c50-bd29-ec4bfc237e4d.png"]
  },
  {
    slug: "artistry",
    title: "Artistry",
    description: "World Art Day celebration platform inspired by Leonardo da Vinci. Showcasing featured artworks and promoting creativity, expression, and cultural diversity through digital art galleries.",
    image: "/uploads/artistry-project.png",
    technologies: ["React", "JavaScript", "CSS3", "Art Gallery", "Vercel"],
    liveUrl: "https://artistry-leo.vercel.app/",
    featured: true,
    category: "Art & Culture",
    client: "Artistry Platform",
    role: "Frontend Developer",
    deliverables: ["Gallery System", "Artist Profiles", "Artwork Showcase", "Responsive Design"],
    gallery: ["/uploads/artistry-project.png"]
  }
];