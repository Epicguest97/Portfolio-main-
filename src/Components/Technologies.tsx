import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiReact,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
} from "react-icons/si";

const techs = [
  { name: "Next.js", icon: <SiNextdotjs size={28} className="text-white" /> },
  { name: "HTML 5", icon: <SiHtml5 size={28} className="text-orange-500" /> },
  { name: "CSS 3", icon: <SiCss3 size={28} className="text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={28} className="text-blue-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={28} className="text-cyan-400" /> },
  { name: "Supabase", icon: <SiSupabase size={28} className="text-green-400" /> },
  { name: "React", icon: <SiReact size={28} className="text-cyan-300" /> },
  { name: "Python", icon: <SiPython size={28} className="text-yellow-300" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={28} className="text-orange-400" /> },
  { name: "PyTorch", icon: <SiPytorch size={28} className="text-red-400" /> },
  { name: "Jupyter Notebooks", icon: <SiJupyter size={28} className="text-orange-300" /> },
];

export default function Technologies() {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-4">TECHNOLOGIES</h2>
      <div className="flex gap-4 flex-wrap">
        {techs.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center bg-neutral-900/80 px-4 py-3 rounded-xl shadow w-24">
            {tech.icon}
            <span className="text-xs text-white/70 mt-2 text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
