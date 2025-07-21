import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Settings, Code, Brain, Wrench } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "VLSI Design", icon: Cpu, gradient: "from-blue-500 to-blue-600" },
    { name: "Power Systems", icon: Zap, gradient: "from-yellow-500 to-orange-500" },
    { name: "Control Systems", icon: Settings, gradient: "from-green-500 to-emerald-500" },
    { name: "Cadence Virtuoso", icon: Code, gradient: "from-purple-500 to-violet-500" },
    { name: "MATLAB", icon: Brain, gradient: "from-red-500 to-pink-500" },
    { name: "Arduino", icon: Wrench, gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Bio Section */}
          <div className="modern-card p-8 md:p-10 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Professional Journey</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  An Electrical and Electronics Engineering graduate with a strong academic background and hands-on experience in power systems, VLSI, and control systems.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Skilled in circuit & layout design, signal processing, power electronics, and proficient in cutting-edge tools and technologies that drive innovation in the semiconductor industry.
                </p>
              </div>
              <div className="relative">
                <div className="floating-element">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto">
                    <div className="text-6xl gradient-text font-bold">EE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Innovation", desc: "Pushing boundaries in VLSI design", icon: "🚀" },
              { title: "Excellence", desc: "Delivering quality in every project", icon: "⭐" },
              { title: "Growth", desc: "Continuous learning and development", icon: "📈" }
            ].map((value, index) => (
              <div key={index} className="modern-card p-6 text-center group hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Technical Expertise</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized knowledge across multiple domains of electrical engineering
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index} 
                  className="modern-card p-6 text-center group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-3 transition-transform duration-300 pulse-glow`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}