import ParticlesBackground from "./Components/ParticlesBackground";
import Points from "./Components/Points";
import { FloatingDock } from "./Components/ui/floating-dock";
import { UserIcon, Code2Icon, GithubIcon, LinkedinIcon, FileTextIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

function MyDock() {
  const items = [
    { title: "Profile", icon: <UserIcon className="text-white" />, href: "/profile" },
    { title: "Projects", icon: <Code2Icon className="text-white" />, href: "/projects" },
    { title: "GitHub", icon: <GithubIcon className="text-white" />, href: "https://github.com/yourusername" },
    { title: "LinkedIn", icon: <LinkedinIcon className="text-white" />, href: "https://linkedin.com/in/yourusername" },
    { title: "Resume", icon: <FileTextIcon className="text-white" />, href: "/resume" },
  ];
  
  return (
    <FloatingDock 
      items={items}
      desktopClassName="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      mobileClassName="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    />
  );
}

// Main App component
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen overflow-y-auto dark-bg">
      <ParticlesBackground />
      <div className="fixed inset-0 flex flex-col items-center">
        <MyDock />
        <div className="h-full w-full flex items-center justify-center text-white">
          <div className="w-[46.66%] h-full overflow-y-auto flex flex-col py-20 bg-transparent scrollbar-hide">
            {/* Header controls */}
            <div className="flex justify-between items-center mb-6">
              <Points />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? 
                  <SunIcon className="h-5 w-5 text-yellow-300" /> : 
                  <MoonIcon className="h-5 w-5 text-blue-300" />
                }
              </button>
            </div>
            
            {/* Profile picture and intro section */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="../public/mehul.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl md:text-3xl font-bold">Hi, I am Mehul Kaushik,</h1>
                <p className="text-base text-white/80">
                  I build full-stack web applications and experiment with Machine Learning to create smarter, more efficient solutions.
                </p>
                <p className="text-white/80">Noida, India</p>
              </div>
            </div>
            
            {/* Experience Component */}
            <Experience />
            
            {/* Projects Component */}
            <Projects />
            
            {/* Technologies Component */}
            <Technologies />
            
            {/* Add some bottom padding for scrolling */}
            <div className="pb-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}