import { Users, Award, Calendar, HeartHandshake } from "lucide-react";

export default function ExtracurricularSection() {
  const activities = [
    {
      title: "AUST Cultural Club",
      role: "General Member",
      organization: "Ahsanullah University of Science & Technology",
      description: "Actively collaborated with the executive board to plan, coordinate, and host university-wide cultural events and student festivals.",
      badge: "Campus Leadership",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      title: "AUST EEE Day & Excursion Organizing Committee",
      role: "Organizer & Co-Organizer",
      organization: "Department of EEE, AUST",
      description: "Served as Organizer for AUST EEE Day Spring 2021 and Co-Organizer for AUST EEE Excursion 2019, handling event logistics, scheduling, and participant management.",
      badge: "Event Organization",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      title: "Annual Office Tour Organizer",
      role: "Event Coordinator",
      organization: "Sincos Group",
      description: "Helped coordinate and manage logistics for the corporate Annual Office Tour at Sincos Group, fostering team engagement and company culture.",
      badge: "Corporate Initiative",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <section id="activities" className="section-padding relative overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Extracurricular Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leadership, event management, and team-building initiatives across university and corporate environments
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="modern-card p-6 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${activity.badgeColor}`}>
                    {activity.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    {index === 0 ? <Users className="w-5 h-5" /> : index === 1 ? <Calendar className="w-5 h-5" /> : <HeartHandshake className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mb-2">
                  {activity.role} • {activity.organization}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

