import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, FileDown, Check, Copy, Send } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nurakash16@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

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
    <section id="contact" className="relative py-24 bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Open to software engineering roles, full-stack development, and technical collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Direct Contact Channels */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Direct Channels</h3>
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/40 transition-colors shadow-xs dark:shadow-lg group"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={contact.href}
                      {...(contact.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={`${contact.label}: ${contact.value}`}
                      className="flex items-center gap-4 flex-1 min-w-0"
                    >
                      <div className="w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">{contact.label}</h4>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors truncate">{contact.value}</p>
                      </div>
                    </a>

                    {contact.label === "Email" && (
                      <button
                        onClick={copyEmail}
                        aria-label="Copy email address"
                        className="p-2 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors ml-2 flex-shrink-0 shadow-2xs"
                        title="Copy to clipboard"
                      >
                        {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Location & Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Location & Availability</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Location</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 animate-ping"></div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Current Status</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Open to software engineering roles (Full-Time or Contract)</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 border-t border-slate-200 dark:border-slate-800 pt-5 font-light">
                Software Engineer with proven experience shipping production web applications, interactive enterprise dashboards, and full-stack systems. Let&apos;s build impactful technology together.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Md_Nur_Alam_Akash_CV.pdf"
                download="Md_Nur_Alam_Akash_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all min-h-[46px]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:nurakash16@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all min-h-[46px] shadow-2xs"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
