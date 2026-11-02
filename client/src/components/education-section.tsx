import { GraduationCap, Calendar } from "lucide-react";
import experiences from "@/data/experiences.json";
import type { Experience } from "@shared/schema";

export default function EducationSection() {
  const education = (experiences as Experience[]).filter((item) => item.type === "education");

  return (
    <section id="education" className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Academic foundation in electrical, electronics, and semiconductor engineering.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <div className="flex items-center text-slate-700 font-medium text-sm mb-3">
                  <GraduationCap className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>{item.company}</span>
                </div>
                <p className="text-slate-600 text-sm font-medium">
                  {item.description.replace(/\.$/, "")}
                </p>
              </div>

              <div className="sm:text-right flex-shrink-0">
                <div className="inline-flex items-center text-slate-600 text-sm font-medium bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200">
                  <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
