import { RotateCwIcon } from 'lucide-react';

export default function Points({ darkMode = true }) {
  return (
    <div className={`flex items-center gap-1 ${darkMode ? 'text-white' : 'text-black'}`}>
      <span className="text-sm">105</span>
      <span className="text-sm">/200 points</span>
      <button className={`ml-1 ${darkMode ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}`}>
        <RotateCwIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
