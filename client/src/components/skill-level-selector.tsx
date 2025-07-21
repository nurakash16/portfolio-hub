import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Wrench, Settings } from "lucide-react";

interface SkillLevelSelectorProps {
  selectedSkillLevel: string;
  setSelectedSkillLevel: (skillLevel: string) => void;
}

export default function SkillLevelSelector({ selectedSkillLevel, setSelectedSkillLevel }: SkillLevelSelectorProps) {
  const skillLevels = [
    {
      id: "beginner",
      title: "Beginner",
      icon: Lightbulb,
      description: "New to homeownership? Start with essential basics like maintenance schedules, safety checks, and simple repairs.",
      count: "125+ resources",
      colorClass: "skill-beginner"
    },
    {
      id: "intermediate", 
      title: "Intermediate",
      icon: Wrench,
      description: "Ready for more complex projects? Learn plumbing basics, electrical safety, and home improvement techniques.",
      count: "89+ resources",
      colorClass: "skill-intermediate"
    },
    {
      id: "advanced",
      title: "Advanced", 
      icon: Settings,
      description: "Tackle major renovations, complex repairs, and professional-level projects with expert guidance and detailed tutorials.",
      count: "67+ resources",
      colorClass: "skill-advanced"
    }
  ];

  const handleSkillLevelClick = (skillLevel: string) => {
    setSelectedSkillLevel(skillLevel);
    // Scroll to resources section
    const resourcesSection = document.getElementById("resources");
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skill-levels" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark-text">
          Choose Your Skill Level
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Start your journey at the right level. Our resources are organized to match your experience and help you grow your skills progressively.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillLevels.map((level) => {
            const IconComponent = level.icon;
            return (
              <Card 
                key={level.id}
                className={`resource-card cursor-pointer p-6 text-center transition-all duration-300 ${
                  selectedSkillLevel === level.id ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
                onClick={() => handleSkillLevelClick(level.id)}
              >
                <CardContent className="pt-0">
                  <IconComponent className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <Badge className={`skill-badge ${level.colorClass} mb-4`}>
                    {level.title}
                  </Badge>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {level.description}
                  </p>
                  <small className="text-gray-500 font-medium">
                    {level.count}
                  </small>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
