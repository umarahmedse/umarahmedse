//@ts-nocheck
"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 theme-transition ${
        scrolled ? "glass-card shadow-theme-medium" : "glass backdrop-theme"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-theme-light group-hover:shadow-theme-glow transition-all duration-300 hover-lift">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-chart-1 rounded-full animate-pulse"></div>
            </div>
            <div className="font-heading font-bold text-lg sm:text-xl text-foreground group-hover:text-gradient-primary transition-all duration-300">
              <span className="hidden xs:inline">Umar Ahmed</span>
              <span className="xs:hidden">UA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#services" },
              { name: "Achievements", href: "#achievements" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-3 lg:px-4 py-2 text-sm lg:text-base text-muted-foreground hover:text-accent transition-all duration-300 rounded-lg hover-glass group theme-transition"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-border/30">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl hover-glass transition-all duration-300 theme-transition"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 glass-card rounded-b-2xl shadow-theme-medium theme-transition">
            <div className="px-4 pt-3 pb-4 sm:pt-4 sm:pb-6 space-y-1 sm:space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#services" },
                { name: "Achievements", href: "#achievements" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-muted-foreground hover:text-accent hover-glass transition-all duration-300 rounded-xl animate-fade-in-down animate-stagger-${
                    index + 1
                  } theme-transition`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
