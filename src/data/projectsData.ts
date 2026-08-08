export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export const highlightedProjects: Project[] = [
  {
    title: "MoonMovement",
    description: "End-to-end development of landing pages, system dashboards, and admin panels for the MoonMovement design agency.",
    tags: ["React", "TypeScript", "NextJS", "Laravel", "Framer Motion", "2024"],
    link: "https://github.com/Epicguest97/moonmovement_v1",
    image: "https://i.ibb.co/jZWPXdMQ/Screenshot-2026-08-08-at-11-29-43-PM.png",
  },
  {
    title: "AskPDF",
    description: "A Retrieval-Augmented Generation (RAG) assistant for querying PDF documents using semantic similarity searches and Gemini LLM.",
    tags: ["Express.js", "MongoDB", "Redis", "Gemini API", "2025"],
    link: "https://github.com/Epicguest97/AskPDF",
    image: "https://i.ibb.co/n8sdfqYR/Gemini-Generated-Image-lraopslraopslrao.png",
  },
  {
    title: "Live Handwritten text detection",
    description: "Real-time handwriting recognition and character segmentation utilizing computer vision pipelines and deep learning models.",
    tags: ["Python", "OpenCV", "PyTorch", "Machine Learning", "2024"],
    link: "https://github.com/Epicguest97/live_hand_written",
    image: "https://i.ibb.co/LXt2Q6r2/Picture2.jpg",
  },
  {
    title: "-MEH Coin",
    description: "A custom ERC-20 smart contract token built, tested, and deployed on the Ethereum blockchain network.",
    tags: ["Solidity", "Ethereum", "Web3.js", "Blockchain", "2024"],
    link: "https://github.com/Epicguest97/-MEHCoin",
    image: "https://i.ibb.co/RGR5ytk1/Screenshot-2026-08-09-at-12-11-57-AM.png",
  },
  {
    title: "LeetStudio",
    description: "A custom programmer workspace environment to track, solve, and analyze LeetCode problems in real-time.",
    tags: ["React", "TypeScript", "TailwindCSS", "API", "2024"],
    link: "https://github.com/Epicguest97/leetstudio",
    image: "https://i.ibb.co/JSLm6GG/Screenshot-2026-08-09-at-12-02-39-AM.png",
  },
  {
    title: "Fedora Rice",
    description: "A highly customized and aesthetic desktop environment configuration setup script for Fedora Linux OS.",
    tags: ["Linux", "Fedora", "Bash", "Dotfiles", "2024"],
    link: "https://github.com/Epicguest97/fedora-rice",
    image: "https://i.ibb.co/ymxY2gyG/default.png",
  },
  {
    title: "CNN Accelerator RISC-V",
    description: "Custom RTL Verilog acceleration blocks for CNN layers integrated on a RISC-V platform, simulated with Verilator.",
    tags: ["Verilog", "RISC-V", "Hardware Design", "Verilator", "2025"],
    link: "https://github.com/Epicguest97/CNN_Accelerator-RISC-V-",
    image: "https://i.ibb.co/j9Hh6W5z/Gemini-Generated-Image-aturjdaturjdatur.png",
  },
  {
    title: "3D Portfolio Site",
    description: "An immersive 3D personal portfolio showcase built to render interactive 3D components and workspace layouts.",
    tags: ["ThreeJS", "React Three Fiber", "React", "TailwindCSS", "2024"],
    link: "https://github.com/Epicguest97/portfolio",
    image: "https://i.ibb.co/ZpYJqtqh/Screenshot-2026-08-09-at-12-18-02-AM.png",
  },
  {
    title: "OpenClaw for PineLabs API",
    description: "A payment microservice wrapper and CLI integration utility developed during the PineLabs Fintech Hackathon.",
    tags: ["Node.js", "Express.js", "REST API", "Fintech", "2024"],
    link: "https://github.com/Epicguest97/pinelabs-hackathon-dump-",
    image: "https://i.ibb.co/991Q5WWs/Gemini-Generated-Image-gss07fgss07fgss0.png",
  },
  {
    title: "Bug Tracker",
    description: "An interactive issue log database dashboard allowing dev teams to record, prioritize, and assign bug tickets.",
    tags: ["React", "NodeJS", "Express.js", "MongoDB", "2024"],
    link: "https://github.com/Epicguest97/BugTrack",
    image: "https://i.ibb.co/C5WYZxGF/Screenshot-2026-08-09-at-12-14-38-AM.png",
  },
  {
    title: "Customer Churn Predictor",
    description: "Machine learning model pipelines utilizing telecom user datasets to identify classification churn markers.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "2024"],
    link: "https://github.com/Epicguest97/Customer-Churn-Prediction",
    image: "https://i.ibb.co/pBhLSh0Y/Gemini-Generated-Image-xfivguxfivguxfiv.png",
  },
  {
    title: "A/B Testing Framework",
    description: "Statistical cohort evaluator performing hypothesis testing (t-test, Z-test) to analyze conversion variant metrics.",
    tags: ["Python", "SciPy", "Statistics", "Data Analysis", "2024"],
    link: "https://github.com/Epicguest97/AB-Testing",
    image: "https://i.ibb.co/G3k9cycY/Screenshot-2026-08-09-at-12-30-58-AM.png",
  },
  {
    title: "Napster & Spotify Clone",
    description: "Fully-featured responsive music player client leveraging persistent playbacks, playlist curation, and search.",
    tags: ["React", "TypeScript", "TailwindCSS", "Web Audio API", "2024"],
    link: "https://github.com/Epicguest97/napster",
    image: "https://i.ibb.co/2Yh9NWHB/Screenshot-2026-08-09-at-12-08-42-AM.png",
  },
  {
    title: "Inventory Management System",
    description: "Full-stack trade index metrics logger featuring real-time catalog changes, stock warnings, and data tables.",
    tags: ["NextJS", "Typescript", "Supabase", "PostgreSQL", "2025"],
    link: "https://github.com/Epicguest97/easy-trade-trove",
    image: "https://raw.githubusercontent.com/Epicguest97/Portfolio-main-/refs/heads/main/public/database.png",
  },
  {
    title: "MIT Library Portal",
    description: "A revamped portal offering booking reservations, real-time book checkout trackers, and administrator logs.",
    tags: ["NextJS", "Typescript", "Supabase", "PostgreSQL", "2025"],
    link: "https://github.com/Epicguest97/MIT_Library_revamped",
    image: "https://raw.githubusercontent.com/Epicguest97/Portfolio-main-/refs/heads/main/public/libarary.png",
  }
];

