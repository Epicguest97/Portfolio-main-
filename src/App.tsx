import ParticlesBackground from "./Components/ParticlesBackground";
import Points from "./Components/Points";
import { FloatingDock } from "./Components/ui/floating-dock";
import { UserIcon, Code2Icon, GithubIcon, LinkedinIcon, FileTextIcon, MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

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
    <div className="relative h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="fixed inset-0 flex flex-col items-center">
        <MyDock />
        <div className="h-full w-full flex items-center justify-center text-white">
          <div className="w-[46.66%] h-full flex flex-col justify-center bg-transparent">
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
            <div className="flex flex-row items-start gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="../public/mehul.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Hi, I am Mehul Kaushik,</h1>
                <p className="text-base text-white/80">
                  I build full-stack web applications and experiment with Machine Learning to create smarter, more efficient solutions.
                </p>
                <p className="text-white/80">Noida, India</p>
              </div>
            </div>
            
            {/* Current position section */}
            <div className="mt-12">
              <h2 className="text-sm uppercase tracking-wider text-white/60 mb-2">CURRENTLY</h2>
              <div>
                <h3 className="text-2xl font-bold">Frontend Developer</h3>
                <p className="text-white/80">2024 - PRESENT</p>
                <p className="mt-3 text-white/80">
                  React and Next.js application development focused on accessibility, security, and digital innovation.
                </p>
                
                {/* Tech stack icons */}
                <div className="flex gap-4 mt-4">
                  {/* Add your tech stack icons here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}