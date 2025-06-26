import { useState, useRef } from "react";
import ParticlesBackground from "./Components/ParticlesBackground";
import Points from "./Components/Points";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import LastPlayedSong from "./Components/LastPlayedSong";
import Socials from "./Components/Socials";
import { FloatingDock } from "./Components/ui/floating-dock";
import { UserIcon, Code2Icon, GithubIcon, LinkedinIcon, FileTextIcon, SunIcon, CoffeeIcon } from "lucide-react";
import { SiLeetcode } from "react-icons/si";


function MyDock() {
  const items = [
    { title: "Profile", icon: <UserIcon className="text-white" />, href: "#profile" },
    { title: "Projects", icon: <Code2Icon className="text-white" />, href: "#projects" },
    { title: "GitHub", icon: <GithubIcon className="text-white" />, href: "https://github.com/Epicguest97" },
    { title: "LinkedIn", icon: <LinkedinIcon className="text-white" />, href: "https://www.linkedin.com/in/mehul-kaushik-7b3984337/" },
    { title: "Leetcode", icon: <SiLeetcode className="text-white" />, href: "https://leetcode.com/u/mkaushik06/" },
    { title: "Resume", icon: <FileTextIcon className="text-white" />, href: "https://d8it4huxumps7.cloudfront.net/uploads/attachements/user-resumes/685d83742ae40_Mehul_230905204.pdf" },
  ];
  
  return (
    <FloatingDock 
      items={items}
      desktopClassName="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      mobileClassName="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    />
  );
}

export default function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAwardedPoints, setHasAwardedPoints] = useState(false);
  const [hasAwardedDarkMode, setHasAwardedDarkMode] = useState(false);
  const [hasAwardedSocials, setHasAwardedSocials] = useState(false);
  const holdTimer = useRef<NodeJS.Timeout | null>(null);

  const handlePressStart = () => {
    if (!hasAwardedPoints) {
      setIsLoading(true);
      holdTimer.current = setTimeout(() => {
        setPoints(prev => Math.min(prev + 20, 100));
        setHasAwardedPoints(true);
        setIsLoading(false);
        new Audio('/ting.mp3').play();
        setNotificationMessage("<Easter Egg #1> looked at my pic for suspiciously long time");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }, 3000);
    }
  };

  const handlePressEnd = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    setIsLoading(false);
  };

  const toggleDarkMode = () => {
    // Award points only once for clicking the dark mode button
    if (!hasAwardedDarkMode) {
      setPoints(prev => Math.min(prev + 20, 100));
      setHasAwardedDarkMode(true);
      new Audio('/ting.mp3').play();
    }
    setNotificationMessage("<Easter Egg #2> I am too lazy to code light mode.");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const toggleSocials = () => {
    // Award points only once for clicking the socials link button
    if (!hasAwardedSocials) {
      setPoints(prev => Math.min(prev + 20, 100));
      setHasAwardedSocials(true);
      new Audio('/ting.mp3').play();
    }
    setNotificationMessage("<Easter Egg #4> Follow me on Insta");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="relative min-h-screen overflow-y-auto dark-bg">
      <ParticlesBackground />
      <div className="fixed inset-0 flex flex-col items-center">
        <MyDock />
        <div className="h-full w-full flex flex-col items-center justify-center text-white">
          <div
            className="w-full md:w-[46.66%] h-full overflow-y-auto flex flex-col py-20 px-4 md:px-0 bg-transparent scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex justify-between items-center mb-6">
              <Points 
                points={points} 
                darkMode={true} 
                onReload={() => {
                  setPoints(0);
                  setHasAwardedPoints(false);
                  setHasAwardedDarkMode(false);
                  setHasAwardedSocials(false);
                }} 
              />
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  <SunIcon className="h-5 w-5 text-yellow-300" />
                </button>
                <a
                  href="https://buymeacoffee.com/mehulkaushik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors"
                  aria-label="Buy me a coffee"
                >
                  <CoffeeIcon className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            {/* Profile picture and intro section */}
            <div id="profile">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                {/* Profile Picture Container with hover (desktop) and click (mobile) handlers */}
                <div 
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 cursor-pointer"
                  onMouseEnter={handlePressStart}
                  onMouseLeave={handlePressEnd}
                  onTouchStart={handlePressStart}
                  onTouchEnd={handlePressEnd}
                >
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4E03AQENq4GdHViyDg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731440629073?e=1753920000&v=beta&t=kiB5PUWz2sv4YOEVPTUAdlxLWBgyKFnO3cDrGzc5m7s" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <span className="text-xs animate-pulse">Loading...</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl md:text-3xl font-bold">Hi, I am Mehul Kaushik,</h1>
                  <p className="text-base text-white/80">
                    I build full-stack web applications and experiment with Machine Learning to create smarter, more efficient solutions.
                  </p>
                  <p className="text-white/80">Noida, India</p>
                </div>
              </div>
            </div>
            
            {/* Experience Component */}
            <Experience />
            
            {/* Projects Component */}
            <div id="projects">
              <Projects />
            </div>
            
            {/* Technologies Component */}
            <Technologies />
            
            {/* Last Played Song Section */}
            <div className="mt-8 px-4">
              <LastPlayedSong />
            </div>
            
            {/* Socials Section (Pass the handler to the existing socials link button) */}
            <Socials onSocialsClick={toggleSocials} />
            
            {/* Bottom padding */}
            <div className="pb-10"></div>
          </div>
        </div>
      </div>
      {showNotification && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#262626] text-white py-3 px-6 rounded-lg shadow-xl border border-gray-700">
          {notificationMessage}
        </div>
      )}
    </div>
  );
}