export const cyberProjects: Project[] = [
  {
    title: "Cloud Native Network Analyser",
    description: "A cloud-native traffic analysis tool designed to capture, parse, and analyze packets in Kubernetes and microservices networks.",
    tags: ["Kubernetes", "Docker", "Python", "Cybersecurity", "Networking", "2025"],
    link: "https://github.com/Epicguest97/cloud-native-network-analyser",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Container Runtime Security Platform",
    description: "A security monitoring utility checking runtime container actions for file tampering and unauthorized syscalls.",
    tags: ["Docker", "Go", "Cybersecurity", "Linux", "eBPF", "2025"],
    link: "https://github.com/Epicguest97/Container-Runtime-Security-Platform",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Distributed Secure API Gateway",
    description: "High-performance distributed API gateway with OAuth verification, rate limiting, and SSL termination.",
    tags: ["Node.js", "Express.js", "Redis", "Cybersecurity", "REST API", "2025"],
    link: "https://github.com/Epicguest97/Distributed-Secure-API-Gateway",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
  }
];

export const goodProjects: Project[] = [
  {
    title: "Eulogy",
    description: "A secure replica of the BitChat mobile messaging client built natively for iOS platforms.",
    tags: ["iOS", "Swift", "WebSockets", "Security", "2024"],
    link: "https://github.com/Epicguest97/euology",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Tenant Management Portal",
    description: "Full-stack administrator portal built to coordinate leases, tenant details, maintenance files, and invoices.",
    tags: ["React", "NodeJS", "MongoDB", "Express.js", "2024"],
    link: "https://github.com/Epicguest97/Tenant_Managemnet",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "whereMIT",
    description: "A campus directory mapping navigation grids to search buildings, corridors, and classrooms.",
    tags: ["Next.js", "Mapbox", "TypeScript", "TailwindCSS", "2025"],
    link: "https://github.com/Epicguest97/wheremit",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Option Lab Studio",
    description: "An option trading portfolio modeler graphing payouts and assessing Black-Scholes Greeks dynamically.",
    tags: ["React", "Python", "FastAPI", "Fintech", "Data Analysis", "2024"],
    link: "https://github.com/Epicguest97/optionlabstudio",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "HumanAI Project",
    description: "Open source contributions to GSSoC focusing on human-centric AI integrations and conversation logic.",
    tags: ["Python", "Machine Learning", "Open Source", "GSSoC", "2023"],
    link: "https://github.com/Epicguest97/humanAI",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "CareNet",
    description: "College health network dashboard logging physician availability, bookings, and medical history.",
    tags: ["Next.js", "Typescript", "Supabase", "PostgreSQL", "2024"],
    link: "https://github.com/Epicguest97/tendertrader-exchange",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Food Delivery App",
    description: "Take-home assignment project featuring menu selectors, checkout flows, and status tracking.",
    tags: ["React Native", "TypeScript", "TailwindCSS", "Internship", "2023"],
    link: "https://github.com/Epicguest97/foodapp",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "LeetHub 2.0",
    description: "Chrome extension syncing resolved LeetCode and GFG solutions directly to personal GitHub repositories.",
    tags: ["JavaScript", "Chrome Extension", "GitHub API", "2024"],
    link: "https://github.com/Epicguest97/LeetHub-2.0",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop"
  }
];

