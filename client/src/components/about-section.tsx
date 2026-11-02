import { motion } from "framer-motion";
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
  Layers
} from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function AboutSection() {
  const threeFacts = [
    {
      title: "Full-Stack & Web Engineering",
      desc: "Building production-grade single-page applications, interactive data dashboards, and clean RESTful backend services.",
      icon: Code2,
      lightColor: "from-blue-50 to-indigo-50",
      darkColor: "from-blue-500/20 to-cyan-500/10",
      accent: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Data Dashboards & Telemetry",
      desc: "Ingesting and visualizing real-time telemetry with ThingsBoard, Node-RED, and MQTT for high-reliability systems.",
      icon: Radio,
      lightColor: "from-indigo-50 to-purple-50",
      darkColor: "from-indigo-500/20 to-purple-500/10",
      accent: "text-indigo-600 dark:text-indigo-400"
    },
    {
      title: "Hardware Engineering Rigor",
      desc: "EEE and 65nm CMOS physical design background providing systematic debugging and architectural discipline.",
      icon: Microchip,
      lightColor: "from-purple-50 to-pink-50",
      darkColor: "from-purple-500/20 to-pink-500/10",
      accent: "text-purple-600 dark:text-purple-400"
    }
  ];

  const expertiseTiles = [
    {
      name: "Angular + TypeScript",
      category: "Frontend",
      desc: "Single-page enterprise applications, responsive UI architecture, reactive state, custom components",
      icon: Code2
    },
    {
      name: "Interactive Data Dashboards",
      category: "Visualization",
      desc: "Real-time KPI telemetry, energy monitoring, consistent user-flows, equipment performance",
      icon: LayoutDashboard
    },
    {
      name: "ThingsBoard & MQTT Workflows",
      category: "Data Pipelines",
      desc: "Device gateways, asset modeling, telemetry ingestion, dashboard widgets, role-based access",
      icon: Network
    },
    {
      name: "Node.js & REST APIs",
      category: "Backend",
      desc: "API endpoints, service integrations, authentication, structured data endpoints",
      icon: Server
    },
    {
      name: "PostgreSQL & Database Design",
      category: "Database",
      desc: "Relational data modeling, query optimization, structured schema design",
      icon: Database
    },
    {
      name: "Tools: Git, Docker, Figma",
      category: "Workflow",
      desc: "Version control, containerized testing, UI/UX prototyping and layout planning",
      icon: Wrench
    },
    {
      name: "VLSI / CMOS Physical Design",
      category: "Engineering Background",
      desc: "65nm CMOS schematics, layout creation, DRC/LVS physical verification with Cadence Virtuoso",
      icon: Cpu
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React (basic)", "Responsive UI"]
    },
    {
      title: "Backend & Databases",
      icon: Server,
      skills: ["Node.js", "Express", "REST API Design", "PostgreSQL", "Firebase", "Database Modeling"]
    },
    {
      title: "Data Visualization & Telemetry",
      icon: Network,
      skills: ["ThingsBoard (telemetry, assets, devices, roles)", "MQTT", "Node-RED", "IoT/PLC Gateways"]
    },
    {
      title: "UI/UX & Architecture",
      icon: LayoutDashboard,
      skills: ["Figma Prototyping", "Industrial Layouts", "KPI Data Visualization", "User-Flow Planning"]
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      skills: ["Git / GitHub", "Docker Compose (basic)", "Linux CLI", "Nginx (basic)", "LLM API Integrations"]
    },
    {
      title: "Hardware & Engineering",
      icon: Binary,
      skills: ["Python", "C/C++", "MATLAB", "Verilog HDL", "Cadence Virtuoso / Assura", "DRC / LVS Verification"]
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Software engineering expertise across modern web stacks, telemetry visualization, and semiconductor systems.
          </p>
        </motion.div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {threeFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${fact.lightColor} dark:${fact.darkColor} border border-slate-200 dark:border-slate-700/80 flex items-center justify-center ${fact.accent} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {fact.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
                    {fact.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Expertise Tiles */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Technical Focus Areas</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Key proficiencies in order of day-to-day engineering application</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertiseTiles.map((tile, index) => {
              const Icon = tile.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-xl p-5 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 shadow-xs dark:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-500/20">
                        {tile.category}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {tile.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-light">
                      {tile.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Comprehensive Skills Taxonomy */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Comprehensive Skills Taxonomy</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Languages, frameworks, platforms, and methodologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-xl p-5 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{cat.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-md text-xs font-mono font-medium border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
