import { Github, Linkedin, Facebook } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="text-left order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              MD. NUR ALAM AKASH
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl md:text-4xl font-light text-blue-100 mb-2">
                Software Engineer | VLSI Designer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>

            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-xl mb-8 font-light">
              Building <span className="text-cyan-300 font-medium">industrial dashboards</span> and
              <span className="text-yellow-300 font-medium"> software systems</span> with Angular and TypeScript,
              while maintaining strong expertise in
              <span className="text-green-300 font-medium"> VLSI design</span> and CMOS layout.
            </p>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {["Angular", "TypeScript", "VLSI Design", "Cadence Virtuoso", "Node-RED"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white hover:bg-white/20 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/nur-alam-akash/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/nurakash16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/nuralam.akash.3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl border-4 border-white/20 overflow-hidden">
                <img
                  src={heroImage}
                  alt="Md. Nur Alam Akash portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400 rounded-full blur-xl opacity-60 animate-bounce animation-delay-1000"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
