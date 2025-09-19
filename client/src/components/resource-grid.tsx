import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import type { Project } from "@shared/schema";

interface ResourceGridProps {
  selectedCategory: string;
  selectedSkillLevel?: string;
  searchQuery: string;
}

export default function ResourceGrid({
  selectedCategory,
  selectedSkillLevel = "all",
  searchQuery,
}: ResourceGridProps) {
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ["projects", selectedCategory, selectedSkillLevel, searchQuery],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedCategory !== "all") params.append("category", selectedCategory);
      if (selectedSkillLevel !== "all") params.append("skillLevel", selectedSkillLevel);
      if (searchQuery.trim()) params.append("search", searchQuery.trim());

      const response = await apiRequest(
        "GET",
        `projects?${params.toString()}`
      );
      return response.json() as Promise<Project[]>;
    },
  });

  // Render UI or return null if this grid is used only for data fetching elsewhere
  return null;
}
