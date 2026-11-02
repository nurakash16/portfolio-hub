import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "@/data/projects.json";
import { ExternalLink, Github, Lock, Code2, Cpu, FolderGit2 } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

type CategoryFilter = "all" | "software" | "engineering";

const filters: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "software", label: "Software & Web" },
  { value: "engineering", label: "VLSI & Hardware" }
];

export default function ProjectSection() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "software") return project.category === "software";
    if (selectedFilter === "engineering")
      return project.category === "engineering" || project.category === "vlsi" || project.category === "embedded";
    return true;
  });

  return (
    <section id="projects" className="relative py-24 bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Production web platforms, interactive dashboards, and hardware engineering projects.
          </p>
        </motion.div>

        {/* Filter Buttons with Animated Indicator */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((tab) => {
            const isActive = selectedFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 min-h-[44px] flex items-center justify-center ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md shadow-blue-500/25"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const hasDemo = Boolean(project.demoUrl && project.demoUrl.trim().length > 0);
              const hasGithub = Boolean(
                project.githubUrl && project.githubUrl.trim().length > 0 && project.githubUrl !== "private"
              );
              const isPrivateCode = project.githubUrl === "private";
              const isSoftware = project.category === "software";

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Visual Header */}
                  <div
                    className={`p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 ${
                      isSoftware
                        ? "bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 dark:from-blue-900/20 dark:via-slate-900/50 dark:to-indigo-900/20"
                        : "bg-gradient-to-br from-purple-50/70 via-white to-slate-50 dark:from-purple-900/20 dark:via-slate-900/50 dark:to-slate-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-300 shadow-2xs">
                        {isSoftware ? (
                          <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Cpu className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        )}
                        {isSoftware ? "Software" : "Hardware / VLSI"}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded border border-slate-200/60 dark:border-slate-700/60">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs rounded-md font-mono border border-slate-200 dark:border-slate-700/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Always-visible Action Links */}
                      {(hasDemo || hasGithub || isPrivateCode) && (
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
                          {hasDemo && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow-md transition-all min-h-[38px]"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Live Demo</span>
                            </motion.a>
                          )}

                          {hasGithub && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all min-h-[38px]"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>Code</span>
                            </motion.a>
                          )}

                          {isPrivateCode && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/60 rounded-md border border-slate-200 dark:border-slate-700/60">
                              <Lock className="w-3.5 h-3.5 text-slate-400" />
                              <span>Enterprise / NDA</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
