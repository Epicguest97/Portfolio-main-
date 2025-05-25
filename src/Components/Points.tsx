import { RotateCwIcon } from 'lucide-react';
import { motion } from "motion/react";

export default function Points({ darkMode = true, points = 0, onReload }: { darkMode?: boolean; points?: number; onReload?: () => void }) {
  return (
    <div className={`flex items-center gap-1 ${darkMode ? 'text-white' : 'text-black'}`}>
      <motion.span 
        key={points}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 0.5 }}
        className="text-sm"
      >
        {points}
      </motion.span>
      <span className="text-sm">/100 points</span>
      <button onClick={onReload} className={`ml-1 ${darkMode ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
        <RotateCwIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
