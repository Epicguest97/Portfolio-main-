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
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "AskPDF",
    description: "A Retrieval-Augmented Generation (RAG) assistant for querying PDF documents using semantic similarity searches and Gemini LLM.",
    tags: ["Express.js", "MongoDB", "Redis", "Gemini API", "2025"],
    link: "https://github.com/Epicguest97/AskPDF",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Live Handwritten text detection",
    description: "Real-time handwriting recognition and character segmentation utilizing computer vision pipelines and deep learning models.",
    tags: ["Python", "OpenCV", "PyTorch", "Machine Learning", "2024"],
    link: "https://github.com/Epicguest97/live_hand_written",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "-MEH Coin",
    description: "A custom ERC-20 smart contract token built, tested, and deployed on the Ethereum blockchain network.",
    tags: ["Solidity", "Ethereum", "Web3.js", "Blockchain", "2024"],
    link: "https://github.com/Epicguest97/-MEHCoin",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "LeetStudio",
    description: "A custom programmer workspace environment to track, solve, and analyze LeetCode problems in real-time.",
    tags: ["React", "TypeScript", "TailwindCSS", "API", "2024"],
    link: "https://github.com/Epicguest97/leetstudio",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Fedora Rice",
    description: "A highly customized and aesthetic desktop environment configuration setup script for Fedora Linux OS.",
    tags: ["Linux", "Fedora", "Bash", "Dotfiles", "2024"],
    link: "https://github.com/Epicguest97/fedora-rice",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "CNN Accelerator RISC-V",
    description: "Custom RTL Verilog acceleration blocks for CNN layers integrated on a RISC-V platform, simulated with Verilator.",
    tags: ["Verilog", "RISC-V", "Hardware Design", "Verilator", "2025"],
    link: "https://github.com/Epicguest97/CNN_Accelerator-RISC-V-",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "3D Portfolio Site",
    description: "An immersive 3D personal portfolio showcase built to render interactive 3D components and workspace layouts.",
    tags: ["ThreeJS", "React Three Fiber", "React", "TailwindCSS", "2024"],
    link: "https://github.com/Epicguest97/portfolio",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "OpenClaw for PineLabs API",
    description: "A payment microservice wrapper and CLI integration utility developed during the PineLabs Fintech Hackathon.",
    tags: ["Node.js", "Express.js", "REST API", "Fintech", "2024"],
    link: "https://github.com/Epicguest97/pinelabs-hackathon-dump-",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Bug Tracker",
    description: "An interactive issue log database dashboard allowing dev teams to record, prioritize, and assign bug tickets.",
    tags: ["React", "NodeJS", "Express.js", "MongoDB", "2024"],
    link: "https://github.com/Epicguest97/BugTrack",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Customer Churn Predictor",
    description: "Machine learning model pipelines utilizing telecom user datasets to identify classification churn markers.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "2024"],
    link: "https://github.com/Epicguest97/Customer-Churn-Prediction",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "A/B Testing Framework",
    description: "Statistical cohort evaluator performing hypothesis testing (t-test, Z-test) to analyze conversion variant metrics.",
    tags: ["Python", "SciPy", "Statistics", "Data Analysis", "2024"],
    link: "https://github.com/Epicguest97/AB-Testing",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Napster & Spotify Clone",
    description: "Fully-featured responsive music player client leveraging persistent playbacks, playlist curation, and search.",
    tags: ["React", "TypeScript", "TailwindCSS", "Web Audio API", "2024"],
    link: "https://github.com/Epicguest97/napster",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
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

export const oldDustyProjects: Project[] = [
  {
    title: "Basic Calculator",
    description: "Simple calculator project with UI made during the first week of learning React.",
    tags: ["React", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Todo App",
    description: "My first interactive todo app using local storage in plain javascript.",
    tags: ["HTML", "Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Digital Clock",
    description: "Simple clock displaying the current local time with different background themes.",
    tags: ["HTML", "CSS", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Classic game of tic tac toe built to understand matrix logic and DOM selectors.",
    tags: ["Javascript", "HTML", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1611195974226-a6f9be9dd763?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Weather Widget",
    description: "Consumes a free weather API to show the current climate conditions of a given city.",
    tags: ["Javascript", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Currency Converter",
    description: "Exchange rate converter fetching live rates for global currencies.",
    tags: ["Javascript", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Static Personal Webpage",
    description: "Very first static profile built using basic HTML tags and standard CSS selectors.",
    tags: ["HTML", "CSS", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Random Quote Generator",
    description: "Pulls inspirational quotes randomly using fetch API calls on a click.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Password Strength Checker",
    description: "Evaluates strength of passwords based on length, special characters, and numbers.",
    tags: ["Javascript", "CSS", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "BMI Calculator",
    description: "A weight index calculator with a visually simple slider reflecting classifications.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Landing Page Demo",
    description: "A mockup design landing page for a fictional product startup.",
    tags: ["HTML", "CSS", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Counter App",
    description: "An incremental, decremental and reset counter layout to understand React hooks.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Recipe Finder",
    description: "API integrated culinary application search to query cooking instructions by ingredients.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Tip Calculator",
    description: "Split tip amounts evenly with custom inputs among multiple billing participants.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Color Flipper",
    description: "A tool that generates hexadecimal color codes and applies them to background elements.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Memory Match Game",
    description: "Flip-card match game with scoring tracking, made to learn arrays and timed resets.",
    tags: ["Javascript", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Local Notes Editor",
    description: "Web scratchpad with save alerts that retains text directly inside the web browser.",
    tags: ["HTML", "Javascript", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Simple Drumkit",
    description: "A musical soundboard app binding specific keyboard buttons to audio outputs.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Age Calculator",
    description: "Enter a birthday date, return exact age breakdown in days, months, and years.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Markdown Previewer",
    description: "An editor that renders markdown code inputs live side-by-side inside the viewport.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Quiz Application",
    description: "Multi-choice question deck presenting results indicators upon quiz completion.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Expense Tracker",
    description: "Budget logger tracking transaction history with graphical category splits.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Stopwatch",
    description: "Precise timer with split-lap functionality utilizing standard javascript intervals.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Github User Finder",
    description: "Consumes GitHub APIs to retrieve profiles and display repositories, followers and statistics.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Rock Paper Scissors",
    description: "Play against a simple randomized CPU logic with dynamic win/loss scoreboard.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1628191137573-dee64e727614?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Basic Paint App",
    description: "Draw on canvas elements with simple color selectors and thickness adjustments.",
    tags: ["Javascript", "HTML", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Word Counter",
    description: "Analyzes inputs live returning count statistics for lines, characters, and spaces.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Mockup",
    description: "Simple catalog displaying mock items with add-to-cart reactivity.",
    tags: ["React", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Unit Converter",
    description: "Standard converter for mass, temperature, metric and imperial length formulas.",
    tags: ["Javascript", "2022"],
    link: "#",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Simple Web Crawler",
    description: "A python script parsing public index directories to index internal anchor tags.",
    tags: ["Python", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Library Book Tracker",
    description: "Manage book records, checkout status, and return alerts via storage systems.",
    tags: ["Python", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Terminal Snake Game",
    description: "Standard terminal-based retro snake game utilizing curses library interfaces.",
    tags: ["Python", "2023"],
    link: "#",
    image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=600&auto=format&fit=crop"
  }
];
