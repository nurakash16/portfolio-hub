import { motion } from "framer-motion";
import achievementsData from "@/data/achievements.json";
import { Trophy, Award, Star, Calendar } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

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
      case "competition": return "bg-amber-50 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/30";
      case "exhibition": return "bg-blue-50 dark:bg-blue-500/15 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-500/30";
      case "recognition": return "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30";
      default: return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  return (
    <section id="achievements" className="relative py-24 bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Honors & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Recognitions in technical hackathons, project exhibitions, and engineering design challenges.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => {
            const IconComponent = getCategoryIcon(achievement.category);
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 hover:border-amber-500/30 shadow-sm dark:shadow-xl transition-all flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${getCategoryColor(achievement.category)}`}
                    >
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                    {achievement.year && (
                      <span className="flex items-center text-slate-500 dark:text-slate-400 text-xs font-mono">
                        <Calendar className="h-3.5 w-3.5 mr-1 text-slate-400 dark:text-slate-500" />
                        {achievement.year}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
