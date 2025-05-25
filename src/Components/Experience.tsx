import { useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { SiReact, SiTypescript, SiNodedotjs, SiNextdotjs, SiWordpress, SiGit, SiLaravel } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";

export default function Experience() {
  const [showPreviousRoles, setShowPreviousRoles] = useState(false);

  return (
    <div className="mt-12">
      <h2 className="text-sm uppercase tracking-wider text-white/60 mb-2">CURRENTLY</h2>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Frontend Developer</h3>
          <p className="text-white/80">2024 - PRESENT</p>
          <p className="mt-3 text-white/80">
            React and Next.js application development focused on accessibility, security, and digital innovation.
          </p>
          
          <div className="flex gap-2 mt-4">
            <SiReact className="h-5 w-5" />
            <SiNextdotjs className="h-5 w-5" />
            <SiTypescript className="h-5 w-5" />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-emerald-900/80 text-emerald-300 px-2 py-1 rounded text-xs mb-1">Govone</span>
          <span className="text-xs text-white/60">Remote</span>
        </div>
      </div>
      
      {/* Previous roles button with animated chevron */}
      <motion.button 
        onClick={() => setShowPreviousRoles(!showPreviousRoles)}
        className="flex items-center gap-2 mt-6 text-white/80 hover:text-white transition-colors"
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          animate={{ rotate: showPreviousRoles ? -90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </motion.div>
        <span>Previous roles</span>
      </motion.button>
      
      {/* Animated previous roles section */}
      <AnimatePresence>
        {showPreviousRoles && (
          <motion.div 
            className="mt-8 space-y-12 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.1, 0.25, 1.0],
              opacity: { duration: 0.2 }
            }}
          >
            {/* First previous role */}
            <motion.div 
              className="flex items-start justify-between"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div>
                <h3 className="text-xl font-bold">Software Developer</h3>
                <p className="text-white/80">2022 - 2024</p>
                <p className="mt-3 text-white/80">
                  Development of websites and web applications using React, TypeScript, and Next.js, including dashboards and
                  management panels. Systems management with Node.js, version control with Git and AWS, and backend in
                  Laravel, with experience in WordPress.
                </p>
                
                <div className="flex gap-2 mt-4">
                  <SiReact className="h-5 w-5" />
                  <SiTypescript className="h-5 w-5" />
                  <SiNodedotjs className="h-5 w-5" />
                  <SiGit className="h-5 w-5" />
                  <SiWordpress className="h-5 w-5" />
                  <SiLaravel className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-neutral-800 px-2 py-1 rounded text-white/90 text-xs mb-1">Grumft</span>
                <span className="text-xs text-white/60">Sao Paulo</span>
              </div>
            </motion.div>
            
            {/* Second previous role */}
            <motion.div 
              className="flex items-start justify-between"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div>
                <h3 className="text-xl font-bold">System Analyst</h3>
                <p className="text-white/80">2019 - 2022</p>
                <p className="mt-3 text-white/80">
                  Development of small to medium applications, such as responsive apps and websites. Responsible for creating
                  web application prototypes, managing, and automating services.
                </p>
                
                <div className="flex gap-2 mt-4">
                  <SiReact className="h-5 w-5" />
                  <SiWordpress className="h-5 w-5" />
                  <SiNodedotjs className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-blue-800/80 px-2 py-1 rounded text-white/90 text-xs mb-1">GOIDEA</span>
                <span className="text-xs text-white/60">Sao Paulo</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
