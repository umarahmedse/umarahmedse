//@ts-nocheck
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Palette,
  Settings,
  Zap,
  Users,
  BarChart3,
  Github,
  Briefcase,
  Folder,
  ArrowUpRight,
  Globe,
  Code,
  Play,
  Eye,
  Calendar,
  TrendingUp,
  Coffee,
  Pill,
  Wand2,
  BookOpen,
  Linkedin,
  Leaf,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerItem, cardHover, hoverScale } from "@/lib/animations";
import {
  MotionDiv,
  StaggerWrapper,
  SectionWrapper,
} from "@/components/motion-wrapper";
import Image from "next/image";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = {
    featured: [
      {
        id: "signaform",
        title: "SignaForm",
        subtitle: "Drag-and-Drop Form Builder",
        description:
          "A comprehensive drag-and-drop form builder with advanced analytics capabilities. Developed as a team project at Wise360 with real-time form creation, data visualization, and seamless platform integration.",
        category: "teamwork",
        technologies: ["Next Js", "Tailwind CSS", "Framer Motion", "Laravel"],
        stats: { components: "100+", performance: "98%" },
        icon: Folder,
        color: "accent",
        badges: ["Team Project", "Production"],
        year: "2024",
        impact: "High Impact",
        views: "1.2k+ views",
        image: "/signaformhover.png",
        hoverImage: "/Theme.png",

        liveUrl: "https://dashboard.signaform.pro/",
        teamMembers: [
          {
            name: "Umar Ahmed",
            role: "Software Engineer",
            linkedin: "https://www.linkedin.com/in/umarahmedse",
          },
          {
            name: "Umar Ahmed",
            role: "Associate Software Engineer",
            linkedin: "https://www.linkedin.com/in/umarahmedse/",
          },
          {
            name: "Maryam Sarfraz",
            role: "Frontend Developer",
            linkedin: "https://www.linkedin.com/in/maryamsarfraz/",
          },
          {
            name: "Iqra Ali",
            role: "UI/UX Designer",
            linkedin: "https://www.linkedin.com/in/iqra-ali-a48589255/",
          },
        ],
      },
      {
        id: "foreigner-cafe",
        title: "Foreigner Cafe",
        subtitle: "Restaurant-Management-System",
        description:
          "Complete restaurant management system with online ordering, table reservations, and customer analytics. Built with modern web technologies and responsive design.",
        category: "teamwork",
        technologies: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Payment Gateway",
        ],
        stats: { orders: "2k+", uptime: "99.8%", customers: "500+" },
        icon: Coffee,
        color: "chart-1",
        badges: ["Team Project", "Production"],
        year: "2024",
        impact: "Team Project",
        views: "800+ views",
        image: "/foreigner.png",
        hoverImage: "/foreignerhover.png",
        liveUrl: "https://www.foreignercafe.com/",
        teamMembers: [
          {
            name: "Umar Ahmed",
            role: "Full Stack Developer",
            linkedin: "https://www.linkedin.com/in/umarahmedse",
          },
          {
            name: "Umar Ahmed",
            role: "Software Engineer",
            linkedin: "https://www.linkedin.com/in/umarahmedse/",
          },
          {
            name: "Maryam Sarfraz",
            role: "Frontend Developer",
            linkedin: "https://www.linkedin.com/in/maryamsarfraz/",
          },
          {
            name: "Irsa Sarfraz",
            role: "UI/UX Designer",
            linkedin: "https://www.linkedin.com/in/irsa-sarfaraz/",
          },
        ],
      },
    ],
    additional: [
      {
        id: "interior-design",
        title: "Interior Design Website",
        description:
          "Modern interior design portfolio website with stunning animations using GSAP, responsive design, and interactive galleries. Features smooth scrolling and dynamic content loading.",
        category: "frontend",
        technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
        icon: Palette,
        color: "accent",
        year: "2024",
        image: "/interior.png",
        hoverImage: "/interiorhover.png",
        githubUrl:
          "https://github.com/mahnoortufailse/Interior_Design-Frontend-Project",
        liveUrl: "https://interior-design-portfolio.vercel.app",
      },
      {
        id: "pharmacy-finder",
        title: "Pharmacy Finder",
        description:
          "Location-based pharmacy finder application with real-time availability, medicine search, and store locator. Built with React frontend and Node.js backend with MongoDB database.",
        category: "frontend",
        technologies: [
          "React.js",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
        ],
        icon: Pill,
        color: "chart-1",
        year: "2024",
        image: "/Pharmacy.png",
        hoverImage: "/pharmacyhover.png",
        githubUrl: "https://github.com/mahnoortufailse/Pharmacy-Finder",
        liveUrl: "https://pharmacy-finder-app.vercel.app",
      },
      {
        id: "Ai-tool-showcase",
        title: "AI Tool Showcase",
        description:
          "Comprehensive AI tools platform developed during HiSky internship. Features image generation, video creation, PDF generation, mockup creation, and background removal using third-party APIs.",
        category: "fullstack",
        technologies: [
          "React",
          "Node.js",
          "AI APIs",
          "Image Processing",
          "Video Generation",
        ],
        icon: Wand2,
        color: "chart-2",
        year: "2024",
        image: "/AI.png",
        hoverImage: "/AIhover.png",
        githubUrl: "https://github.com/mahnoortufailse/ai-tools-showcase",
        liveUrl: "https://ai-tools-platform.vercel.app",
      },
      {
        id: "book-store",
        title: "Book Store",
        description:
          "Full-stack e-commerce book store with user authentication, shopping cart, payment integration, order management, and admin dashboard. Built using complete MERN stack.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        icon: BookOpen,
        color: "chart-3",
        year: "2023",
        image: "/bookStore.png",
        hoverImage: "/bookhover.png",
        githubUrl: "https://github.com/mahnoortufailse/BookStore",
        liveUrl: "https://bookstore-mern-app.vercel.app",
      },
      {
        id: "green-wave",
        title: "Green Wave Eco Loyalty Card",
        description:
          "Eco-friendly loyalty card platform that rewards users for sustainable actions and offers discounts on green products. Built with AngularJS, Tailwind CSS, and custom CSS for responsive design.",
        category: "frontend",
        technologies: ["AngularJS", "Tailwind CSS", "Custom CSS"],
        icon: Leaf, // you can import an icon like from lucide-react
        color: "chart-2",
        year: "2025",
        image: "/picture1.png", // add your screenshot in public folder
        hoverImage: "/picture4.png", // optional hover image if you have one
        githubUrl: "https://github.com/mahnoortufailse/Green-waves.git", // replace with your repo if public
        liveUrl: "https://greenwave-loyalty.vercel.app", // replace with your live deployed link
      },
    ],
  };

  const getFilteredProjects = () => {
    if (activeTab === "all") {
      return {
        featured: projects.featured,
        additional: projects.additional,
      };
    }

    return {
      featured: projects.featured.filter(
        (project) => project.category === activeTab
      ),
      additional: projects.additional.filter(
        (project) => project.category === activeTab
      ),
    };
  };

  const filteredProjects = getFilteredProjects();

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <SectionWrapper id="services" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <MotionDiv className="text-center mb-16" variants={fadeInUp}>
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Services & Projects
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive development services and showcase of real-world
            projects I've built
          </motion.p>
        </MotionDiv>

        {/* Services Grid */}
        <StaggerWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div variants={staggerItem}>
            <Card className="group transition-all duration-300 border-l-4 border-l-accent border-r border-r-border/50 border-y border-y-border/50 h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Layers className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Full-Stack Development
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    End-to-end web application development using MERN stack with
                    modern best practices and scalable architecture.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Express"].map(
                      (tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-accent/20 transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="group transition-all duration-300 border-l-4 border-l-chart-1 border-r border-r-border/50 border-y border-y-border/50 h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-chart-1/10 rounded-lg group-hover:bg-chart-1/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Palette className="h-6 w-6 text-chart-1" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      UI/UX Enhancement
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Transform existing interfaces with modern design principles,
                    improved user experience, and responsive layouts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Responsive Design", "User Experience", "Modern UI"].map(
                      (tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-chart-1/20 transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          {/* API Integration */}
          <motion.div variants={staggerItem}>
            <Card className="group transition-all duration-300 border-l-4 border-l-chart-2 border-r border-r-border/50 border-y border-y-border/50 h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-chart-2/10 rounded-lg group-hover:bg-chart-2/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Settings className="h-6 w-6 text-chart-2" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      API Integration
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Seamless integration of third-party APIs, authentication
                    systems, and real-time data synchronization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["RESTful APIs", "Authentication", "Real-time"].map(
                      (tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-chart-2/20 transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          {/* Performance Optimization */}
          <motion.div variants={staggerItem}>
            <Card className="group transition-all duration-300 border-l-4 border-l-chart-3 border-r border-r-border/50 border-y border-y-border/50 h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-chart-3/10 rounded-lg group-hover:bg-chart-3/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Zap className="h-6 w-6 text-chart-3" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Performance Optimization
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Improve application speed, reduce load times, and optimize
                    API calls for better user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Load Time", "Optimization", "Caching"].map(
                      (tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-chart-3/20 transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          {/* Team Collaboration */}
          <motion.div variants={staggerItem}>
            <Card className="group transition-all duration-300 border-l-4 border-l-chart-4 border-r border-r-border/50 border-y border-y-border/50 h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-chart-4/10 rounded-lg group-hover:bg-chart-4/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Users className="h-6 w-6 text-chart-4" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Team Collaboration
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Work effectively with cross-functional teams, contribute to
                    code reviews, and maintain clean codebases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Code Review", "Agile"].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-chart-4/20 transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>

          {/* Analytics & Reporting */}
          <motion.div variants={staggerItem}>
            <Card className="group transition-all duration-300 border-l-4 border-l-chart-5  border-r border-r-border/50 border-y border-y-border/50 h-full">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 bg-chart-5/10 rounded-lg group-hover:bg-chart-5/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BarChart3 className="h-6 w-6 text-chart-5" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Analytics & Reporting
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Implement data visualization, user analytics, and
                    comprehensive reporting systems for business insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Data Viz", "Analytics", "Reports"].map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-chart-5/20 transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        </StaggerWrapper>

        <div className="mb-16">
          <MotionDiv className="text-center mb-8" variants={fadeInUp}>
            <motion.h3
              className="text-3xl font-heading font-bold text-foreground mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Projects
            </motion.h3>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore my work across different categories and technologies
            </motion.p>
          </MotionDiv>

          {/* Tab Navigation */}
          <MotionDiv className="flex justify-center mb-12" variants={fadeInUp}>
            <motion.div
              className="w-full max-w-2xl bg-muted/50 rounded-lg p-1 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-full">
                {[
                  {
                    id: "all",
                    label: "All Projects",
                    shortLabel: "All",
                    count:
                      projects.featured.length + projects.additional.length,
                  },
                  {
                    id: "frontend",
                    label: "Frontend",
                    shortLabel: "Frontend",
                    count: projects.additional.filter(
                      (p) => p.category === "frontend"
                    ).length,
                  },
                  {
                    id: "fullstack",
                    label: "Full Stack",
                    shortLabel: "Full Stack",
                    count: [
                      ...projects.featured,
                      ...projects.additional,
                    ].filter((p) => p.category === "fullstack").length,
                  },
                  {
                    id: "teamwork",
                    label: "Team Work",
                    shortLabel: "Team",
                    count: [
                      ...projects.featured,
                      ...projects.additional,
                    ].filter((p) => p.category === "teamwork").length,
                  },
                ].map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 min-h-[3rem] sm:min-h-[2.5rem] ${
                      activeTab === tab.id
                        ? "bg-background text-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    layout
                  >
                    <span className="text-center leading-tight">
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.shortLabel}</span>
                    </span>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs px-1.5 py-0.5 min-w-[1.5rem] text-center"
                      >
                        {tab.count}
                      </Badge>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </MotionDiv>

          {/* Featured Projects */}
          <AnimatePresence mode="wait">
            {filteredProjects.featured.length > 0 && (
              <motion.div
                className="mb-12"
                key={`featured-${activeTab}`}
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <motion.h4
                  className="text-xl font-heading font-semibold text-foreground mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Featured Projects
                </motion.h4>
                <StaggerWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {filteredProjects.featured.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                      <motion.div
                        key={project.id}
                        variants={staggerItem}
                        layout
                        layoutId={project.id}
                      >
                        <Card className="group transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50 h-full w-full">
                          <motion.div
                            variants={cardHover}
                            whileHover="hover"
                            whileTap={{ scale: 0.98 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                          >
                            <div className="relative">
                              <div className="relative h-48 sm:h-56 overflow-hidden">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={`${project.title} project screenshot`}
                                    fill
                                    className={`object-cover transition-all duration-700 ${
                                      hoveredProject === project.id
                                        ? "opacity-0 scale-110"
                                        : "opacity-100 scale-100 group-hover:scale-110"
                                    }`}
                                  />
                                  {project.hoverImage && (
                                    <Image
                                      src={
                                        project.hoverImage || "/placeholder.svg"
                                      }
                                      alt={`${project.title} hover view`}
                                      fill
                                      className={`object-cover transition-all duration-700 ${
                                        hoveredProject === project.id
                                          ? "opacity-100 scale-110"
                                          : "opacity-0 scale-100"
                                      }`}
                                    />
                                  )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Project title overlay */}
                                <div className="absolute bottom-4 left-4 right-4">
                                  <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold mb-1 text-white truncate">
                                    {project.title}
                                  </h3>
                                  <p className="text-xs sm:text-sm opacity-90 text-white truncate">
                                    {project.subtitle}
                                  </p>
                                </div>
                              </div>

                              <div className="absolute top-4 right-4 flex flex-col sm:flex-row gap-2 max-w-[calc(100%-2rem)]">
                                {project.badges.map((badge, index) => (
                                  <Badge
                                    key={index}
                                    className={`text-xs truncate ${
                                      index === 0
                                        ? "bg-accent text-accent-foreground shadow-lg"
                                        : "bg-green-500/10 text-green-600 border-green-500/20"
                                    }`}
                                  >
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                              <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs text-white/80">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3 flex-shrink-0" />
                                  <span className="truncate">
                                    {project.year}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <TrendingUp className="h-3 w-3 flex-shrink-0" />
                                  <span className="truncate">
                                    {project.impact}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <CardContent className="p-4 sm:p-6">
                              <div className="flex items-center justify-between mb-4 gap-2">
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                  <h4 className="text-lg sm:text-xl font-heading font-semibold text-foreground truncate">
                                    {project.title}
                                  </h4>
                                  <Badge
                                    variant="outline"
                                    className="text-xs border-accent/30 flex-shrink-0"
                                  >
                                    {project.subtitle.split(" ")[0]}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
                                  <Eye className="h-4 w-4" />
                                  <span className="text-xs sm:text-sm">
                                    {project.views}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                                {project.description}
                              </p>

                              {project.teamMembers && (
                                <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                                  <h5 className="text-sm font-semibold text-foreground mb-2">
                                    Team Members:
                                  </h5>
                                  <div className="space-y-1">
                                    {project.teamMembers.map((member, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center justify-between text-xs gap-2"
                                      >
                                        <span className="text-muted-foreground min-w-0 flex-1">
                                          <strong className="truncate block sm:inline">
                                            {member.name}
                                          </strong>
                                          <span className="block sm:inline">
                                            {" "}
                                            - {member.role}
                                          </span>
                                        </span>
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          className="h-6 w-6 p-0 cursor-pointer flex-shrink-0"
                                          onClick={() =>
                                            window.open(
                                              member.linkedin,
                                              "_blank"
                                            )
                                          }
                                        >
                                          <Linkedin className="h-3 w-3" />
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="flex flex-wrap gap-2 mb-6 max-w-full">
                                {project.technologies.map((tech, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors flex-shrink-0"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center gap-3">
                                <motion.div
                                  variants={hoverScale}
                                  whileHover="hover"
                                  whileTap="tap"
                                  className="flex-1 sm:flex-none"
                                >
                                  <Button
                                    size="sm"
                                    className="bg-accent hover:bg-accent/90 group/btn cursor-pointer w-full sm:w-auto"
                                    onClick={() =>
                                      window.open(project.liveUrl, "_blank")
                                    }
                                  >
                                    <motion.div
                                      animate={{ scale: [1, 1.1, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                      }}
                                    >
                                      <Play className="h-4 w-4 mr-2" />
                                    </motion.div>
                                    Live Demo
                                  </Button>
                                </motion.div>
                              </div>
                            </CardContent>
                          </motion.div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </StaggerWrapper>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Additional Projects Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.additional.length > 0 && (
              <motion.div
                className="mb-16"
                key={`additional-${activeTab}`}
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <motion.h4
                  className="text-xl font-heading font-semibold text-foreground mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {activeTab === "all"
                    ? "Other Notable Projects"
                    : `${
                        activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
                      } Projects`}
                </motion.h4>
                <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProjects.additional.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                      <motion.div
                        key={project.id}
                        variants={staggerItem}
                        layout
                        layoutId={project.id}
                      >
                        <Card className="group transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 h-full overflow-hidden w-full">
                          <motion.div
                            variants={cardHover}
                            whileHover="hover"
                            whileTap={{ scale: 0.98 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                          >
                            <div className="relative h-40 sm:h-48 overflow-hidden">
                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image || "/placeholder.svg"}
                                  alt={`${project.title} project screenshot`}
                                  fill
                                  className={`object-cover transition-all duration-500 ${
                                    hoveredProject === project.id
                                      ? "opacity-0 scale-105"
                                      : "opacity-100 scale-100 group-hover:scale-105"
                                  }`}
                                />
                                {project.hoverImage && (
                                  <Image
                                    src={
                                      project.hoverImage || "/placeholder.svg"
                                    }
                                    alt={`${project.title} hover view`}
                                    fill
                                    className={`object-cover transition-all duration-500 ${
                                      hoveredProject === project.id
                                        ? "opacity-100 scale-105"
                                        : "opacity-0 scale-100"
                                    }`}
                                  />
                                )}
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                              {/* Project icon overlay */}
                              <div className="absolute top-4 left-4">
                                <div
                                  className={`p-2 bg-${project.color}/20 backdrop-blur-sm rounded-lg`}
                                >
                                  <IconComponent
                                    className={`h-5 w-5 text-white`}
                                  />
                                </div>
                              </div>

                              {/* Year badge */}
                              <div className="absolute top-4 right-4">
                                <Badge
                                  variant="secondary"
                                  className="bg-black/20 text-white border-white/20 backdrop-blur-sm text-xs"
                                >
                                  {project.year}
                                </Badge>
                              </div>
                            </div>

                            <CardContent className="p-4 sm:p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="min-w-0 flex-1">
                                  <h4 className="font-heading font-semibold text-foreground truncate">
                                    {project.title}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge
                                      variant="outline"
                                      className="text-xs flex-shrink-0"
                                    >
                                      {project.category === "fullstack"
                                        ? "Full-Stack"
                                        : project.category === "frontend"
                                        ? "Frontend"
                                        : "Team Work"}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {project.description}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-4 max-w-full">
                                {project.technologies.map((tech, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="text-xs bg-accent/10 text-accent border-accent/20 flex-shrink-0"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center gap-2">
                                <motion.div
                                  variants={hoverScale}
                                  whileHover="hover"
                                  whileTap="tap"
                                  className="flex-1"
                                >
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full group/btn bg-transparent cursor-pointer"
                                    onClick={() =>
                                      window.open(project.githubUrl, "_blank")
                                    }
                                  >
                                    <ArrowUpRight className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                                    <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                                    <span className="ml-2">Github</span>
                                  </Button>
                                </motion.div>
                              </div>
                            </CardContent>
                          </motion.div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </StaggerWrapper>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.featured.length === 0 &&
            filteredProjects.additional.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-muted-foreground mb-4">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Folder className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  </motion.div>
                  <p className="text-lg">No projects found in this category</p>
                  <p className="text-sm">
                    Try selecting a different tab to explore other projects
                  </p>
                </div>
              </motion.div>
            )}
        </div>

        {/* Work Experience Timeline */}
        <motion.div
          className="bg-background rounded-2xl p-4 sm:p-6 lg:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-heading font-semibold text-foreground mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional Experience
          </motion.h3>

          <StaggerWrapper className="space-y-4 sm:space-y-6">
            <motion.div variants={staggerItem}>
              <Card className="border-l-4 border-l-accent border-r border-r-border/50 border-y border-y-border/50">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h4 className="font-heading font-semibold text-foreground text-base sm:text-lg">
                          Software Engineer
                        </h4>
                        <Badge className="bg-accent text-accent-foreground w-fit">
                          Current
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-medium text-sm sm:text-base">
                        Cybitronix Technologies
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                        August 2024 - Present
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Leading end-to-end development and deployment of
                        scalable, secure web applications. Managing CI/CD
                        pipelines, automated deployments, and ensuring system
                        reliability while overseeing development teams and code
                        quality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="border-l-4 border-l-chart-1 border-r border-r-border/50 border-y border-y-border/50">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="p-2 bg-chart-1/10 rounded-lg flex-shrink-0">
                      <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-chart-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h4 className="font-heading font-semibold text-foreground text-base sm:text-lg">
                          Associate Software Engineer
                        </h4>
                      </div>
                      <p className="text-muted-foreground font-medium text-sm sm:text-base">
                        Wise360 Pvt Limited
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                        January 2024 - August 2024
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Led development of SignaForm and other scalable
                        applications. Designed secure APIs with robust
                        architecture, managed CI/CD pipelines, and facilitated
                        cross-functional collaboration while applying web
                        security best practices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <motion.div variants={staggerItem}>
                <Card className="border-l-4 border-l-chart-1 border-r border-r-border/50 border-y border-y-border/50 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="p-2 bg-muted rounded-lg flex-shrink-0">
                        <Code className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-semibold text-foreground mb-1 text-sm sm:text-base">
                          Associate Software Engineer
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          DeventiaTech (Pvt.) Ltd
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">
                          Jan 2024 - Aug 2024
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Delivered full-stack applications using modern
                          frameworks, developed Generative AI-powered features,
                          implemented CI/CD pipelines, and enhanced system
                          security through encryption and authentication
                          protocols.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Card className="border-l-4 border-l-chart-1 border-r border-r-border/50 border-y border-y-border/50 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div className="p-2 bg-muted rounded-lg flex-shrink-0">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-semibold text-foreground mb-1 text-sm sm:text-base">
                          Intern - Supporting Role{" "}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {" "}
                          TECNO Mobile Pakistan
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">
                          January 2020 - August 2022
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Assisted in building web-based Intrusion Detection
                          System to detect and block malicious API activity.
                          Supported API integrity improvements and reduced
                          fraudulent registrations through optimized workflows.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerWrapper>
          </StaggerWrapper>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
