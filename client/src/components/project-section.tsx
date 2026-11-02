import { useState } from "react";
import projects from "@/data/projects.json";
import { ExternalLink, Github, Lock, Code2, Cpu } from "lucide-react";

type CategoryFilter = "all" | "software" | "engineering";

const filters: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "software", label: "Software" },
  { value: "engineering", label: "Engineering Background" }
];

export default function ProjectSection() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "software") return project.category === "software";
    if (selectedFilter === "engineering") return project.category === "engineering" || project.category === "vlsi" || project.category === "embedded";
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Software projects and engineering work, from full-stack apps to VLSI and embedded systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedFilter(tab.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedFilter === tab.value
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const hasDemo = Boolean(project.demoUrl && project.demoUrl.trim().length > 0);
            const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0 && project.githubUrl !== "private");
            const isPrivateCode = project.githubUrl === "private";
            const isSoftware = project.category === "software";

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Preview Header */}
                <div className={`p-5 border-b border-slate-100 ${isSoftware ? "bg-gradient-to-br from-blue-50/70 to-indigo-50/40" : "bg-gradient-to-br from-slate-100/70 to-slate-50"}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-white border border-slate-200 text-slate-700">
                      {isSoftware ? <Code2 className="w-3.5 h-3.5 text-blue-600" /> : <Cpu className="w-3.5 h-3.5 text-indigo-600" />}
                      {isSoftware ? "Software" : "Engineering"}
                    </span>
                    <span className="text-xs font-medium text-slate-600">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded font-medium border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Always-visible Action Links */}
                    {(hasDemo || hasGithub || isPrivateCode) && (
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                        {hasDemo && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}

                        {hasGithub && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}

                        {isPrivateCode && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md border border-slate-200">
                            <Lock className="w-3 h-3 text-slate-500" />
                            <span>Client / Private Code</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
