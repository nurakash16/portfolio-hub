import { useState } from "react";
import { Building, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";
import experiences from "@/data/experiences.json";
import type { Experience } from "@shared/schema";

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
    <section id="experience" className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Software engineering at Sincos Group and industrial training at Nokshasemi
          </p>
        </div>

        <div className="space-y-10">
          {data.map((experience) => {
            const isExpanded = expandedId === experience.id;
            const defaultBullets = experience.defaultHighlights || experience.highlights?.slice(0, 6) || [];
            const moreBullets = experience.moreHighlights || (experience.highlights && experience.highlights.length > 6 ? experience.highlights.slice(6) : []);
            const hasMore = moreBullets.length > 0;

            return (
              <div
                key={experience.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {experience.title}
                      </h3>
                      {experience.current && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-slate-700 font-semibold text-base">
                      <Building className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                      <span>{experience.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-slate-600 text-sm font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start">
                    <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                  {experience.description}
                </p>

                {/* Primary Bullets (Always Visible) */}
                <div className="mb-5">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Core Responsibilities & Achievements
                  </p>
                  <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base">
                    {defaultBullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable Extra Bullets */}
                {hasMore && (
                  <div className="mb-6">
                    <button
                      type="button"
                      onClick={() => toggleExpanded(experience.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`exp-details-${experience.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:underline py-1"
                    >
                      <span>{isExpanded ? "Show fewer details" : `Expand details (${moreBullets.length} more)`}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      id={`exp-details-${experience.id}`}
                      hidden={!isExpanded}
                      className="mt-4 pt-4 border-t border-slate-100"
                    >
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Additional Project Contributions
                      </p>
                      <ul className="space-y-2.5 text-slate-700 text-sm sm:text-base">
                        {moreBullets.map((bullet, mIdx) => (
                          <li key={mIdx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Showcase Items */}
                {experience.showcaseItems && experience.showcaseItems.length > 0 && (
                  <div className="mb-6 pt-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      {experience.showcaseLabel || "Key Systems"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.showcaseItems.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-3 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-medium border border-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
