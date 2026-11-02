import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import experiences from "@/data/experiences.json";
import type { Experience } from "@shared/schema";
import { fadeInUp } from "@/lib/animations";

export default function EducationSection() {
  const education = (experiences as Experience[]).filter((item) => item.type === "education");

  return (
    <section id="education" className="relative py-24 bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Engineering foundation in electrical, electronics, and semiconductor design.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/30 shadow-sm dark:shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 group transition-all"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base mb-3">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>{item.company}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-light">
                  {item.description.replace(/\.$/, "")}
                </p>
              </div>

              <div className="sm:text-right flex-shrink-0">
                <div className="inline-flex items-center text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-mono bg-white dark:bg-slate-800/80 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <span>{item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
