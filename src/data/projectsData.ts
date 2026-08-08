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
    image: "/images/moonmovement.webp",
  },
  {
    title: "AskPDF",
    description: "A Retrieval-Augmented Generation (RAG) assistant for querying PDF documents using semantic similarity searches and Gemini LLM.",
    tags: ["Express.js", "MongoDB", "Redis", "Gemini API", "2025"],
    link: "https://github.com/Epicguest97/AskPDF",
    image: "/images/askpdf.webp",
  },
  {
    title: "Live Handwritten text detection",
    description: "Real-time handwriting recognition and character segmentation utilizing computer vision pipelines and deep learning models.",
    tags: ["Python", "OpenCV", "PyTorch", "Machine Learning", "2024"],
    link: "https://github.com/Epicguest97/live_hand_written",
    image: "/images/live_handwritten_text_detection.webp",
  },
  {
    title: "-MEH Coin",
    description: "A custom ERC-20 smart contract token built, tested, and deployed on the Ethereum blockchain network.",
    tags: ["Solidity", "Ethereum", "Web3.js", "Blockchain", "2024"],
    link: "https://github.com/Epicguest97/-MEHCoin",
    image: "/images/meh_coin.webp",
  },
  {
    title: "LeetStudio",
    description: "A custom programmer workspace environment to track, solve, and analyze LeetCode problems in real-time.",
    tags: ["React", "TypeScript", "TailwindCSS", "API", "2024"],
    link: "https://github.com/Epicguest97/leetstudio",
    image: "/images/leetstudio.webp",
  },
  {
    title: "Fedora Rice",
    description: "A highly customized and aesthetic desktop environment configuration setup script for Fedora Linux OS.",
    tags: ["Linux", "Fedora", "Bash", "Dotfiles", "2024"],
    link: "https://github.com/Epicguest97/fedora-rice",
    image: "/images/fedora_rice.webp",
  },
  {
    title: "CNN Accelerator RISC-V",
    description: "Custom RTL Verilog acceleration blocks for CNN layers integrated on a RISC-V platform, simulated with Verilator.",
    tags: ["Verilog", "RISC-V", "Hardware Design", "Verilator", "2025"],
    link: "https://github.com/Epicguest97/CNN_Accelerator-RISC-V-",
    image: "/images/cnn_accelerator_risc_v.webp",
  },
  {
    title: "3D Portfolio Site",
    description: "An immersive 3D personal portfolio showcase built to render interactive 3D components and workspace layouts.",
    tags: ["ThreeJS", "React Three Fiber", "React", "TailwindCSS", "2024"],
    link: "https://github.com/Epicguest97/portfolio",
    image: "/images/3d_portfolio_site.webp",
  },
  {
    title: "OpenClaw for PineLabs API",
    description: "A payment microservice wrapper and CLI integration utility developed during the PineLabs Fintech Hackathon.",
    tags: ["Node.js", "Express.js", "REST API", "Fintech", "2024"],
    link: "https://github.com/Epicguest97/pinelabs-hackathon-dump-",
    image: "/images/openclaw_for_pinelabs_api.webp",
  },
  {
    title: "Bug Tracker",
    description: "An interactive issue log database dashboard allowing dev teams to record, prioritize, and assign bug tickets.",
    tags: ["React", "NodeJS", "Express.js", "MongoDB", "2024"],
    link: "https://github.com/Epicguest97/BugTrack",
    image: "/images/bug_tracker.webp",
  },
  {
    title: "Customer Churn Predictor",
    description: "Machine learning model pipelines utilizing telecom user datasets to identify classification churn markers.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "2024"],
    link: "https://github.com/Epicguest97/Customer-Churn-Prediction",
    image: "/images/customer_churn_predictor.webp",
  },
  {
    title: "A/B Testing Framework",
    description: "Statistical cohort evaluator performing hypothesis testing (t-test, Z-test) to analyze conversion variant metrics.",
    tags: ["Python", "SciPy", "Statistics", "Data Analysis", "2024"],
    link: "https://github.com/Epicguest97/AB-Testing",
    image: "/images/a_b_testing_framework.webp",
  },
  {
    title: "Napster & Spotify Clone",
    description: "Fully-featured responsive music player client leveraging persistent playbacks, playlist curation, and search.",
    tags: ["React", "TypeScript", "TailwindCSS", "Web Audio API", "2024"],
    link: "https://github.com/Epicguest97/napster",
    image: "/images/napster_spotify_clone.webp",
  },
  {
    title: "Inventory Management System",
    description: "Full-stack trade index metrics logger featuring real-time catalog changes, stock warnings, and data tables.",
    tags: ["NextJS", "Typescript", "Supabase", "PostgreSQL", "2025"],
    link: "https://github.com/Epicguest97/easy-trade-trove",
    image: "/images/inventory_management_system.webp",
  },
  {
    title: "MIT Library Portal",
    description: "A revamped portal offering booking reservations, real-time book checkout trackers, and administrator logs.",
    tags: ["NextJS", "Typescript", "Supabase", "PostgreSQL", "2025"],
    link: "https://github.com/Epicguest97/MIT_Library_revamped",
    image: "/images/mit_library_portal.webp",
  }
];

