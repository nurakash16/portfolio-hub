import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const chips = [
    "Angular",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "REST APIs",
    "Full-Stack Web",
    "ThingsBoard",
    "MQTT",
    "VLSI Design",
    "Cadence Virtuoso"
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

        {/* Floating Glow Orbs */}
        <div className="absolute top-20 left-10 md:left-20 w-64 md:w-80 h-64 md:h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-80 md:w-96 h-80 md:h-96 bg-purple-400/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 md:w-56 h-40 md:h-56 bg-cyan-400/15 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="20" cy="20" r="3" fill="white" />
              <circle cx="80" cy="20" r="3" fill="white" />
              <circle cx="80" cy="80" r="3" fill="white" />
              <circle cx="20" cy="80" r="3" fill="white" />
              <path d="M50,20 L50,80 M20,50 L80,50" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 md:py-28 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left order-2 md:order-1"
          >
            {/* Live Availability Pill - Vast & Open */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium mb-5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for Software Engineering Opportunities</span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-[1.1]"
            >
              MD. NUR ALAM AKASH
            </motion.h1>

            {/* Role Subtitle */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-blue-100 mb-2.5 flex items-center gap-2">
                <span>Software Engineer</span>
                <span className="text-blue-400 text-sm font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-400/20">Full-Stack & Systems</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full"></div>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-xl mb-8 font-light"
            >
              Building <span className="text-cyan-300 font-medium">modern web applications</span>,
              <span className="text-yellow-300 font-medium"> data-driven dashboards</span>, and scalable software solutions with Angular, TypeScript, Node.js, and PostgreSQL,
              backed by strong analytical rigor in
              <span className="text-emerald-300 font-medium"> VLSI design</span> and distributed systems.
            </motion.p>

            {/* Tech Chips */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 sm:gap-2.5 mb-10">
              {chips.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 sm:px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm text-white hover:bg-white/20 hover:border-cyan-400/50 transition-colors shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="/Md_Nur_Alam_Akash_CV.pdf"
                download="Md_Nur_Alam_Akash_CV.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/25 transition-all text-sm sm:text-base min-h-[48px]"
              >
                <FileDown className="h-5 w-5" />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/25 backdrop-blur-sm transition-all text-sm sm:text-base min-h-[48px]"
              >
                <span>View Projects</span>
              </motion.a>

              <div className="flex gap-3 ml-1 sm:ml-2">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/nur-alam-akash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-blue-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/nurakash16"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-blue-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Glowing Framed Portrait */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl border-4 border-white/30 overflow-hidden">
                <img
                  src={heroImage}
                  alt="Md. Nur Alam Akash portrait"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-3 -right-3 w-10 sm:w-12 h-10 sm:h-12 bg-yellow-400 rounded-full blur-lg opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 bg-cyan-400 rounded-full blur-lg opacity-60 animate-bounce animation-delay-1000"></div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        href="#experience"
        aria-label="Scroll down to Experience section"
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white flex flex-col items-center group transition-colors"
      >
        <span className="text-xs sm:text-sm mb-2 font-medium tracking-wider uppercase text-blue-200">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/80 transition-colors">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white/90 rounded-full mt-2"
          />
        </div>
      </motion.a>
    </section>
  );
}
