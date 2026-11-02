import { Mail, GraduationCap, Building2 } from "lucide-react";

export default function ReferencesSection() {
  const references = [
    {
      name: "Md. Faysal Nayan",
      title: "Assistant Professor",
      department: "Department of Electrical & Electronic Engineering",
      institution: "Ahsanullah University of Science & Technology (AUST)",
      email: "faysal.nayan.eee@aust.edu",
      icon: GraduationCap,
      category: "Academic Reference",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      name: "Aman Ullah",
      title: "Head of Industrial IoT",
      department: "Industrial Automation & IoT Solutions",
      institution: "Sincos Automation Technologies Ltd.",
      email: "aman@sincosbd.com",
      icon: Building2,
      category: "Professional Reference",
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="references" className="section-padding relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            References
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic and professional leaders available to speak regarding my work, engineering ethics, and capabilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {references.map((ref, index) => {
            const Icon = ref.icon;
            return (
              <div
                key={index}
                className="modern-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ref.gradient} flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {ref.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mt-2 group-hover:text-blue-600 transition-colors">
                      {ref.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700">
                      {ref.title}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-gray-600 text-sm mb-6 pl-1">
                  <p className="font-medium text-gray-700">{ref.department}</p>
                  <p>{ref.institution}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center">
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>{ref.email}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