export const cyberProjects: Project[] = [
  {
    title: "Cloud Native Network Analyser",
    description: "A cloud-native traffic analysis tool designed to capture, parse, and analyze packets in Kubernetes and microservices networks.",
    tags: ["Kubernetes", "Docker", "Python", "Cybersecurity", "Networking", "2025"],
    link: "https://github.com/Epicguest97/cloud-native-network-analyser",
    image: "/images/cloud_native_network_analyser.webp"
  },
  {
    title: "Container Runtime Security Platform",
    description: "A security monitoring utility checking runtime container actions for file tampering and unauthorized syscalls.",
    tags: ["Docker", "Go", "Cybersecurity", "Linux", "eBPF", "2025"],
    link: "https://github.com/Epicguest97/Container-Runtime-Security-Platform",
    image: "/images/container_runtime_security_platform.webp"
  },
  {
    title: "Distributed Secure API Gateway",
    description: "High-performance distributed API gateway with OAuth verification, rate limiting, and SSL termination.",
    tags: ["Node.js", "Express.js", "Redis", "Cybersecurity", "REST API", "2025"],
    link: "https://github.com/Epicguest97/Distributed-Secure-API-Gateway",
    image: "/images/distributed_secure_api_gateway.webp"
  }
];

export const goodProjects: Project[] = [
  {
    title: "Eulogy",
    description: "A secure replica of the BitChat mobile messaging client built natively for iOS platforms.",
    tags: ["iOS", "Swift", "WebSockets", "Security", "2024"],
    link: "https://github.com/Epicguest97/euology",
    image: "/images/eulogy.webp"
  },
  {
    title: "Tenant Management Portal",
    description: "Full-stack administrator portal built to coordinate leases, tenant details, maintenance files, and invoices.",
    tags: ["React", "NodeJS", "MongoDB", "Express.js", "2024"],
    link: "https://github.com/Epicguest97/Tenant_Managemnet",
    image: "/images/tenant_management_portal.webp"
  },
  {
    title: "whereMIT",
    description: "A campus directory mapping navigation grids to search buildings, corridors, and classrooms.",
    tags: ["Next.js", "Mapbox", "TypeScript", "TailwindCSS", "2025"],
    link: "https://github.com/Epicguest97/wheremit",
    image: "/images/wheremit.webp"
  },
  {
    title: "Option Lab Studio",
    description: "An option trading portfolio modeler graphing payouts and assessing Black-Scholes Greeks dynamically.",
    tags: ["React", "Python", "FastAPI", "Fintech", "Data Analysis", "2024"],
    link: "https://github.com/Epicguest97/optionlabstudio",
    image: "/images/option_lab_studio.webp"
  },
  {
    title: "HumanAI Project",
    description: "Open source contributions to GSSoC focusing on human-centric AI integrations and conversation logic.",
    tags: ["Python", "Machine Learning", "Open Source", "GSSoC", "2023"],
    link: "https://github.com/Epicguest97/humanAI",
    image: "/images/humanai_project.webp"
  },
  {
    title: "CareNet",
    description: "College health network dashboard logging physician availability, bookings, and medical history.",
    tags: ["Next.js", "Typescript", "Supabase", "PostgreSQL", "2024"],
    link: "https://github.com/Epicguest97/tendertrader-exchange",
    image: "/images/carenet.webp"
  },
  {
    title: "Food Delivery App",
    description: "Take-home assignment project featuring menu selectors, checkout flows, and status tracking.",
    tags: ["React Native", "TypeScript", "TailwindCSS", "Internship", "2023"],
    link: "https://github.com/Epicguest97/foodapp",
    image: "/images/food_delivery_app.webp"
  },
  {
    title: "LeetHub 2.0",
    description: "Chrome extension syncing resolved LeetCode and GFG solutions directly to personal GitHub repositories.",
    tags: ["JavaScript", "Chrome Extension", "GitHub API", "2024"],
    link: "https://github.com/Epicguest97/LeetHub-2.0",
    image: "/images/leethub_2_0.webp"
  }
];

