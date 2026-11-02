import {
  Cpu,
  Code2,
  LayoutDashboard,
  Database,
  Network,
  Settings,
  Lightbulb,
  Target,
  TrendingUp,
  Server,
  Layers,
  Wrench,
  Binary,
  Sparkles
} from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "VLSI Design", icon: Cpu, gradient: "from-blue-500 to-blue-600" },
    { name: "Angular + TypeScript", icon: Code2, gradient: "from-emerald-500 to-teal-500" },
    { name: "Industrial Dashboards", icon: LayoutDashboard, gradient: "from-purple-500 to-violet-500" },
    { name: "Cadence Virtuoso", icon: Settings, gradient: "from-slate-500 to-slate-600" },
    { name: "Node-RED / IoT", icon: Network, gradient: "from-yellow-500 to-orange-500" },
    { name: "PostgreSQL", icon: Database, gradient: "from-red-500 to-pink-500" }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React (basic)", "WebRTC (basic)"]
    },
    {
      title: "Backend & Databases",
      icon: Server,
      skills: ["Node.js", "REST API Design & Integration", "PostgreSQL", "Firebase", "Database Design"]
    },
    {
      title: "IoT & Industrial Integration",
      icon: Network,
      skills: ["ThingsBoard (telemetry, assets, devices, roles, permissions)", "MQTT", "Node-RED", "IoT/PLC Gateways"]
    },
    {
      title: "UI/UX & Dashboards",
      icon: LayoutDashboard,
      skills: ["Figma", "Industrial Dashboard Layouts", "Data Visualization", "User-Flow Planning"]
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      skills: ["Git / GitHub", "Docker Compose (basic)", "Nginx (basic)", "Linux CLI", "LLM API (basic)"]
    },
    {
      title: "Programming & Engineering",
      icon: Binary,
      skills: ["Python", "C/C++", "MATLAB", "Verilog HDL", "CMOS / VLSI Design (Cadence Virtuoso / Assura)", "DRC / LVS Verification"]
    },
    {
      title: "Core Strengths",
      icon: Sparkles,
      skills: ["Problem-solving", "Clear Communication", "Fast Learning", "Cross-functional Teamwork", "Adaptability"]
    }
  ];

  const values = [
    { title: "Innovation", desc: "Building practical solutions across software and VLSI", icon: Lightbulb },
    { title: "Quality", desc: "Clear UI, reliable layouts, and disciplined reviews", icon: Target },
    { title: "Growth", desc: "Continuous learning in tools and systems", icon: TrendingUp }
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
                  Software Engineer with hands-on experience building industrial IoT dashboards, monitoring platforms,
                  and maintenance management systems using Angular, TypeScript, Node.js, and PostgreSQL.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Experienced in the full lifecycle from user research and UI/UX design to frontend development,
                  API integration, and database design. Skilled in real-time telemetry platforms (ThingsBoard, MQTT, Node-RED)
                  and collaborating on enterprise client projects.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Electrical and Electronics Engineering graduate with a strong foundation in VLSI design, CMOS circuit
                  implementation, and DRC/LVS verification, providing deep analytical and debugging skills.
                </p>
              </div>
              <div className="relative">
                <div className="floating-element">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto shadow-inner">
                    <div className="text-center">
                      <div className="text-6xl gradient-text font-bold mb-1">EE</div>
                      <div className="text-sm font-semibold text-gray-600 uppercase tracking-widest">Engineer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="modern-card p-6 text-center group hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Technical Skills Overview */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Technical Expertise</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertise spanning industrial software, VLSI layout, and IoT integration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
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

          {/* Comprehensive Skills Breakdown */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
              Comprehensive Skills Matrix
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of specialized technical capabilities and toolsets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div key={idx} className="modern-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <CatIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">{cat.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
