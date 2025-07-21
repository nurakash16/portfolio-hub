import { useQuery } from "@tanstack/react-query";
import ResourceCard from "./resource-card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  year: string | null;
  imageUrl: string | null;
  githubUrl: string | null;
  demoUrl: string | null;
  updatedAt: Date | string;
  skillLevel: "beginner" | "intermediate" | "advanced";
  readingTime: number;
};


interface ResourceGridProps {
  selectedCategory: string;
  selectedSkillLevel: string;
  searchQuery: string;
}

export default function ResourceGrid({ selectedCategory, selectedSkillLevel, searchQuery }: ResourceGridProps) {
  const [sortBy, setSortBy] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(6);

  const { data: resources = [], isLoading, error } = useQuery({
    queryKey: ["/api/resources", { category: selectedCategory, skillLevel: selectedSkillLevel, search: searchQuery }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedCategory !== "all") params.append("category", selectedCategory);
      if (selectedSkillLevel !== "all") params.append("skillLevel", selectedSkillLevel);
      if (searchQuery.trim()) params.append("search", searchQuery.trim());

      const response = await fetch(`${import.meta.env.VITE_API_BASE}/api/projects`);
      if (!response.ok) throw new Error("Failed to fetch resources");
      return response.json();
    },
  }) as { data: Project[]; isLoading: boolean; error: Error | null };

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getCurrentBreadcrumb = () => {
    if (searchQuery.trim()) return `Search: "${searchQuery}"`;
    if (selectedCategory !== "all") return formatCategory(selectedCategory);
    if (selectedSkillLevel !== "all") return formatCategory(selectedSkillLevel);
    return "All Categories";
  };

  const getSortedResources = () => {
    if (!resources) return [];
    
    let sorted = [...resources];
    switch (sortBy) {
      case "popular":
        // For now, just shuffle since we don't have popularity data
        sorted = sorted.sort(() => Math.random() - 0.5);
        break;
      case "difficulty":
        sorted = sorted.sort((a, b) => {
          const order = { beginner: 1, intermediate: 2, advanced: 3 };
          return order[a.skillLevel as keyof typeof order] - order[b.skillLevel as keyof typeof order];
        });
        break;
      case "duration":
        sorted = sorted.sort((a, b) => a.readingTime - b.readingTime);
        break;
      case "newest":
      default:
        sorted = sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        break;
    }
    
    return sorted;
  };

  const sortedResources = getSortedResources();
  const visibleResources = sortedResources.slice(0, visibleCount);
  const hasMore = visibleCount < sortedResources.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, sortedResources.length));
  };

  if (isLoading) {
    return (
      <section id="resources" className="py-12">
        <div className="container mx-auto px-4">
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

  if (error) {
    return (
      <section id="resources" className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to Load Resources</h2>
            <p className="text-gray-600">Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resources" className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Resources</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{getCurrentBreadcrumb()}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header with Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-dark-text mb-2">
              {searchQuery.trim() ? `Search Results` : `Featured Resources`}
            </h2>
            <p className="text-gray-600">
              Showing {visibleResources.length} of {sortedResources.length} resources
            </p>
          </div>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="difficulty">By Difficulty</SelectItem>
              <SelectItem value="duration">By Duration</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Resource Grid */}
        {visibleResources.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Resources Found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery.trim() 
                ? `No resources match your search for "${searchQuery}".`
                : "No resources found for the selected filters."
              }
            </p>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {visibleResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center">
                <Button 
                  onClick={loadMore}
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  <ArrowDown className="h-5 w-5 mr-2" />
                  Load More Resources
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
