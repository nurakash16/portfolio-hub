import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Calendar, ChevronDown, CheckCircle2, Briefcase, Sparkles } from "lucide-react";
import experiences from "@/data/experiences.json";
import type { Experience } from "@shared/schema";
import { fadeInUp } from "@/lib/animations";

type ExperienceDetails = Experience & {
  defaultHighlights?: string[];
  moreHighlights?: string[];
  highlights?: string[];
  showcaseLabel?: string;
  showcaseItems?: string[];
};

export default function ExperienceSection() {
  const data = (experiences as ExperienceDetails[]).filter((item) => item.type === "work");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative py-24 bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Engineering real-time industrial monitoring platforms, data workflows, and semiconductor systems.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 md:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500/30 before:to-transparent">
          {data.map((experience, idx) => {
            const isExpanded = expandedId === experience.id;
            const defaultBullets = experience.defaultHighlights || experience.highlights?.slice(0, 6) || [];
            const moreBullets = experience.moreHighlights || (experience.highlights && experience.highlights.length > 6 ? experience.highlights.slice(6) : []);
            const hasMore = moreBullets.length > 0;

            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline Node */}
                <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[46px] top-6 w-5 h-5 rounded-full bg-white dark:bg-[#0B0F19] border-2 border-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-125 transition-transform duration-300">
                  <div className={`w-2 h-2 rounded-full ${experience.current ? "bg-emerald-500 animate-ping" : "bg-blue-500"}`} />
                </div>

                {/* Experience Card */}
                <div className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                          {experience.title}
                        </h3>
                        {experience.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-slate-700 dark:text-slate-300 font-medium text-base">
                        <Building className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>{experience.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-mono bg-slate-100/80 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 self-start">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {experience.description}
                  </p>

                  {/* Default Highlights */}
                  <div className="mb-5">
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Key Responsibilities & Deliverables</span>
                    </p>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      {defaultBullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Extra Bullets with AnimatePresence */}
                  {hasMore && (
                    <div className="mb-6">
                      <button
                        type="button"
                        onClick={() => toggleExpanded(experience.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`exp-details-${experience.id}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors py-1.5 px-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 border border-blue-200 dark:border-blue-500/20"
                      >
                        <span>{isExpanded ? "Show fewer details" : `View more contributions (${moreBullets.length} more)`}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            id={`exp-details-${experience.id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden mt-4 pt-4 border-t border-slate-100 dark:border-slate-800"
                          >
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                              Additional Project Details
                            </p>
                            <ul className="space-y-2.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                              {moreBullets.map((bullet, mIdx) => (
                                <li key={mIdx} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                  <span className="leading-relaxed">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Showcase Items */}
                  {experience.showcaseItems && experience.showcaseItems.length > 0 && (
                    <div className="mb-6 pt-2">
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                        {experience.showcaseLabel || "Key Systems"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.showcaseItems.map((item, itemIdx) => (
                          <span
                            key={itemIdx}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-blue-500/10 text-slate-700 dark:text-blue-300 rounded-md text-xs font-mono font-medium border border-slate-200 dark:border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
