import elanorImg from '../assets/Photos/elanor.jpg'
import storeRatingImg from '../assets/Photos/StoreRating.png'
import golfImg from '../assets/Photos/Golf (1).png'
import apishieldImg from '../assets/Photos/apishield.jpg'
import p2 from '../assets/Photos/p2.png'
import p1 from '../assets/Photos/p1.png'
import p3 from '../assets/Photos/p3.png'
import p4 from '../assets/Photos/p4.png'
import macbookImg from '../assets/Photos/MacBook Pro_ Built for Intelligence.png'
import mojitoImg from '../assets/Photos/mojito.png'

export const projects = [
  {
    id: 1,
    slug: 'elanor',
    title: 'Élanor',
    subtitle: 'Luxury Fashion E-Commerce',
    category: 'Full-Stack Development · E-Commerce',
    year: '2026',
    role: 'Full-Stack Developer',
    duration: '4 Weeks',
    description: 'A full-stack luxury fashion e-commerce platform built with the MERN stack, featuring secure authentication, product discovery, wishlist management, cart, Razorpay payments, and an admin dashboard.',
    longDescription: 'Élanor is a full-stack luxury fashion e-commerce platform built with the MERN stack. It offers an end-to-end shopping experience featuring secure authentication with JWT and refresh tokens, advanced product discovery with faceted filters, dynamic cart and wishlist management, seamless Razorpay payments, order tracking, and a comprehensive admin management dashboard. Image delivery is optimized using ImageKit for lightning-fast catalog browsing.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    liveUrl: null,
    sourceUrl: null,
    backendUrl: null,
    image: elanorImg,
    features: [
      'Secure authentication with JWT, refresh tokens, and role-based authorization',
      'Product search, category and brand filters, sizes, colors, and inventory management',
      'Shopping cart, wishlist, coupons, and dynamic price calculation',
      'Razorpay payment integration and server-side payment verification',
      'Order history, order tracking, and customer reviews',
      'Admin dashboard with product, customer, order, coupon, and sales management',
      'Image optimization and high-performance delivery through ImageKit'
    ],
    detailedTechStack: [
      { layer: 'Frontend', technologies: 'React.js, Vite, JavaScript' },
      { layer: 'Routing & State', technologies: 'React Router DOM, React Context API' },
      { layer: 'Styling & Animation', technologies: 'Tailwind CSS, Framer Motion' },
      { layer: 'HTTP & Icons', technologies: 'Axios, Lucide React' },
      { layer: 'Backend', technologies: 'Node.js, Express.js' },
      { layer: 'Database', technologies: 'MongoDB Atlas, Mongoose' },
      { layer: 'Authentication & Security', technologies: 'JWT, bcrypt, Cookie Parser, CORS' },
      { layer: 'Payments', technologies: 'Razorpay SDK' },
      { layer: 'Images & Uploads', technologies: 'ImageKit SDK, Multer' },
      { layer: 'Email', technologies: 'Nodemailer' },
      { layer: 'Deployment', technologies: 'Vercel, Render' }
    ]
  },
  {
    id: 2,
    slug: 'storeratings',
    title: 'StoreRatings',
    subtitle: 'Store Rating & Management Platform',
    category: 'Full-Stack Development · RBAC',
    year: '2026',
    role: 'Full-Stack Developer',
    duration: '3 Weeks',
    description: 'A full-stack platform where customers rate stores, store owners manage their businesses and monitor feedback, and administrators oversee users, stores, and ratings using role-based authorization.',
    longDescription: 'StoreRatings is a full-stack platform featuring a layered backend architecture and role-based access control (RBAC). It enables customers to discover and rate stores with duplicate-rating prevention, gives store owners real-time visibility into customer feedback and business profiles, and equips administrators with comprehensive user, store, and rating moderation tools.',
    techStack: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://frontend-seven-livid-55.vercel.app',
    sourceUrl: 'https://github.com/AdityaSarse',
    backendUrl: 'https://fullstack-rating-app.onrender.com',
    image: storeRatingImg,
    features: [
      'Registration, login, JWT authentication, and protected route guards',
      'Three distinct roles: Normal User, Store Owner, and Administrator',
      'Store directory with live search, average ratings, and rating counts',
      'Submit and update ratings (1 to 5 stars) with duplicate-rating prevention',
      'Store owner dashboard with store profile management and customer feedback analytics',
      'Admin dashboard with user, store, and rating management',
      'Layered services architecture for authentication, users, stores, and ratings'
    ],
    detailedTechStack: [
      { layer: 'Frontend', technologies: 'React.js, Vite, JavaScript' },
      { layer: 'Routing & State', technologies: 'React Router, Context API' },
      { layer: 'Styling', technologies: 'CSS' },
      { layer: 'HTTP Requests', technologies: 'Axios' },
      { layer: 'Backend', technologies: 'Node.js, Express.js' },
      { layer: 'Database', technologies: 'PostgreSQL, Neon' },
      { layer: 'ORM', technologies: 'Prisma' },
      { layer: 'Authentication & Security', technologies: 'JWT, bcryptjs, role-based authorization' },
      { layer: 'API Testing', technologies: 'Postman' },
      { layer: 'Deployment', technologies: 'Vercel, Render, Neon PostgreSQL' },
      { layer: 'Development Tools', technologies: 'Git, GitHub, VS Code, npm, Prisma CLI' }
    ]
  },
  {
    id: 3,
    slug: 'digital-heroes',
    title: 'Digital Heroes',
    subtitle: 'Golf & Charity Platform',
    category: 'Full-Stack Development · UI/UX',
    year: '2026',
    role: 'Full-Stack Developer',
    duration: '5 Weeks',
    description: 'A full-stack golf platform that connects golf score tracking with charitable causes and monthly draws, combining an editorial interface with member dashboards and protected administrative tools.',
    longDescription: 'Digital Heroes is a full-stack golf platform that connects golf score tracking with charitable causes and monthly prize draws. It pairs a premium editorial aesthetic with member dashboards, scorecard management, draw results, charity selection, and protected administrative tools. Built with React, Express, and Supabase PostgreSQL with custom animations and gold accent styling.',
    techStack: ['React', 'Express.js', 'PostgreSQL', 'Supabase'],
    liveUrl: 'https://golfweb-hazel.vercel.app',
    sourceUrl: 'https://github.com/AdityaSarse/DigitalHeros',
    backendUrl: null,
    image: golfImg,
    note: 'Stripe is a planned enhancement, not a completed payment integration, according to the project roadmap.',
    features: [
      'Member registration and Supabase authentication with session persistence',
      'Golf scorecard management, score history, and latest-five-score draw entries',
      'Monthly draw results, winning numbers, and prize distribution tracking',
      'Charity discovery and cause designation for players',
      'Membership and subscription interface',
      'Role-based admin command center for users, charities, draws, and verification',
      'Responsive editorial design with gold accents, serif typography, and animations'
    ],
    detailedTechStack: [
      { layer: 'Frontend', technologies: 'React.js, JavaScript' },
      { layer: 'Styling', technologies: 'Tailwind CSS' },
      { layer: 'Animations', technologies: 'Framer Motion, GSAP' },
      { layer: 'Backend', technologies: 'Node.js, Express.js' },
      { layer: 'Database', technologies: 'PostgreSQL' },
      { layer: 'Database & Auth Platform', technologies: 'Supabase, Supabase Auth' },
      { layer: 'API Architecture', technologies: 'REST APIs' },
      { layer: 'Deployment', technologies: 'Vercel, Render, Supabase' }
    ]
  },
  {
    id: 4,
    slug: 'apishield',
    title: 'APIShield',
    subtitle: 'API Gateway, Security & Monitoring',
    category: 'Backend Engineering · API Security',
    year: '2026',
    role: 'Backend Engineer',
    duration: '4 Weeks',
    description: 'A full-stack API gateway and monitoring platform combining API-key authentication, Redis-based rate limiting, request logging, reverse proxying, and latency observability.',
    longDescription: 'APIShield is a full-stack API gateway and monitoring platform that sits between clients and backend microservices. It combines API-key authentication, Redis-based token bucket rate limiting, request logging, reverse proxying, and operational observability—including latency percentiles (P50, P95, P99) and status-code analytics to give teams complete traffic control and service visibility.',
    techStack: ['Express.js', 'Redis', 'Prisma', 'Docker'],
    liveUrl: null,
    sourceUrl: null,
    backendUrl: null,
    image: apishieldImg,
    technicalHighlight: 'APIShield combines request-level security controls with operational observability, including latency percentiles (P50, P95, P99) and status-code analytics.',
    features: [
      'JWT authentication and role-based authorization for administrative access',
      'API-key creation, secure authentication, and per-key usage analytics',
      'Gateway reverse proxying to target backend API services',
      'Redis-based rate limiting to prevent abuse and control request traffic',
      'Real-time request logging and live gateway health monitoring',
      'Analytics for error rates, status code distribution, service traffic, and API-key usage',
      'Detailed response-time metrics: Average, Minimum, P50, P95, and P99 percentiles',
      'Containerized infrastructure with Docker, Docker Compose, and Nginx'
    ],
    detailedTechStack: [
      { layer: 'Frontend', technologies: 'React, Vite' },
      { layer: 'Styling', technologies: 'Tailwind CSS' },
      { layer: 'Data Fetching', technologies: 'TanStack Query' },
      { layer: 'Backend', technologies: 'Node.js, Express.js' },
      { layer: 'Database', technologies: 'PostgreSQL' },
      { layer: 'ORM', technologies: 'Prisma' },
      { layer: 'Cache & Rate Limiting', technologies: 'Redis' },
      { layer: 'Authentication', technologies: 'JWT, API keys, role-based authorization' },
      { layer: 'Infrastructure', technologies: 'Docker, Docker Compose' },
      { layer: 'Reverse Proxy', technologies: 'Nginx' }
    ]
  },
  {
    id: 5,
    slug: 'soundwave',
    title: 'SoundWave',
    subtitle: 'Full Stack Music Streaming Platform',
    category: 'Full Stack Music Streaming Platform',
    year: '2026',
    role: 'Full Stack Developer',
    duration: '4 Weeks',
    description: 'A comprehensive music streaming platform featuring secure authentication, playlist management, and a responsive user interface.',
    longDescription: 'SoundWave is a comprehensive music streaming platform built from the ground up using the MERN stack. This full stack application features secure user authentication, dynamic playlist management, and a polished responsive interface. The backend architecture utilizes Express.js with MongoDB for efficient data handling, while the React frontend delivers a smooth and intuitive music browsing experience.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://noire-spotifyclone-nine-nu.vercel.app',
    sourceUrl: 'https://github.com/AdityaSarse/BackendLearning/tree/main/Spotify',
    backendUrl: null,
    image: p2,
    features: [
      'Secure user authentication and session management',
      'Dynamic playlist creation, editing, and deletion',
      'Responsive music player with playback controls',
      'RESTful API architecture with Express.js',
      'MongoDB integration for scalable data storage',
      'Clean and intuitive user interface design'
    ],
    detailedTechStack: [
      { layer: 'Frontend', technologies: 'React.js, JavaScript' },
      { layer: 'Backend', technologies: 'Node.js, Express.js' },
      { layer: 'Database', technologies: 'MongoDB' },
      { layer: 'Deployment', technologies: 'Vercel' }
    ]
  },
  {
    id: 6,
    slug: 'noire',
    title: 'NOIRE',
    subtitle: 'Modern Fashion E-Commerce',
    category: 'Modern Fashion E-Commerce',
    year: '2025',
    role: 'Frontend Developer',
    duration: '3 Weeks',
    description: 'A premium fashion e-commerce experience focused on elegant design, responsive layouts, seamless product browsing, and a refined shopping experience.',
    longDescription: 'NOIRE is a premium fashion e-commerce platform designed to deliver a sophisticated shopping experience. Built with Next.js and React, the application features server-side rendering for optimal performance, a responsive design system using Tailwind CSS, and TypeScript for type safety throughout the codebase. The project demonstrates clean architecture, reusable component patterns, and seamless product browsing with a focus on visual elegance and modern aesthetics.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://noire-psi.vercel.app',
    sourceUrl: 'https://github.com/AdityaSarse/Noire',
    backendUrl: null,
    image: p1,
    features: [
      'Responsive product catalog with dynamic filtering and sorting',
      'Server-side rendering with Next.js for SEO and performance',
      'Clean and reusable component architecture',
      'Premium UI design with smooth hover animations',
      'Fully responsive across all device breakpoints',
      'Type-safe development with TypeScript throughout'
    ],
    detailedTechStack: [
      { layer: 'Framework', technologies: 'Next.js, React' },
      { layer: 'Language', technologies: 'TypeScript, JavaScript' },
      { layer: 'Styling', technologies: 'Tailwind CSS' },
      { layer: 'Deployment', technologies: 'Vercel' }
    ]
  },
  {
    id: 7,
    slug: 'verimed-ai',
    title: 'VeriMed AI',
    subtitle: 'AI Research Assistant',
    category: 'AI Research Assistant',
    year: '2026',
    role: 'Backend Developer',
    duration: '2 Weeks',
    description: 'An AI-powered medical research assistant that retrieves, ranks, and summarizes medical research papers using BM25, FastAPI, PostgreSQL, and AI models.',
    longDescription: 'VeriMed AI is an intelligent medical research assistant designed to streamline the process of finding and understanding medical research papers. The system leverages the BM25 ranking algorithm for efficient document retrieval, FastAPI for high-performance API endpoints, and PostgreSQL for robust data storage. AI-powered summarization capabilities help researchers quickly extract key insights from complex medical literature.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'BM25'],
    liveUrl: null,
    sourceUrl: 'https://github.com/AdityaSarse/Vermid_Reaserch_Agent',
    backendUrl: null,
    image: p3,
    features: [
      'Intelligent medical research paper retrieval system',
      'BM25 ranking algorithm for relevance-based results',
      'AI-powered summarization of research papers',
      'High-performance REST API with FastAPI',
      'PostgreSQL database for structured data storage',
      'Research analysis and insight extraction'
    ],
    detailedTechStack: [
      { layer: 'Core Backend', technologies: 'Python, FastAPI' },
      { layer: 'Database', technologies: 'PostgreSQL' },
      { layer: 'Search & Ranking', technologies: 'BM25 Retrieval Algorithm' },
      { layer: 'AI Models', technologies: 'AI Summarization APIs' }
    ]
  },
  {
    id: 8,
    slug: 'banking-transaction-system',
    title: 'Banking Transaction System',
    subtitle: 'Secure Full Stack Banking Application',
    category: 'Secure Full Stack Banking Application',
    year: '2026',
    role: 'Backend Developer',
    duration: '3 Weeks',
    description: 'A secure banking application with authentication, account management, transaction history, REST APIs, and scalable backend architecture.',
    longDescription: 'A comprehensive banking transaction system built with security and scalability at its core. The application features robust JWT-based authentication, complete account management capabilities, and detailed transaction history tracking. The backend is architected using Node.js and Express.js with MongoDB, following RESTful principles and industry-standard security practices for handling sensitive financial data.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: null,
    sourceUrl: 'https://github.com/AdityaSarse/BankTransaction',
    backendUrl: null,
    image: p4,
    features: [
      'Secure JWT-based authentication and authorization',
      'Complete account management with CRUD operations',
      'Detailed transaction history and tracking',
      'RESTful API architecture with Express.js',
      'MongoDB integration for flexible data modeling',
      'Scalable backend architecture with security best practices'
    ],
    detailedTechStack: [
      { layer: 'Backend', technologies: 'Node.js, Express.js' },
      { layer: 'Database', technologies: 'MongoDB' },
      { layer: 'Security & Auth', technologies: 'JWT, bcrypt' }
    ]
  },
  {
    id: 9,
    slug: 'macbook-3d',
    title: 'MacBook 3D Experience',
    subtitle: 'Interactive 3D Product Showcase',
    category: 'Frontend Development · 3D Web',
    year: '2026',
    role: 'Creative Developer',
    duration: '2 Weeks',
    description: 'An interactive MacBook-inspired landing page featuring real-time 3D product visualization, dynamic model switching, cinematic lighting, and smooth scroll-driven animations.',
    longDescription: 'An interactive MacBook-inspired landing page built to explore immersive product storytelling and interactive web experiences. It features real-time 3D model visualization with Three.js and React Three Fiber, dynamic switching between MacBook finishes, realistic studio lighting, and smooth GSAP-powered scroll animations coupled with Zustand state management.',
    techStack: ['React', 'Three.js', 'GSAP', 'Zustand'],
    liveUrl: null,
    sourceUrl: 'https://github.com/AdityaSarse/ThreeJS',
    backendUrl: null,
    image: macbookImg,
    features: [
      'Interactive 3D MacBook product models with real-time rendering',
      'Dynamic switching between MacBook models and finish variations',
      'Realistic studio lighting, shadows, and cinematic camera positioning',
      'GSAP-powered transitions and scroll-driven animation timelines',
      'Responsive layouts optimized for desktop and mobile displays',
      'Product showcase, tech highlights, and performance metric sections',
      'Centralized state management with Zustand for interactive components'
    ],
    detailedTechStack: [
      { layer: 'Frontend', technologies: 'React.js, JavaScript' },
      { layer: 'Build Tool', technologies: 'Vite' },
      { layer: '3D Rendering', technologies: 'Three.js' },
      { layer: 'React 3D Integration', technologies: 'React Three Fiber' },
      { layer: '3D Helpers', technologies: 'Drei' },
      { layer: 'Animation', technologies: 'GSAP' },
      { layer: 'Styling', technologies: 'Tailwind CSS' },
      { layer: 'State Management', technologies: 'Zustand' }
    ]
  },
  {
    id: 10,
    slug: 'mojito',
    title: 'MOJITO',
    subtitle: 'Animated Cocktail Landing Page',
    category: 'Frontend Development · Creative Web Design',
    year: '2026',
    role: 'Creative Frontend Developer',
    duration: '2 Weeks',
    description: 'A visually rich cocktail-brand landing page inspired by Velvet Pour, combining modern layouts, cocktail imagery, storytelling sections, and smooth GSAP animations.',
    longDescription: 'MOJITO is a visually rich cocktail-brand landing page inspired by the Velvet Pour aesthetic. Built with React, Vite, and Tailwind CSS, it leverages GSAP animation timelines for smooth hero reveals, storytelling sequences, and interactive beverage showcases. The page incorporates modern editorial layouts, custom typography, and high-impact visual media.',
    techStack: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
    liveUrl: null,
    sourceUrl: 'https://github.com/AdityaSarse/GSAP',
    backendUrl: null,
    image: mojitoImg,
    features: [
      'Animated hero section with smooth entrance choreography and dynamic navigation',
      'Cocktail showcase and interactive beverage menu sections',
      'Rich brand storytelling and visual editorial content',
      'Interactive contact and venue location sections',
      'Fully responsive layouts engineered for mobile, tablet, and desktop',
      'Silky-smooth GSAP animation sequences and scroll triggers',
      'Custom typography, high-resolution imagery, and video assets'
    ],
    detailedTechStack: [
      { layer: 'Frontend', technologies: 'React.js, JavaScript' },
      { layer: 'Build Tool', technologies: 'Vite' },
      { layer: 'Styling', technologies: 'Tailwind CSS' },
      { layer: 'Animations', technologies: 'GSAP' },
      { layer: 'Media Processing', technologies: 'FFmpeg' },
      { layer: 'Assets', technologies: 'Custom fonts, images, and videos' }
    ]
  }
]
