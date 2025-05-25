import { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";

const projects = [
	{
		title: "AcheAlguem",
		description: "Register and locate missing persons",
		tags: ["NextJS", "Typescript", "2025"],
		link: "#",
		image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
	{
		title: "NASA Dashboard",
		description: "Use free NASA API's in this dashboard",
		tags: ["NextJS", "Typescript", "2024"],
		link: "#",
		image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
	},
	{
		title: "McDonalds",
		description: "McDonalds Delivery App clone, developed on the FSW Week",
		tags: ["NextJS", "Typescript", "2025", "Stripe"],
		link: "#",
		image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
];

export default function Projects() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTech, setSelectedTech] = useState<string[]>([]);
	const [selectedYears, setSelectedYears] = useState<string[]>([]);
	const [showTechDropdown, setShowTechDropdown] = useState(false);
	const [showYearDropdown, setShowYearDropdown] = useState(false);

	// Extract unique technologies and years from project tags
	const allTechnologies = Array.from(
		new Set(
			projects.flatMap((project) =>
				project.tags.filter((tag) => !tag.match(/^\d{4}$/))
			)
		)
	);

	const allYears = Array.from(
		new Set(
			projects.flatMap((project) =>
				project.tags.filter((tag) => tag.match(/^\d{4}$/))
			)
		)
	);

	// Filter projects based on search term and selected filters
	const filteredProjects = projects.filter((project) => {
		const matchesSearch =
			searchTerm === "" ||
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

		const matchesTech =
			selectedTech.length === 0 ||
			selectedTech.some((tech) => project.tags.includes(tech));

		const matchesYear =
			selectedYears.length === 0 ||
			selectedYears.some((year) => project.tags.includes(year));

		return matchesSearch && matchesTech && matchesYear;
	});

	const toggleTech = (tech: string) => {
		setSelectedTech((prev) =>
			prev.includes(tech)
				? prev.filter((t) => t !== tech)
				: [...prev, tech]
		);
	};

	const toggleYear = (year: string) => {
		setSelectedYears((prev) =>
			prev.includes(year)
				? prev.filter((y) => y !== year)
				: [...prev, year]
		);
	};

	const clearAllFilters = () => {
		setSearchTerm("");
		setSelectedTech([]);
		setSelectedYears([]);
	};

	const hasActiveFilters = searchTerm || selectedTech.length > 0 || selectedYears.length > 0;

	return (
		<div className="mt-12">
			<h2 className="text-lg font-semibold mb-6">RECENT PROJECTS</h2>

			{/* Search and filter section - all in one line */}
			<div className="flex items-center gap-3 mb-6">
				{/* Search input */}
				<div className="relative flex-1">
					<input
						type="text"
						placeholder="Search projects..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full bg-transparent border border-white rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
					/>
				</div>

				{/* Technology filter */}
				<div className="relative">
					<button
						onClick={() => {
							setShowTechDropdown(!showTechDropdown);
							setShowYearDropdown(false);
						}}
						className="flex items-center gap-2 px-4 py-2.5 border border-white rounded-lg text-sm text-white hover:border-white/80 transition-colors min-w-[100px] justify-between"
					>
						<span>Technology</span>
						<ChevronDown className={`w-4 h-4 transition-transform ${showTechDropdown ? 'rotate-180' : ''}`} />
					</button>
					
					{showTechDropdown && (
						<div className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg py-2 z-20">
							{allTechnologies.map((tech) => (
								<button
									key={tech}
									onClick={() => toggleTech(tech)}
									className={`w-full text-left px-4 py-2 text-sm transition-colors ${
										selectedTech.includes(tech)
											? "bg-white/10 text-white"
											: "text-white/70 hover:bg-white/5 hover:text-white"
									}`}
								>
									{tech}
								</button>
							))}
						</div>
					)}
				</div>

				{/* Year filter */}
				<div className="relative">
					<button
						onClick={() => {
							setShowYearDropdown(!showYearDropdown);
							setShowTechDropdown(false);
						}}
						className="flex items-center gap-2 px-4 py-2.5 border border-white rounded-lg text-sm text-white hover:border-white/80 transition-colors min-w-[100px] justify-between"
					>
						<span>Year</span>
						<ChevronDown className={`w-4 h-4 transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} />
					</button>
					
					{showYearDropdown && (
						<div className="absolute top-full left-0 mt-1 w-32 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg py-2 z-20">
							{allYears.map((year) => (
								<button
									key={year}
									onClick={() => toggleYear(year)}
									className={`w-full text-left px-4 py-2 text-sm transition-colors ${
										selectedYears.includes(year)
											? "bg-white/10 text-white"
											: "text-white/70 hover:bg-white/5 hover:text-white"
									}`}
								>
									{year}
								</button>
							))}
						</div>
					)}
				</div>

				{/* Clear all button */}
				{hasActiveFilters && (
					<button
						onClick={clearAllFilters}
						className="flex items-center justify-center w-10 h-10 border border-white rounded-lg text-white hover:border-white/80 hover:bg-white/5 transition-colors"
						title="Clear all filters"
					>
						<X className="w-4 h-4" />
					</button>
				)}
			</div>

			{/* Active filters display */}
			{(selectedTech.length > 0 || selectedYears.length > 0) && (
				<div className="flex flex-wrap gap-2 mb-4">
					{selectedTech.map((tech) => (
						<div
							key={tech}
							className="flex items-center gap-1 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white"
						>
							<span>{tech}</span>
							<button
								onClick={() => toggleTech(tech)}
								className="hover:text-white/70"
							>
								<X className="w-3 h-3" />
							</button>
						</div>
					))}
					{selectedYears.map((year) => (
						<div
							key={year}
							className="flex items-center gap-1 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white"
						>
							<span>{year}</span>
							<button
								onClick={() => toggleYear(year)}
								className="hover:text-white/70"
							>
								<X className="w-3 h-3" />
							</button>
						</div>
					))}
				</div>
			)}

			{/* Projects display */}
			<div className="flex gap-4 overflow-x-auto pb-2">
				{filteredProjects.length > 0 ? (
					filteredProjects.map((project, idx) => (
						<a
							key={idx}
							href={project.link}
							className="bg-neutral-900/80 rounded-xl flex flex-col min-w-[260px] max-w-[260px] flex-shrink-0 hover:scale-105 transition-transform shadow overflow-hidden"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-32 object-cover"
							/>
							<div className="px-4 pt-4 pb-0">
								<h3 className="font-bold text-lg">{project.title}</h3>
								<p className="text-xs text-white">{project.description}</p>
								<div className="flex gap-2 flex-wrap">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-white text-xs">{tag}</span>
									))}
								</div>
							</div>
						</a>
					))
				) : (
					<div className="w-full text-center py-8 text-white/50">
						No projects match your current filters
					</div>
				)}
			</div>

			{/* Click outside to close dropdowns */}
			{(showTechDropdown || showYearDropdown) && (
				<div
					className="fixed inset-0 z-10"
					onClick={() => {
						setShowTechDropdown(false);
						setShowYearDropdown(false);
					}}
				/>
			)}
		</div>
	);
}
