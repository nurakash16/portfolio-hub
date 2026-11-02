import { useState } from "react";
import { Menu, X, User, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";

interface NavigationProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

export default function Navigation({}: NavigationProps = {}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <Link href="/">
            <span className="flex items-center gap-2 text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors cursor-pointer">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                A
              </span>
              <span>Md. Nur Alam Akash</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/nur-alam-akash/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/nurakash16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="lg:hidden py-4 border-t border-slate-200"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-100 px-3">
                <a
                  href="https://www.linkedin.com/in/nur-alam-akash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-blue-600 rounded-lg border border-slate-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/nurakash16"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
