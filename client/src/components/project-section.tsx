import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Github, ExternalLink, Calendar, Cpu, Zap, Settings, Microchip, Search } from "lucide-react";
import { useState } from "react";
import type { Project } from "@shared/schema";

interface ProjectSectionProps {
  searchQuery: string;
}

export default function ProjectSection({ searchQuery }: ProjectSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const params = new URLSearchParams();
  if (selectedCategory !== "all") params.append("category", selectedCategory);
  if (searchQuery.trim()) params.append("search", searchQuery.trim());
  const baseEnv = (import.meta.env.VITE_API_BASE as string | undefined)?.trim();
  const isLocalhost = typeof window !== "undefined" && /^(https?:\/\/)(localhost|127\.0\.0\.1)/.test(window.location.origin);
  const base = !baseEnv || isLocalhost ? "" : baseEnv;
  const url = `${base}/api/projects${params.toString() ? `?${params.toString()}` : ""}`;

  const { data: projects = [], isLoading } = useQuery({
    queryKey: [url],
  }) as { data: Project[]; isLoading: boolean };

  const categories = [
    { id: "all", label: "All Projects", icon: Search },
    { id: "vlsi", label: "VLSI Design", icon: Cpu },
    { id: "power_systems", label: "Power Systems", icon: Zap },
    { id: "control_systems", label: "Control Systems", icon: Settings },
    { id: "embedded", label: "Embedded Systems", icon: Microchip },
    { id: "research", label: "Research", icon: Search },
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Search;
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, projects.length));
  };

  if (isLoading) {
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-text">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative engineering solutions spanning VLSI design, power systems, control systems, and embedded applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="modern-card p-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-56 border-0 bg-transparent focus:ring-2 focus:ring-blue-500/20">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="modern-card border-0">
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id} className="focus:bg-blue-50">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Projects Grid */}
        {visibleProjects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Projects Found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery.trim() 
                ? `No projects match your search for "${searchQuery}".`
                : "No projects found for the selected category."
              }
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {visibleProjects.map((project, index) => {
                const IconComponent = getCategoryIcon(project.category);
                return (
                  <div 
                    key={project.id} 
                    className="modern-card group hover:scale-105 overflow-hidden"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Project Image */}
                    {project.imageUrl ? (
                      <div className="relative h-52 overflow-hidden bg-gray-100">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50">
                                  <div class="text-center">
                                    <div class="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg pulse-glow">
                                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                      </svg>
                                    </div>
                                    <p class="text-gray-600 text-sm font-medium">${project.category.replace('_', ' ').toUpperCase()}</p>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ) : (
                      <div className="relative h-52 bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                        <div className="relative z-10 h-full flex items-center justify-center">
                          <div className="floating-element">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl pulse-glow">
                              <IconComponent className="h-10 w-10 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <Badge variant="outline" className="text-xs">
                          {project.category.replace('_', ' ').toUpperCase()}
                        </Badge>
                        {project.year && (
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.year}
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-dark-text mb-3 line-clamp-2 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" className="flex-1">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button size="sm" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        )}
                        {!project.githubUrl && !project.demoUrl && (
                          <Badge variant="outline" className="text-xs text-gray-500">
                            {project.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {hasMore && (
              <div className="text-center">
                <Button 
                  onClick={loadMore}
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  Load More Projects
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}