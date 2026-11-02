import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#now", label: "Now" },
    { href: "#about", label: "Skills" },
    { href: "#research", label: "Research" },
    { href: "#achievements", label: "Achievements" },
    { href: "#education", label: "Education" },
    { href: "#activities", label: "Activities" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-slate-100 dark:bg-[#060911] text-slate-700 dark:text-slate-300 py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="sr-only">Footer</h2>

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                A
              </span>
              <span className="font-bold text-xl text-slate-900 dark:text-white">Md. Nur Alam Akash</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mb-6 font-light">
              Software Engineer specializing in modern web applications, interactive enterprise dashboards, and full-stack systems with Angular, TypeScript, Node.js, and PostgreSQL.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/nur-alam-akash/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/nurakash16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:nurakash16@gmail.com"
                aria-label="Send Email"
                className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-400 text-slate-700 dark:text-slate-300 hover:text-red-500 dark:hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Mail className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+8801521515249"
                aria-label="Phone Number"
                className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white flex items-center justify-center transition-colors shadow-2xs"
              >
                <Phone className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:nurakash16@gmail.com"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  nurakash16@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+8801521515249"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  +88015-21515249
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-2xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            &copy; {currentYear} Md. Nur Alam Akash. All rights reserved.
          </p>
          <p>
            Open to full-time and project-based software engineering opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}
