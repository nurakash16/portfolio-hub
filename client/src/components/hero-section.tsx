import { Github, Linkedin, FileDown, Mail } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export default function HeroSection() {
  const chips = [
    "Angular",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "ThingsBoard",
    "MQTT",
    "Node-RED"
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Available for Software Roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 tracking-tight text-white leading-tight">
              Md. Nur Alam Akash
            </h1>

            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-200 mb-1">
                Software Engineer
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal">
                Industrial dashboards, IoT integration and full-stack development
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mb-7 font-light">
              I build industrial monitoring dashboards and IoT/PLC integrations with Angular and TypeScript,
              backed by an Electrical and Electronics Engineering and VLSI design background.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map((skill, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 bg-slate-800/80 border border-slate-700/80 rounded-full text-xs sm:text-sm font-medium text-slate-200 hover:border-blue-400/60 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/Md_Nur_Alam_Akash_CV.pdf"
                download="Md_Nur_Alam_Akash_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <FileDown className="h-4 w-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium rounded-full border border-slate-700 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span>Contact</span>
              </a>

              <div className="flex items-center gap-2.5 ml-1">
                <a
                  href="https://www.linkedin.com/in/nur-alam-akash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile of Md. Nur Alam Akash"
                  className="w-11 h-11 bg-slate-800/80 border border-slate-700/80 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/nurakash16"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile of Md. Nur Alam Akash"
                  className="w-11 h-11 bg-slate-800/80 border border-slate-700/80 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/70 bg-slate-800">
                <img
                  src={heroImage}
                  alt="Md. Nur Alam Akash portrait"
                  width={320}
                  height={320}
                  fetchpriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#experience"
        aria-label="Scroll down to Experience section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 hover:text-white flex flex-col items-center gap-1.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-1"
      >
        <span className="font-medium tracking-wide">Scroll Down</span>
        <div className="w-5 h-8 border border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-300 rounded-full"></div>
        </div>
      </a>
    </section>
  );
}
