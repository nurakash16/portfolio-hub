import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Github, Linkedin, Facebook } from "lucide-react";
import { Link } from "wouter";

interface NavigationProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Navigation({ searchQuery, setSearchQuery }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 text-primary font-bold text-xl cursor-pointer">
              <User className="h-6 w-6" />
              <span>NUR ALAM AKASH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer font-medium"
            >
              Research
            </button>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/nur-alam-akash/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/nurakash16"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/nuralam.akash.3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Navigation Links */}
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-700 hover:text-primary transition-colors cursor-pointer py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block text-gray-700 hover:text-primary transition-colors cursor-pointer py-2 text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block text-gray-700 hover:text-primary transition-colors cursor-pointer py-2 text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-gray-700 hover:text-primary transition-colors cursor-pointer py-2 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="block text-gray-700 hover:text-primary transition-colors cursor-pointer py-2 text-left"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-700 hover:text-primary transition-colors cursor-pointer py-2 text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("research")}
                className="block text-gray-700 hover:text-primary transition-colors cursor-pointer py-2 text-left font-medium"
              >
                Research
              </button>

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
                <a
                  href="https://www.linkedin.com/in/nur-alam-akash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/nurakash16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/nuralam.akash.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
