import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { highlightedProjects } from "../data/projectsData";

interface ProjectsProps {
	onViewAllProjects: () => void;
}

export default function Projects({ onViewAllProjects }: ProjectsProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTech, setSelectedTech] = useState<string[]>([]);
	const [selectedYears, setSelectedYears] = useState<string[]>([]);
	const [showTechDropdown, setShowTechDropdown] = useState(false);
	const [showYearDropdown, setShowYearDropdown] = useState(false);

	// Extract unique technologies and years from highlighted projects
	const allTechnologies = Array.from(
		new Set(
			highlightedProjects.flatMap((project) =>
				project.tags.filter((tag) => !tag.match(/^\d{4}$/))
			)
		)
	).sort();

	const allYears = Array.from(
		new Set(
			highlightedProjects.flatMap((project) =>
				project.tags.filter((tag) => tag.match(/^\d{4}$/))
			)
		)
	).sort((a, b) => b.localeCompare(a)); // Descending years

	// Filter highlighted projects based on search term and selected filters
	const filteredProjects = highlightedProjects.filter((project) => {
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
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-lg font-semibold uppercase tracking-wider text-white/90">Featured Projects</h2>
				<span className="text-xs text-white/50">{highlightedProjects.length} Highlighted</span>
			</div>

			{/* Search and filter section */}
			<div className="flex items-center gap-3 mb-6">
				{/* Search input */}
				<div className="relative flex-1">
					<input
						type="text"
						placeholder="Search projects..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
					/>
				</div>

				{/* Technology filter */}
				<div className="relative">
					<button
						onClick={() => {
							setShowTechDropdown(!showTechDropdown);
							setShowYearDropdown(false);
						}}
						className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg text-sm text-white/80 hover:text-white hover:border-white/20 bg-neutral-900/50 transition-colors min-w-[120px] justify-between cursor-pointer"
					>
						<span>Tech</span>
						<ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${showTechDropdown ? 'rotate-180' : ''}`} />
					</button>
					
					{showTechDropdown && (
						<div className="absolute top-full right-0 md:left-0 mt-1 w-48 bg-neutral-950 border border-white/10 rounded-lg py-2 z-20 shadow-xl max-h-60 overflow-y-auto">
							{allTechnologies.map((tech) => (
								<button
									key={tech}
									onClick={() => toggleTech(tech)}
									className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${
										selectedTech.includes(tech)
											? "bg-white/10 text-white font-medium"
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
						className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg text-sm text-white/80 hover:text-white hover:border-white/20 bg-neutral-900/50 transition-colors min-w-[100px] justify-between cursor-pointer"
					>
						<span>Year</span>
						<ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} />
					</button>
					
					{showYearDropdown && (
						<div className="absolute top-full right-0 mt-1 w-32 bg-neutral-950 border border-white/10 rounded-lg py-2 z-20 shadow-xl">
							{allYears.map((year) => (
								<button
									key={year}
									onClick={() => toggleYear(year)}
									className={`w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer ${
										selectedYears.includes(year)
											? "bg-white/10 text-white font-medium"
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
						className="flex items-center justify-center w-10 h-10 border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-white/20 bg-neutral-900/50 transition-colors cursor-pointer"
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
							className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
						>
							<span>{tech}</span>
							<button
								onClick={() => toggleTech(tech)}
								className="hover:text-white cursor-pointer"
							>
								<X className="w-3 h-3" />
							</button>
						</div>
					))}
					{selectedYears.map((year) => (
						<div
							key={year}
							className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
						>
							<span>{year}</span>
							<button
								onClick={() => toggleYear(year)}
								className="hover:text-white cursor-pointer"
							>
								<X className="w-3 h-3" />
							</button>
						</div>
					))}
				</div>
			)}

			{/* Projects Display - Two Row Grid */}
			<div className="relative">
				<div className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto pb-4 scrollbar-hide h-[474px]">
					{filteredProjects.length > 0 ? (
						filteredProjects.map((project, idx) => (
							<a
								key={idx}
								href={project.link}
								className="bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 rounded-xl flex flex-col min-w-[270px] max-w-[270px] h-[224px] hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 shadow-lg overflow-hidden group"
								target="_blank"
								rel="noopener noreferrer"
							>
								{/* Image header */}
								<div className="relative h-24 w-full overflow-hidden flex-shrink-0">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
								</div>
								
								{/* Content section */}
								<div className="px-3.5 py-2.5 flex flex-col justify-between flex-grow">
									<div>
										<h3 className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
											{project.title}
										</h3>
										<p className="text-[11px] text-white/60 line-clamp-2 mt-0.5 leading-normal">
											{project.description || "No description provided."}
										</p>
									</div>
									<div className="flex gap-1.5 flex-wrap mt-1">
										{project.tags.map((tag, i) => (
											<span key={i} className="px-1.5 py-0.5 bg-white/5 border border-white/5 rounded text-white/70 text-[9px] font-medium">
												{tag}
											</span>
										))}
									</div>
								</div>
							</a>
						))
					) : (
						<div className="col-span-full w-full flex items-center justify-center h-48 text-white/40 text-sm">
							No projects match your current filters.
						</div>
					)}
				</div>
			</div>

			{/* Folder transition trigger link for All projects */}
			<div className="mt-6 flex justify-center">
				<button
					onClick={onViewAllProjects}
					className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900/50 hover:bg-neutral-900/80 border border-white/10 hover:border-white/20 rounded-xl text-xs font-semibold text-white/70 hover:text-white transition-all cursor-pointer shadow-md group"
				>
					<span className="text-base group-hover:animate-bounce">📁</span>
					<span>View All Projects</span>
				</button>
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
