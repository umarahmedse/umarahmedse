//@ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ChevronUp,
  Code,
  Zap,
  Globe,
  Star,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Footer() {
  const footerRef = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t border-border/50 overflow-hidden theme-transition">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-primary"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={footerRef} className="reveal">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-theme-medium hover-lift">
                    <span className="text-white font-heading font-bold text-xl">
                      UA
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-chart-1 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground theme-transition">
                    Umar Ahmed
                  </h3>
                  <p className="text-muted-foreground font-medium theme-transition">
                    Software Engineer
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md theme-transition">
                Passionate about crafting seamless digital experiences through
                innovative solutions.
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JavaScript",
                  "Python",
                  "Java",
                  "C++",
                  "Docker",
                  "CI/CD",
                  "AWS",
                  "Azure",
                  "GCP",
                  "Generative AI",
                  "AI APIs",
                  "Cybersecurity",
                  "UI/UX Design",
                ].map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`px-3 py-1 text-xs glass-card hover:bg-gradient-primary hover:text-white transition-all duration-300 hover-lift animate-fade-in-up animate-stagger-${
                      index + 1
                    } theme-transition`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/umarahmedse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl glass-card hover:bg-gradient-primary hover:text-white transition-all duration-300 shadow-theme-light hover-lift border border-border/50 theme-transition"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/umarahmedse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl glass-card hover:bg-gradient-primary hover:text-white transition-all duration-300 shadow-theme-light hover-lift border border-border/50 theme-transition"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:umarahmedse@outlook.com"
                  className="group p-3 rounded-xl glass-card hover:bg-gradient-primary hover:text-white transition-all duration-300 shadow-theme-light hover-lift border border-border/50 theme-transition"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-heading font-semibold text-foreground text-lg flex items-center gap-2 theme-transition">
                <Globe className="h-5 w-5 text-accent" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About Me", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Services", href: "#services" },
                  { name: "Contact", href: "#contact" },
                ].map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`group flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300 animate-fade-in-left animate-stagger-${
                        index + 1
                      } theme-transition hover-glass px-2 py-1 rounded-lg`}
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Expertise */}
            <div className="space-y-6">
              <h4 className="font-heading font-semibold text-foreground text-lg flex items-center gap-2 theme-transition">
                <Code className="h-5 w-5 text-accent" />
                Expertise
              </h4>
              <ul className="space-y-3">
                {[
                  "Full-Stack Development",
                  "UI/UX Enhancement",
                  "API Integration",
                  "Performance Optimization",
                  "Technical Consultation",
                ].map((service, index) => (
                  <li
                    key={service}
                    className={`flex items-center gap-2 text-muted-foreground animate-fade-in-right animate-stagger-${
                      index + 1
                    } theme-transition`}
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>

              {/* Status Indicator */}
              <div className="p-4 rounded-xl glass-card border border-chart-1/20 theme-transition">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground theme-transition">
                    Available for Projects
                  </span>
                </div>
                <p className="text-xs text-muted-foreground theme-transition">
                  Currently accepting new opportunities and collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border/50">
            <div className="text-center group glass-card p-4 rounded-xl hover-lift theme-transition">
              <div className="text-2xl font-heading font-bold text-accent group-hover:scale-110 transition-transform">
                3.61
              </div>
              <div className="text-xs text-muted-foreground theme-transition">
                Current CGPA
              </div>
            </div>
            <div className="text-center group glass-card p-4 rounded-xl hover-lift theme-transition">
              <div className="text-2xl font-heading font-bold text-accent group-hover:scale-110 transition-transform">
                3+
              </div>
              <div className="text-xs text-muted-foreground theme-transition">
                Companies
              </div>
            </div>
            <div className="text-center group glass-card p-4 rounded-xl hover-lift theme-transition">
              <div className="text-2xl font-heading font-bold text-accent group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-xs text-muted-foreground theme-transition">
                Projects
              </div>
            </div>
            <div className="text-center group glass-card p-4 rounded-xl hover-lift theme-transition">
              <div className="text-2xl font-heading font-bold text-accent group-hover:scale-110 transition-transform">
                20+
              </div>
              <div className="text-xs text-muted-foreground theme-transition">
                Technologies
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground theme-transition">
              <span>© {currentYear} Umar Ahmed. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Scroll to Top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-3 rounded-xl glass-card hover:bg-gradient-primary hover:text-white transition-all duration-300 hover-lift group theme-transition"
              >
                <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary"></div>
        </div>
      </div>
    </footer>
  );
}
