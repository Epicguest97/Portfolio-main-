import { useState } from "react";
import { ChevronLeft, ChevronDown, X } from "lucide-react";
import { motion } from "motion/react";
import { 
	highlightedProjects, 
	cyberProjects, 
	goodProjects, 
	dustyProjects,
	type Project 
} from "../data/projectsData";

interface AllProjectsProps {
	onBackToHome: () => void;
}

export default function AllProjects({ onBackToHome }: AllProjectsProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedTech, setSelectedTech] = useState<string[]>([]);
	const [selectedYears, setSelectedYears] = useState<string[]>([]);
	const [showTechDropdown, setShowTechDropdown] = useState(false);
	const [showYearDropdown, setShowYearDropdown] = useState(false);

	// Combine all projects to get a unified list of tags and filters
	const allProjectsCombined = [
		...highlightedProjects,
		...cyberProjects,
		...goodProjects,
		...dustyProjects
	];

	// Extract unique technologies and years from all projects
	const allTechnologies = Array.from(
		new Set(
			allProjectsCombined.flatMap((project) =>
				project.tags.filter((tag) => !tag.match(/^\d{4}$/))
			)
		)
	).sort();

	const allYears = Array.from(
		new Set(
			allProjectsCombined.flatMap((project) =>
				project.tags.filter((tag) => tag.match(/^\d{4}$/))
			)
		)
	).sort((a, b) => b.localeCompare(a));

	// Filter helper function
	const filterProjectList = (list: Project[]) => {
		return list.filter((project) => {
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
	};

	// Filtered lists for each section
	const filteredFeatured = filterProjectList(highlightedProjects);
	const filteredCyber = filterProjectList(cyberProjects);
	const filteredGood = filterProjectList(goodProjects);
	const filteredDusty = filterProjectList(dustyProjects);

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
	const hasAnyMatch = 
		filteredFeatured.length > 0 || 
		filteredCyber.length > 0 || 
		filteredGood.length > 0 || 
		filteredDusty.length > 0;

	// Render card helper to avoid duplicate code
	const renderProjectCard = (project: Project, isDusty: boolean = false) => {
		return (
			<a
				key={project.link + project.title}
				href={project.link}
				className="bg-neutral-900/40 hover:bg-neutral-900/80 border border-white/5 hover:border-white/10 rounded-xl flex flex-col h-[224px] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md overflow-hidden group"
				target="_blank"
				rel="noopener noreferrer"
			>
				{/* Image header */}
				<div className="relative h-24 w-full overflow-hidden flex-shrink-0">
					<img
						src={project.image}
						alt={project.title}
						loading="lazy"
						decoding="async"
						className={`w-full h-full object-cover transition-all duration-500 ${
							isDusty 
								? "grayscale contrast-110 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100" 
								: "group-hover:scale-105"
						}`}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
				</div>
				
				{/* Content section */}
				<div className="px-3.5 py-2.5 flex flex-col justify-between flex-grow">
					<div>
						<h3 className={`font-bold text-sm transition-colors line-clamp-1 ${
							isDusty 
								? "text-white/80 group-hover:text-amber-400/90" 
								: "text-white group-hover:text-emerald-400"
						}`}>
							{project.title}
						</h3>
						<p className="text-[11px] text-white/55 line-clamp-2 mt-0.5 leading-normal">
							{project.description || "No description provided."}
						</p>
					</div>
					<div className="flex gap-1.5 flex-wrap mt-1">
						{project.tags.map((tag, i) => (
							<span key={i} className="px-1.5 py-0.5 bg-white/5 border border-white/5 rounded text-white/60 text-[9px] font-medium">
								{tag}
							</span>
						))}
					</div>
				</div>
			</a>
		);
	};

	return (
		<motion.div 
			className="mt-4"
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -15 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			{/* Back link */}
			<button
				onClick={onBackToHome}
				className="flex items-center gap-1 text-white/50 hover:text-white transition-colors mb-6 text-sm group cursor-pointer"
			>
				<ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
				<span>Back to Home</span>
			</button>

			<div className="flex justify-between items-baseline mb-2">
				<h1 className="text-2xl font-bold tracking-tight text-white">All Projects</h1>
				<span className="text-xs text-white/40">{allProjectsCombined.length} total</span>
			</div>
			
			<p className="text-sm text-white/60 mb-8 leading-relaxed">
				An indexing index of everything I have developed. From featured production-grade software to college cybersecurity configurations and early code creations.
			</p>

			{/* Search and filters */}
			<div className="flex items-center gap-3 mb-8">
				{/* Search input */}
				<div className="relative flex-1">
					<input
						type="text"
						placeholder="Search project registry..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
					/>
				</div>

				{/* Tech filter */}
				<div className="relative">
					<button
						onClick={() => {
							setShowTechDropdown(!showTechDropdown);
							setShowYearDropdown(false);
						}}
						className="flex items-center gap-2 px-4 py-2.5 border border-white/10 rounded-lg text-sm text-white/80 hover:text-white hover:border-white/20 bg-neutral-900/50 transition-colors min-w-[110px] justify-between cursor-pointer"
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

				{/* Clear all */}
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

			{/* Active filter badges */}
			{(selectedTech.length > 0 || selectedYears.length > 0) && (
				<div className="flex flex-wrap gap-2 mb-6">
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

			{/* Render Category Sections */}
			{hasAnyMatch ? (
				<div className="space-y-12">
					
					{/* Section 1: Featured Projects */}
					{filteredFeatured.length > 0 && (
						<div>
							<div className="border-l-2 border-emerald-500 pl-3 mb-4">
								<h2 className="text-lg font-bold text-white uppercase tracking-wider">Featured Projects</h2>
								<p className="text-xs text-white/40">Highly polished applications and products</p>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{filteredFeatured.map((p) => renderProjectCard(p, false))}
							</div>
						</div>
					)}

					{/* Section 2: Cybersecurity & Systems */}
					{filteredCyber.length > 0 && (
						<div>
							<div className="border-l-2 border-cyan-500 pl-3 mb-4">
								<h2 className="text-lg font-bold text-white uppercase tracking-wider">Cybersecurity Engineering</h2>
								<p className="text-xs text-white/40">Securing environments, traffic scanners, and network utilities</p>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{filteredCyber.map((p) => renderProjectCard(p, false))}
							</div>
						</div>
					)}

					{/* Section 3: Good Projects */}
					{filteredGood.length > 0 && (
						<div>
							<div className="border-l-2 border-purple-500 pl-3 mb-4">
								<h2 className="text-lg font-bold text-white uppercase tracking-wider">Good Projects</h2>
								<p className="text-xs text-white/40">Quality utility applications and academic works</p>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{filteredGood.map((p) => renderProjectCard(p, false))}
							</div>
						</div>
					)}

					{/* Section 4: Genuinely why did I even make this */}
					{filteredDusty.length > 0 && (
						<div>
							<div className="border-l-2 border-amber-500 pl-3 mb-4">
								<h2 className="text-lg font-bold text-white uppercase tracking-wider">Genuinely why did I even make this</h2>
								<p className="text-xs text-white/40">Early attempts, scrapers, minor utilities, and funny code experiments</p>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12">
								{filteredDusty.map((p) => renderProjectCard(p, true))}
							</div>
						</div>
					)}

				</div>
			) : (
				<div className="w-full flex items-center justify-center h-48 text-white/40 text-sm">
					No projects match your current filters.
				</div>
			)}
		</motion.div>
	);
}
