import achievementsData from "@/data/achievements.json";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Calendar } from "lucide-react";

export default function AchievementSection() {
  const achievements = achievementsData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "competition": return Trophy;
      case "exhibition": return Award;
      case "recognition": return Star;
      default: return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "competition": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "exhibition": return "bg-blue-100 text-blue-800 border-blue-200";
      case "recognition": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark-text">
          Achievements
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Recognition and accomplishments in competitions, exhibitions, and academic pursuits.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = getCategoryIcon(achievement.category);
            return (
              <Card key={achievement.id} className="resource-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <Badge
                          variant="outline"
                          className={`text-xs ${getCategoryColor(achievement.category)}`}
                        >
                          {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                        </Badge>
                        {achievement.year && (
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {achievement.year}
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-dark-text mb-2 leading-tight">
                        {achievement.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
