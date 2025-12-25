import { GraduationCap, Calendar } from "lucide-react";
import experiences from "@/data/experiences.json";
import type { Experience } from "@shared/schema";

export default function EducationSection() {
  const education = (experiences as Experience[]).filter((item) => item.type === "education");

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-slate-100/60"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Academic foundation in electrical and electronics engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item) => (
            <div key={item.id} className="modern-card p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-semibold text-lg">{item.company}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="md:text-right">
                  <div className="modern-card p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200/50">
                    <div className="flex items-center justify-start md:justify-end text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{item.duration}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Education
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
