import { User, Linkedin, Github, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <User className="h-7 w-7 text-white" />
              </div>
              <span className="font-bold text-2xl gradient-text">NUR ALAM AKASH</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-md">
              Electrical Engineer specializing in VLSI design, power systems, and control systems. Currently building the future of semiconductor technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/nur-alam-akash/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 pulse-glow"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a 
                href="https://github.com/nurakash16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 pulse-glow"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a 
                href="https://www.facebook.com/nuralam.akash.3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 pulse-glow"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a 
                href="mailto:nurakash16@gmail.com"
                className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 pulse-glow"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold mb-6 text-lg text-gray-200">Navigation</h6>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer hover:translate-x-1 duration-200"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer hover:translate-x-1 duration-200"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer hover:translate-x-1 duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer hover:translate-x-1 duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Expertise */}
          <div>
            <h6 className="font-semibold mb-6 text-lg text-gray-200">Expertise</h6>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-400">VLSI Design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-400">IC Layout Design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-400">Power Systems</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-gray-400">Control Systems</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <span className="text-gray-400">Cadence Virtuoso</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-semibold mb-4">Get In Touch</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-gray-400" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:nurakash16@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    nurakash16@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-gray-400" />
                <div>
                  <p className="text-gray-300 text-sm">Available for</p>
                  <p className="text-gray-400 text-sm">Remote & On-site work</p>
                </div>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-primary hover:text-blue-300 transition-colors cursor-pointer text-sm"
                >
                  Contact Me →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-300 mr-4">
                &copy; 2025 MD. Nur Alam Akash. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Available for Projects</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Crafted with precision • Powered by innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
