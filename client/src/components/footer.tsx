import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#now", label: "Now" },
    { href: "#about", label: "Skills" },
    { href: "#research", label: "Research" },
    { href: "#achievements", label: "Achievements" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="sr-only">Footer</h2>
        
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                A
              </span>
              <span className="font-bold text-xl text-white">Md. Nur Alam Akash</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              Software Engineer focused on industrial dashboards, IoT integration, and full-stack development with Angular, TypeScript, Node.js, and PostgreSQL.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/nur-alam-akash/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/nurakash16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:nurakash16@gmail.com"
                aria-label="Send Email"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+8801521515249"
                aria-label="Phone Number"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white flex items-center justify-center transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:nurakash16@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  nurakash16@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+8801521515249"
                  className="hover:text-white transition-colors"
                >
                  +88015-21515249
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} Md. Nur Alam Akash. All rights reserved.
          </p>
          <p className="text-slate-400">
            Open to full-time and project-based software engineering opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}
