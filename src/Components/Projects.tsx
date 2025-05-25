const projects = [
  {
    title: "AcheAlguem",
    description: "Register and locate missing persons",
    tags: ["NextJS", "Typescript", "2025"],
    link: "#",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "NASA Dashboard",
    description: "Use free NASA API's in this dashboard",
    tags: ["NextJS", "Typescript", "2024"],
    link: "#",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "McDonalds",
    description: "McDonalds Delivery App clone, developed on the FSW Week",
    tags: ["NextJS", "Typescript", "2025"],
    link: "#",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Projects() {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-4">RECENT PROJECTS</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            className="bg-neutral-900/80 rounded-xl p-4 min-w-[260px] max-w-[260px] flex-shrink-0 hover:scale-105 transition-transform shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.title} className="rounded mb-3 w-full h-28 object-cover" />
            <h3 className="font-bold text-lg mb-1">{project.title}</h3>
            <p className="text-xs text-white/70 mb-2">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-neutral-800 text-xs px-2 py-0.5 rounded text-white/70">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
