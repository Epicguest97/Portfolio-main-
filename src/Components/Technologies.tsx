import {
  SiCplusplus,
  SiReact,
  SiPython,
  SiPytorch,
  SiHuggingface,
  SiLangchain,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiBurpsuite,
  SiWireshark,
} from "react-icons/si";

const techs = [
  { name: "C++", icon: <SiCplusplus size={28} className="text-blue-400" /> },
  { name: "Python", icon: <SiPython size={28} className="text-yellow-300" /> },
  { name: "PyTorch", icon: <SiPytorch size={28} className="text-red-400" /> },
  { name: "Transformers", icon: <SiHuggingface size={28} className="text-yellow-400" /> },
  { name: "LangChain", icon: <SiLangchain size={28} className="text-emerald-400" /> },
  { name: "React", icon: <SiReact size={28} className="text-cyan-300" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} className="text-white" /> },
  { name: "Express.js", icon: <SiExpress size={28} className="text-white" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} className="text-sky-400" /> },
  { name: "Prisma ", icon: <SiPrisma size={28} className="text-slate-100" /> },
  { name: "Docker", icon: <SiDocker size={28} className="text-sky-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={28} className="text-blue-500" /> },
  { name: "AWS (EC2, S3, RDS, IAM)", icon: <SiAmazon size={28} className="text-orange-300" /> },
  { name: "Burp Suite", icon: <SiBurpsuite size={28} className="text-orange-500" /> },
  { name: "Wireshark", icon: <SiWireshark size={28} className="text-cyan-400" /> },
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
