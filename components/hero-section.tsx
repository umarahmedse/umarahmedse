//@ts-nocheck
"use client";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { OptimizedImage } from "@/components/optimized-image";
import { memo } from "react";
import { motion } from "framer-motion";
import {
  fadeInDown,
  scaleIn,
  staggerContainer,
  staggerItem,
  hoverScale,
} from "@/lib/animations";
import {
  MotionDiv,
  MotionButton,
  MotionH1,
  MotionP,
  StaggerWrapper,
} from "@/components/motion-wrapper";

interface HeroSectionProps {
  onDownloadResume: () => void;
}

export const HeroSection = memo(function HeroSection({
  onDownloadResume,
}: HeroSectionProps) {
  return (
    <motion.section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center bg-background theme-transition"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <StaggerWrapper className="space-y-6 sm:space-y-8 text-left order-2 lg:order-1">
            <MotionDiv variants={staggerItem}>
              <Badge
                variant="secondary"
                className="mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-accent/10 text-accent border-accent/20"
              >
                Available for Opportunities
              </Badge>
            </MotionDiv>

            <MotionH1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-tight"
              variants={fadeInDown}
            >
              Hi, I'm{" "}
              <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Umar Ahmed
              </span>
            </MotionH1>

            <MotionP
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed"
              variants={staggerItem}
            >
              Innovative Software Engineer | Passionate About Problem-Solving
            </MotionP>

            <MotionP
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
              variants={staggerItem}
            >
              I’m Umar Ahmed — a Full-Stack Developer and Generative AI
              Specialist passionate about building fast, scalable, and secure
              web applications. I specialize in Next.js, React, TypeScript, and
              the MERN stack, delivering everything from intuitive front-end
              interfaces to optimized back-end APIs. Beyond web development, I
              integrate AI-driven automation, manage cloud deployments (AWS,
              Azure, GCP), and streamline workflows with CI/CD pipelines and
              DevOps best practices. My focus is always on clean code,
              performance, and creating seamless user experiences that drive
              real business impact.
            </MotionP>

            <StaggerWrapper className="flex flex-wrap gap-2 sm:gap-3 py-4">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Generative AI",
                "Docker",
                "AWS",
                "Azure",
                "GCP",
                "CI/CD",
                "Cybersecurity",
                "UI/UX Design",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="outline"
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </StaggerWrapper>

            <StaggerWrapper className="flex flex-col md:flex-row gap-3 sm:gap-4 pt-4">
              <MotionButton
                size="lg"
                className="flex items-center justify-center w-full xs:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                variants={hoverScale}
                whileHover="hover"
                whileTap="tap"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                View My Work
              </MotionButton>

              <MotionButton
                variant="outline"
                size="lg"
                className="flex items-center justify-center w-full xs:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                variants={hoverScale}
                whileHover="hover"
                whileTap="tap"
                onClick={onDownloadResume}
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </MotionButton>
            </StaggerWrapper>

            <StaggerWrapper className="flex flex-col xs:flex-row xs:flex-wrap gap-4 sm:gap-6 pt-6 text-muted-foreground">
              <motion.a
                href="mailto:umarahmedse@outlook.com"
                className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base truncate">
                  umarahmedse@outlook.com
                </span>
              </motion.a>
              <MotionDiv
                className="flex items-center gap-2"
                variants={staggerItem}
              >
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">Haripur, Pakistan</span>
              </MotionDiv>
            </StaggerWrapper>
          </StaggerWrapper>

          <StaggerWrapper className="flex flex-col items-center space-y-6 sm:space-y-8 order-1 lg:order-2">
            <MotionDiv
              className="relative"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-accent/20 bg-gradient-to-br from-primary/10 to-accent/10">
                <OptimizedImage
                  src="/umar.jpg"
                  alt="Umar Ahmed - Full-Stack Developer"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                  priority={true}
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl -z-10 opacity-30"></div>
            </MotionDiv>

            <StaggerWrapper className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full max-w-xs sm:max-w-sm">
              {[
                { value: 3, suffix: "+", label: "Jobs", color: "text-primary" },
                {
                  value: 2,
                  suffix: "+",
                  label: "Internships",
                  color: "text-accent",
                },
                {
                  value: 20,
                  suffix: "+",
                  label: "Technologies",
                  color: "text-primary",
                },
                {
                  value: 10,
                  suffix: "+",
                  label: "Projects",
                  color: "text-accent",
                },
              ].map((stat, index) => (
                <MotionDiv
                  key={stat.label}
                  className="text-center bg-card rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  custom={index}
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    className={`text-xl sm:text-2xl font-heading font-bold ${stat.color}`}
                  />
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </MotionDiv>
              ))}
            </StaggerWrapper>

            <StaggerWrapper className="flex gap-3 sm:gap-4">
              <motion.a
                href="https://github.com/umarahmedse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl border border-border/50"
                variants={staggerItem}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/umarahmedse/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl border border-border/50"
                variants={staggerItem}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            </StaggerWrapper>
          </StaggerWrapper>
        </div>
      </div>
    </motion.section>
  );
});
