import projectsData from "@/data/projects.json";
import ResourceCard from "./resource-card";
import { useState, useMemo } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "wouter";

type SkillLevel = "beginner" | "intermediate" | "advanced";
type SortBy = "newest" | "popular" | "difficulty" | "duration";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  year: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
  status: string;
  skillLevel: SkillLevel;
  readingTime: number;
  updatedAt: string;
}

interface ResourceGridProps {
  selectedCategory: string;
  selectedSkillLevel: SkillLevel | "all";
  searchQuery: string;
}

export default function ResourceGrid({ selectedCategory, selectedSkillLevel, searchQuery }: ResourceGridProps) {
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesSkill = selectedSkillLevel === "all" || project.skillLevel === selectedSkillLevel;
      const matchesSearch = !searchQuery || project.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSkill && matchesSearch;
    });
  }, [selectedCategory, selectedSkillLevel, searchQuery]);

  // Sorting
  const sortedProjects = useMemo(() => {
    const sorted = [...filteredProjects];
    const order: Record<SkillLevel, number> = { beginner: 1, intermediate: 2, advanced: 3 };

    switch (sortBy) {
      case "popular":
        return sorted.sort(() => Math.random() - 0.5);
      case "difficulty":
        return sorted.sort(
          (a, b) => order[a.skillLevel as SkillLevel] - order[b.skillLevel as SkillLevel]
        );
      case "duration":
        return sorted.sort((a, b) => a.readingTime - b.readingTime);
      case "newest":
      default:
        return sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    }
  }, [filteredProjects, sortBy]);

  const visibleProjects = sortedProjects.slice(0, visibleCount);
  const hasMore = visibleCount < sortedProjects.length;
  const loadMore = () => setVisibleCount(prev => Math.min(prev + 6, sortedProjects.length));

  return (
    <section id="resources" className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Resources</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>{searchQuery || selectedCategory || selectedSkillLevel || "All Categories"}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Heading + Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-dark-text mb-2">{searchQuery ? `Search Results` : `Featured Resources`}</h2>
            <p className="text-gray-600">Showing {visibleProjects.length} of {sortedProjects.length} resources</p>
          </div>

          <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortBy)}>
            <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Sort by" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="difficulty">By Difficulty</SelectItem>
              <SelectItem value="duration">By Duration</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Resources Grid */}
        {visibleProjects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Resources Found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? `No resources match "${searchQuery}".` : "No resources found."}
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {visibleProjects.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            {hasMore && (
              <div className="text-center">
                <Button onClick={loadMore} size="lg" variant="outline" className="font-semibold">
                  <ArrowDown className="h-5 w-5 mr-2" /> Load More Resources
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
