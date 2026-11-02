import { motion } from "framer-motion";
import { Users, Calendar, HeartHandshake } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function ExtracurricularSection() {
  const activities = [
    {
      title: "AUST Cultural Club",
      role: "General Member",
      organization: "Ahsanullah University of Science & Technology",
      description: "Actively collaborated with the executive board to plan, coordinate, and host university-wide cultural events and student festivals.",
      badge: "Campus Leadership",
      badgeColor: "bg-purple-50 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30"
    },
    {
      title: "AUST EEE Day & Excursion Committee",
      role: "Organizer & Co-Organizer",
      organization: "Department of EEE, AUST",
      description: "Served as Organizer for AUST EEE Day Spring 2021 and Co-Organizer for AUST EEE Excursion 2019, handling event logistics, scheduling, and participant management.",
      badge: "Event Organization",
      badgeColor: "bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30"
    },
    {
      title: "Annual Office Tour Organizer",
      role: "Event Coordinator",
      organization: "Sincos Group",
      description: "Helped coordinate and manage logistics for the corporate Annual Office Tour at Sincos Group, fostering team engagement and company culture.",
      badge: "Corporate Initiative",
      badgeColor: "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30"
    }
  ];

  return (
    <section id="activities" className="relative py-24 bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs sm:text-sm font-medium mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Community & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Extracurricular Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Leadership, event coordination, and team-building initiatives across university and corporate environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 hover:border-purple-500/30 shadow-sm dark:shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-0.5 rounded-full text-xs font-mono font-medium border ${activity.badgeColor}`}>
                    {activity.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    {index === 0 ? <Users className="w-5 h-5" /> : index === 1 ? <Calendar className="w-5 h-5" /> : <HeartHandshake className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-xs font-mono text-purple-600 dark:text-purple-400 mb-3">
                  {activity.role} • {activity.organization}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