export const dustyProjects: Project[] = [
  {
    title: "MERN Todo App",
    description: "My first finished full-stack MERN application representing early learning milestones.",
    tags: ["MongoDB", "Express.js", "React", "NodeJS", "2022"],
    link: "https://github.com/Epicguest97/mern-todo-app",
    image: "/images/mern_todo_app.webp"
  },
  {
    title: "Sizey JS Module",
    description: "A lightweight utility JavaScript library published to NPM to easily calculate and parse byte sizes.",
    tags: ["JavaScript", "Node.js", "NPM Package", "2023"],
    link: "https://github.com/Epicguest97/sizey",
    image: "/images/sizey_js_module.webp"
  },
  {
    title: "Bitlo Platform",
    description: "Mock web-based crypto currency catalog showcasing prices, graphs, and trade logs.",
    tags: ["HTML", "CSS", "JavaScript", "2022"],
    link: "https://github.com/Epicguest97/bitlo",
    image: "/images/bitlo_platform.webp"
  },
  {
    title: "Choice Stream",
    description: "Live real-time polling widget displaying survey metrics with WebSocket broadcast states.",
    tags: ["React", "WebSockets", "Node.js", "2023"],
    link: "https://github.com/Epicguest97/choice-stream",
    image: "/images/choice_stream.webp"
  },
  {
    title: "State Diagram Maker",
    description: "UML state machine modeler drafted as a tool helper for a workplace colleague.",
    tags: ["HTML", "JavaScript", "Canvas", "2023"],
    link: "https://github.com/Epicguest97/state",
    image: "/images/state_diagram_maker.webp"
  },
  {
    title: "Insta Grabber Mobile",
    description: "A script designed to grab Instagram user cards, avatars, and bios in mobile formats.",
    tags: ["Python", "Mobile", "Scraping", "2023"],
    link: "https://github.com/Epicguest97/insta-profile-grabber-mobile",
    image: "/images/insta_grabber_mobile.webp"
  },
  {
    title: "Pingrender Pinger",
    description: "Automated cron-like script created to periodically ping Render instances to bypass inactive sleep modes.",
    tags: ["Node.js", "Cron", "Serverless", "2023"],
    link: "https://github.com/Epicguest97/pingrender",
    image: "/images/container_runtime_security_platform.webp"
  },
  {
    title: "Flash Cards App",
    description: "Simple study tool containing flip decks, designed in my first college year.",
    tags: ["HTML", "CSS", "JavaScript", "2022"],
    link: "https://github.com/Epicguest97/FlashCard",
    image: "/images/flash_cards_app.webp"
  },
  {
    title: "ChatGPT Mock UI",
    description: "A layout clone mimicking the OpenAI ChatGPT interface panels with static responsiveness.",
    tags: ["HTML", "CSS", "JavaScript", "2023"],
    link: "https://github.com/Epicguest97/chatty-mimic-buttons-alive",
    image: "/images/chatgpt_mock_ui.webp"
  },
  {
    title: "Deadstagram",
    description: "Social media prototype drafted to explore database schemas before designing clawbot.",
    tags: ["PHP", "SQL", "HTML", "CSS", "2022"],
    link: "https://github.com/Epicguest97/Deadstagram",
    image: "/images/insta_grabber_mobile.webp"
  },
  {
    title: "Government Tender Portal",
    description: "Mockup interface built to monitor government contracts listings and bids.",
    tags: ["React", "HTML", "CSS", "2023"],
    link: "https://github.com/Epicguest97/tendertrader-exchange",
    image: "/images/government_tender_portal.webp"
  },
  {
    title: "Nifty Heatmap Visualizer",
    description: "Dynamic stock price fluctuation heatmap indexing Indian Nifty NSE entities.",
    tags: ["JavaScript", "D3.js", "Fintech", "Data Visualization", "2023"],
    link: "https://github.com/Epicguest97/nifty-viz-india",
    image: "/images/option_lab_studio.webp"
  },
  {
    title: "Gender Classifier (Wheat)",
    description: "Early machine learning testing module built to classify dataset items by gender traits.",
    tags: ["Python", "Scikit-Learn", "Machine Learning", "2023"],
    link: "https://github.com/Epicguest97/wheat",
    image: "/images/gender_classifier_wheat.webp"
  },
  {
    title: "Text Recognition ML tool",
    description: "Basic optical character classification pipeline built in my second college year.",
    tags: ["Python", "Machine Learning", "TensorFlow", "2023"],
    link: "https://github.com/Epicguest97/text-recoginition",
    image: "/images/container_runtime_security_platform.webp"
  },
  {
    title: "Civil Structural calculator",
    description: "A custom load structural design calculator designed for a civil engineering classmate.",
    tags: ["Next.js", "ThreeJS", "TailwindCSS", "2024"],
    link: "https://o-1117.vercel.app/",
    image: "/images/civil_structural_calculator.webp"
  },
  {
    title: "IP Tracker Tool",
    description: "IP lookup system providing details on network location, ISP providers, and time zones.",
    tags: ["HTML", "JavaScript", "APIs", "2022"],
    link: "https://github.com/Epicguest97/something",
    image: "/images/ip_tracker_tool.webp"
  },
  {
    title: "E-Commerce Static mockup",
    description: "My first static store webpage model designed to explore raw HTML and CSS layouts.",
    tags: ["HTML", "CSS", "2022"],
    link: "https://github.com/Epicguest97/ecommerce",
    image: "/images/e_commerce_static_mockup.webp"
  },
  {
    title: "MyKernel",
    description: "A basic hobby operating system kernel containing startup assembly files and VGA output lines.",
    tags: ["C", "Assembly", "Operating Systems", "x86", "2024"],
    link: "https://github.com/Epicguest97/mykernel",
    image: "/images/mykernel.webp"
  },
  {
    title: "Cross-Platform C Compiler",
    description: "Lexical parse engine and parser grammar builder designed for compiler lab assignments.",
    tags: ["C", "Compiler Design", "Lab Project", "2024"],
    link: "https://github.com/Epicguest97/CrossPltaformCComplier",
    image: "/images/cross_platform_c_compiler.webp"
  },
  {
    title: "some iste shit",
    description: "i dont know",
    tags: ["React", "HTML", "CSS", "2023"],
    link: "https://github.com/Epicguest97/Demo_ISTE/tree/main",
    image: "/images/some_iste_shit.webp"
  }
];
