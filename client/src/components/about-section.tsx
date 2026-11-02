import {
  Code2,
  LayoutDashboard,
  Network,
  Server,
  Database,
  Wrench,
  Cpu,
  MonitorCheck,
  Radio,
  Microchip,
  Binary,
  Sparkles
} from "lucide-react";

export default function AboutSection() {
  const threeFacts = [
    {
      title: "Industrial Dashboards",
      desc: "Industrial dashboards for monitoring and reporting across multiple client production facilities.",
      icon: MonitorCheck
    },
    {
      title: "IoT & Telemetry Integration",
      desc: "IoT/PLC and ThingsBoard integration with Node-RED, MQTT pipelines, and device gateways.",
      icon: Radio
    },
    {
      title: "Engineering Foundation",
      desc: "EEE and VLSI engineering background providing systematic analytical and debugging rigor.",
      icon: Microchip
    }
  ];

  const expertiseTiles = [
    {
      name: "Angular + TypeScript",
      category: "Frontend",
      desc: "Single-page enterprise applications, responsive UI architecture, custom components",
      icon: Code2
    },
    {
      name: "Industrial Dashboards",
      category: "Visualization",
      desc: "Real-time KPI telemetry, equipment monitoring, consistent navigation flow",
      icon: LayoutDashboard
    },
    {
      name: "IoT: MQTT, ThingsBoard, Node-RED",
      category: "IoT Integration",
      desc: "Device gateways, asset modeling, telemetry ingestion, role permissions",
      icon: Network
    },
    {
      name: "Node.js + REST APIs",
      category: "Backend",
      desc: "API endpoints, authentication, service integrations, backend services",
      icon: Server
    },
    {
      name: "PostgreSQL",
      category: "Database",
      desc: "Relational data modeling, query optimization, structured application data",
      icon: Database
    },
    {
      name: "Tools: Git, Docker (basic), Figma",
      category: "Workflow",
      desc: "Version control, containerized deployment, UI/UX prototyping and layout planning",
      icon: Wrench
    },
    {
      name: "VLSI / CMOS Design",
      category: "Engineering background",
      desc: "65nm CMOS schematics, layout creation, DRC/LVS physical verification",
      icon: Cpu
    }
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

  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            About Me & Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Software Engineer combining industrial dashboard development, IoT telemetry, and full-stack engineering.
          </p>
        </div>

        {/* Short Bio Block */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span>Professional Profile</span>
          </h3>
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              • Software Engineer at Sincos Group building industrial monitoring dashboards and IoT/PLC integrations.
            </p>
            <p>
              • Works across the stack: UI/UX, Angular frontend, API integration, database design, and real-time telemetry with MQTT, Node-RED, and ThingsBoard.
            </p>
            <p>
              • EEE graduate with 65nm CMOS design and DRC/LVS verification experience, which shapes how I debug and verify complex technical systems.
            </p>
          </div>
        </div>

        {/* 3 Core Facts */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {threeFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{fact.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{fact.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expertise Tiles */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Technical Expertise</h3>
            <p className="text-slate-600 text-sm">Key proficiencies in order of day-to-day focus</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertiseTiles.map((tile, index) => {
              const Icon = tile.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                        {tile.category}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">{tile.name}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{tile.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comprehensive Skills Matrix */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Skills Taxonomy</h3>
            <p className="text-slate-600 text-sm">Technologies, platforms, and methodologies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {skillCategories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{cat.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-md text-xs font-medium border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
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
