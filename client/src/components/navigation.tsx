import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, FileDown, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";

interface NavigationProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
}

const navLinks = [
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#now", label: "Now", id: "now" },
  { href: "#about", label: "Skills", id: "about" },
  { href: "#research", label: "Research", id: "research" },
  { href: "#achievements", label: "Achievements", id: "achievements" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#activities", label: "Activities", id: "activities" },
  { href: "#contact", label: "Contact", id: "contact" }
];

export default function Navigation({}: NavigationProps = {}) {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll reading progress & scroll state
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolled(totalScroll > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver active section tracking
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const sectionIds = navLinks.map((link) => link.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Floating Pill Header */}
      <header
        role="banner"
        className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none"
      >
        <div
          className={`w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto relative overflow-hidden ${
            isScrolled
              ? "bg-white/95 dark:bg-[#090D16]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              : "bg-white/90 dark:bg-[#0B0F19]/85 backdrop-blur-lg border border-slate-200/80 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          }`}
        >
          {/* Animated Scroll Progress Bar */}
          <div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(scrollProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Page reading progress"
          />

          <div className="flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5">
            {/* Brand Logo & Name */}
            <Link href="/">
              <span className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full pr-2">
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
                  A
                  {/* Subtle live indicator pulse */}
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-white dark:border-slate-900"></span>
                  </span>
                </span>
                <span className="font-semibold text-sm tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors hidden sm:inline">
                  Akash
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1 rounded-full border border-slate-200/80 dark:border-white/5"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/25"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Area: Theme Toggle, CV Download & Social Links */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Theme Toggle Button */}
              <motion.button
                type="button"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -25 }}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600 transition-transform" />
                )}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Md_Nur_Alam_Akash_CV.pdf"
                download="Md_Nur_Alam_Akash_CV.pdf"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>CV</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/nur-alam-akash/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/nurakash16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Github className="w-4 h-4" />
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed inset-0 z-40 lg:hidden bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md flex flex-col justify-start pt-20 px-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-sm mx-auto bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-white/15 rounded-3xl p-5 shadow-2xl space-y-2 text-slate-800 dark:text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200 dark:border-white/10 px-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 font-mono">
                  Navigation
                </span>
                
                <div className="flex items-center gap-2">
                  {/* Theme Toggle in Mobile Menu */}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Moon className="w-4 h-4 text-indigo-600" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="p-1 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-blue-600 text-white font-semibold"
                          : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between px-1">
                <a
                  href="/Md_Nur_Alam_Akash_CV.pdf"
                  download="Md_Nur_Alam_Akash_CV.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>

                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/nur-alam-akash/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/nurakash16"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
