import { motion } from "framer-motion";
import { BookOpen, Calendar, Activity, Terminal } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function NowSection() {
  const learningTopics = [
    {
      topic: "Docker & Containerized Architectures",
      practicingIn: "Microservices & isolated deployment workflows"
    },
    {
      topic: "Real-time Telemetry & Edge Streaming",
      practicingIn: "High-throughput ThingsBoard & distributed dashboard pipelines"
    },
    {
      topic: "Enterprise Operations & Workflow Design",
      practicingIn: "Scalable maintenance management and approval platforms"
    }
  ];

  return (
    <section id="now" className="relative py-24 bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Live Status & Continuous Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            What I&apos;m Doing Now
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            A real-time snapshot of my active engineering focus and technical investigations.
          </p>
        </motion.div>

        {/* Live Status Command Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="bg-slate-50 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-xl mb-10 transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Current Engineering Focus</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 font-mono">LIVE</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Web applications, production dashboards & data pipelines</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span>Updated November 2026</span>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
              Leading UI/UX modernization and telemetry dashboard integration for industrial monitoring systems at{" "}
              <span className="font-semibold text-slate-900 dark:text-white">Sincos Group</span>. Building responsive web interfaces,
              ThingsBoard visualizations, and high-reliability operational reporting tools.
            </p>
          </div>
        </motion.div>

        {/* Currently Learning / Technical Study */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-slate-50 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-xl transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Technical Investigations</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Deepening hands-on mastery in modern distributed architectures</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {learningTopics.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between hover:border-blue-500/40 shadow-xs transition-colors"
              >
                <div>
                  <div className="w-7 h-7 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{item.topic}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    <span className="font-medium text-blue-600 dark:text-blue-400">Application: </span>
                    {item.practicingIn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
