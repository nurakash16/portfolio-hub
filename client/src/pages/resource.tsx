import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowLeft, Clock, Bookmark, CheckCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import type { Resource } from "@shared/schema";

export default function ResourcePage() {
  const [, params] = useRoute("/resource/:id");
  const resourceId = params?.id;
  const [searchQuery, setSearchQuery] = useState("");

  const { data: resource, isLoading, error } = useQuery({
    queryKey: ["/api/resources", resourceId],
    enabled: !!resourceId,
  }) as { data: Resource | undefined; isLoading: boolean; error: Error | null };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-light-bg">
        <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="min-h-screen bg-light-bg">
        <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
              <p className="text-gray-600 mb-4">The resource you're looking for doesn't exist or has been removed.</p>
              <Link href="/">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg">
      <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="container mx-auto px-4 py-8">
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
              <BreadcrumbPage>{formatCategory(resource.category)}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Button>
        </Link>

        {/* Resource Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className={`skill-badge ${getSkillLevelClass(resource.skillLevel)}`}>
              {resource.skillLevel}
            </Badge>
            <span className="category-tag">{formatCategory(resource.category)}</span>
            <span className="reading-time flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {resource.readingTime} min read
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            {resource.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-6 max-w-3xl">
            {resource.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button>
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark as Complete
            </Button>
            <Button variant="outline">
              <Bookmark className="h-4 w-4 mr-2" />
              Save for Later
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="progress-indicator mb-8">
          <div className="progress-bar" style={{ width: "0%" }}></div>
        </div>

        {/* Resource Image */}
        {resource.imageUrl && (
          <div className="mb-8">
            <img 
              src={resource.imageUrl} 
              alt={resource.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Resource Content */}
        <div className="max-w-4xl">
          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {resource.content}
                </div>
              </div>

              {/* Pro Tip */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h6 className="font-semibold text-primary mb-2">Pro Tip</h6>
                    <p className="text-gray-700 mb-0">
                      Create a digital or physical binder to track completed maintenance tasks and store important warranty information and service records.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Updated Date */}
        <div className="mt-6 text-sm text-gray-500">
          Last updated: {new Date(resource.updatedAt).toLocaleDateString()}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
