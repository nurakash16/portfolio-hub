"use client";

import { useState } from "react";
import projects from "@/data/projects.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Search, Code2, Zap, Cpu, Layers } from "lucide-react";

type Category = "all" | "vlsi" | "power_systems" | "control_systems" | "embedded" | "research";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "vlsi", label: "VLSI Design" },
  { value: "power_systems", label: "Power Systems" },
  { value: "control_systems", label: "Control Systems" },
  { value: "embedded", label: "Embedded" },
  { value: "research", label: "Research" }
];

export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      !searchQuery || project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my technical portfolio spanning VLSI design, power systems, and embedded solutions.
          </p>
        </div>

        {/* Controls Container */}
        <div className="max-w-5xl mx-auto mb-12 space-y-8">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.value
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-xl text-gray-500">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="modern-card group flex flex-col h-full overflow-hidden hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header / Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden group-hover:from-blue-50 group-hover:to-purple-50 transition-colors duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.category === 'vlsi' ? <Cpu className="w-16 h-16 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" /> :
                      project.category === 'power_systems' ? <Zap className="w-16 h-16 text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" /> :
                        project.category === 'embedded' ? <Code2 className="w-16 h-16 text-gray-300 group-hover:text-green-400 transition-colors duration-300" /> :
                          <Layers className="w-16 h-16 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
                    }
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform duration-200"
                        title="View Code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform duration-200"
                        title="View Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {project.category.replace('_', ' ')}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-400 text-xs rounded-md font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
