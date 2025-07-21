import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import type { Experience } from "@shared/schema";

export default function ExperienceSection() {
  const { data: experiences = [], isLoading } = useQuery({
    queryKey: ["/api/experiences"],
  }) as { data: Experience[]; isLoading: boolean };

  if (isLoading) {
    return (
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-text">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Building the future of semiconductor technology through innovative design and engineering excellence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-40 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>
              )}
              
              <div className="modern-card p-8 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg hidden md:block pulse-glow"></div>
                
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Building className="h-5 w-5 mr-2 text-blue-500" />
                          <span className="font-semibold text-lg">{experience.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50 hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:text-right">
                    <div className="modern-card p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200/50">
                      <div className="flex items-center justify-start md:justify-end text-gray-600 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{experience.duration}</span>
                      </div>
                      {experience.current && (
                        <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium border border-green-200">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Currently Working
                        </div>
                      )}
                      <div className="mt-4 text-sm text-gray-500">
                        {experience.type === 'work' ? '💼' : '🎓'} Full-time Position
                      </div>
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