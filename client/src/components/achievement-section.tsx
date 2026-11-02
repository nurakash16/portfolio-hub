import achievementsData from "@/data/achievements.json";
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
      case "competition": return "bg-amber-50 text-amber-800 border-amber-200";
      case "exhibition": return "bg-blue-50 text-blue-800 border-blue-200";
      case "recognition": return "bg-emerald-50 text-emerald-800 border-emerald-200";
      default: return "bg-slate-50 text-slate-800 border-slate-200";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            Honors & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Recognitions in hackathons, design competitions, and academic exhibitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = getCategoryIcon(achievement.category);
            return (
              <div
                key={achievement.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <IconComponent className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getCategoryColor(achievement.category)}`}
                    >
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                    {achievement.year && (
                      <span className="flex items-center text-slate-500 text-xs font-medium">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {achievement.year}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {achievement.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
