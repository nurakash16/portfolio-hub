import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Link } from "wouter";
import type { Resource } from "@shared/schema";

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const getSkillLevelClass = (skillLevel: string) => {
    switch (skillLevel) {
      case "beginner": return "skill-beginner";
      case "intermediate": return "skill-intermediate"; 
      case "advanced": return "skill-advanced";
      default: return "skill-beginner";
    }
  };

  const formatCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 7) return `${days} days ago`;
    if (days < 14) return "1 week ago";
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  return (
    <Link href={`/resource/${resource.id}`}>
      <Card className="resource-card cursor-pointer">
        {/* Resource Image */}
        {resource.imageUrl && (
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <img 
              src={resource.imageUrl} 
              alt={resource.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        
        <CardContent className="p-6">
          {/* Resource Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className={`skill-badge ${getSkillLevelClass(resource.skillLevel)}`}>
              {resource.skillLevel}
            </Badge>
            <span className="category-tag">
              {formatCategory(resource.category)}
            </span>
            <span className="reading-time flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {resource.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-dark-text mb-3 line-clamp-2 leading-tight">
            {resource.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {resource.description}
          </p>

          {/* Progress Indicator */}
          <div className="progress-indicator mb-3">
            <div className="progress-bar" style={{ width: "0%" }}></div>
          </div>

          {/* Updated Date */}
          <small className="text-gray-500">
            Updated {getTimeAgo(resource.updatedAt)}
          </small>
        </CardContent>
      </Card>
    </Link>
  );
}
