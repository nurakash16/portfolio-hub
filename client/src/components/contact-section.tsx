import { Mail, Linkedin, Github, MapPin, Phone, FileDown } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nurakash16@gmail.com",
      href: "mailto:nurakash16@gmail.com",
      isExternal: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/nur-alam-akash",
      href: "https://www.linkedin.com/in/nur-alam-akash/",
      isExternal: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@nurakash16",
      href: "https://github.com/nurakash16",
      isExternal: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+88015-21515249",
      href: "tel:+8801521515249",
      isExternal: false
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900 tracking-tight">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Open to software engineering roles, full-time or project-based.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Direct Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Direct Contact</h3>
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm"
                >
                  <a
                    href={contact.href}
                    {...(contact.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={`${contact.label}: ${contact.value}`}
                    className="flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{contact.label}</h4>
                      <p className="text-sm font-semibold text-blue-600 hover:text-blue-800">{contact.value}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Location & Summary Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Location & Availability</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Location</h4>
                    <p className="text-sm text-slate-600">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Current Status</h4>
                    <p className="text-sm text-slate-600">Open to software engineering roles, full-time or project-based</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 border-t border-slate-100 pt-5">
                Software Engineer with hands-on experience building industrial monitoring dashboards, IoT telemetry integrations, and full-stack systems. Reach out for discussions on engineering challenges and opportunities.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <a
                href="/Md_Nur_Alam_Akash_CV.pdf"
                download="Md_Nur_Alam_Akash_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="mailto:nurakash16@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