export const dustyProjects: Project[] = [
  {
    title: "MERN Todo App",
    description: "My first finished full-stack MERN application representing early learning milestones.",
    tags: ["MongoDB", "Express.js", "React", "NodeJS", "2022"],
    link: "https://github.com/Epicguest97/mern-todo-app",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Sizey JS Module",
    description: "A lightweight utility JavaScript library published to NPM to easily calculate and parse byte sizes.",
    tags: ["JavaScript", "Node.js", "NPM Package", "2023"],
    link: "https://github.com/Epicguest97/sizey",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Bitlo Platform",
    description: "Mock web-based crypto currency catalog showcasing prices, graphs, and trade logs.",
    tags: ["HTML", "CSS", "JavaScript", "2022"],
    link: "https://github.com/Epicguest97/bitlo",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Choice Stream",
    description: "Live real-time polling widget displaying survey metrics with WebSocket broadcast states.",
    tags: ["React", "WebSockets", "Node.js", "2023"],
    link: "https://github.com/Epicguest97/choice-stream",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "State Diagram Maker",
    description: "UML state machine modeler drafted as a tool helper for a workplace colleague.",
    tags: ["HTML", "JavaScript", "Canvas", "2023"],
    link: "https://github.com/Epicguest97/state",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Insta Grabber Mobile",
    description: "A script designed to grab Instagram user cards, avatars, and bios in mobile formats.",
    tags: ["Python", "Mobile", "Scraping", "2023"],
    link: "https://github.com/Epicguest97/insta-profile-grabber-mobile",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Pingrender Pinger",
    description: "Automated cron-like script created to periodically ping Render instances to bypass inactive sleep modes.",
    tags: ["Node.js", "Cron", "Serverless", "2023"],
    link: "https://github.com/Epicguest97/pingrender",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Flash Cards App",
    description: "Simple study tool containing flip decks, designed in my first college year.",
    tags: ["HTML", "CSS", "JavaScript", "2022"],
    link: "https://github.com/Epicguest97/FlashCard",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "ChatGPT Mock UI",
    description: "A layout clone mimicking the OpenAI ChatGPT interface panels with static responsiveness.",
    tags: ["HTML", "CSS", "JavaScript", "2023"],
    link: "https://github.com/Epicguest97/chatty-mimic-buttons-alive",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Deadstagram",
    description: "Social media prototype drafted to explore database schemas before designing clawbot.",
    tags: ["PHP", "SQL", "HTML", "CSS", "2022"],
    link: "https://github.com/Epicguest97/Deadstagram",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Government Tender Portal",
    description: "Mockup interface built to monitor government contracts listings and bids.",
    tags: ["React", "HTML", "CSS", "2023"],
    link: "https://github.com/Epicguest97/tendertrader-exchange",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Nifty Heatmap Visualizer",
    description: "Dynamic stock price fluctuation heatmap indexing Indian Nifty NSE entities.",
    tags: ["JavaScript", "D3.js", "Fintech", "Data Visualization", "2023"],
    link: "https://github.com/Epicguest97/nifty-viz-india",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Gender Classifier (Wheat)",
    description: "Early machine learning testing module built to classify dataset items by gender traits.",
    tags: ["Python", "Scikit-Learn", "Machine Learning", "2023"],
    link: "https://github.com/Epicguest97/wheat",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Text Recognition ML tool",
    description: "Basic optical character classification pipeline built in my second college year.",
    tags: ["Python", "Machine Learning", "TensorFlow", "2023"],
    link: "https://github.com/Epicguest97/text-recoginition",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Civil Structural calculator",
    description: "A custom load structural design calculator designed for a civil engineering classmate.",
    tags: ["Next.js", "ThreeJS", "TailwindCSS", "2024"],
    link: "https://o-1117.vercel.app/",
    image: "https://images.unsplash.com/photo-1503387762-592dec58ef4e?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "IP Tracker Tool",
    description: "IP lookup system providing details on network location, ISP providers, and time zones.",
    tags: ["HTML", "JavaScript", "APIs", "2022"],
    link: "https://github.com/Epicguest97/something",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Static mockup",
    description: "My first static store webpage model designed to explore raw HTML and CSS layouts.",
    tags: ["HTML", "CSS", "2022"],
    link: "https://github.com/Epicguest97/ecommerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "MyKernel",
    description: "A basic hobby operating system kernel containing startup assembly files and VGA output lines.",
    tags: ["C", "Assembly", "Operating Systems", "x86", "2024"],
    link: "https://github.com/Epicguest97/mykernel",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Cross-Platform C Compiler",
    description: "Lexical parse engine and parser grammar builder designed for compiler lab assignments.",
    tags: ["C", "Compiler Design", "Lab Project", "2024"],
    link: "https://github.com/Epicguest97/CrossPltaformCComplier",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "some iste shit",
    description: "i dont know",
    tags: ["React", "HTML", "CSS", "2023"],
    link: "https://github.com/Epicguest97/Demo_ISTE/tree/main",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
  }
];
