//@ts-nocheck
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Globe, Database, Code, Layers, Sparkles, Shield, Cloud } from "lucide-react"
import { motion } from "framer-motion"
import { staggerItem, cardHover } from "@/lib/animations"
import { SectionWrapper, StaggerWrapper } from "@/components/motion-wrapper"
import { useState } from "react"

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <SectionWrapper id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="flex items-center justify-center gap-3 mb-4">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="h-8 w-8 text-accent" />
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Skills & Technologies
            </motion.h2>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="h-8 w-8 text-accent" />
            </motion.div>
          </motion.div>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <StaggerWrapper className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Frontend */}
          <motion.div variants={staggerItem}>
            <Card className="border-l-4 border-l-accent group h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-heading font-semibold text-foreground">Frontend Development</h3>
                </div>
                {[
                  { name: "React.js", level: 90, label: "Advanced" },
                  { name: "Next.js", level: 88, label: "Advanced" },
                  { name: "TypeScript", level: 80, label: "Advanced" },
                  { name: "UI/UX Design", level: 85, label: "Advanced" },
                  { name: "Performance Optimization", level: 82, label: "Advanced" },
                ].map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend */}
          <motion.div variants={staggerItem}>
            <Card className="border-l-4 border-l-chart-1 group h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-6 w-6 text-chart-1" />
                  <h3 className="text-2xl font-heading font-semibold text-foreground">Backend Development</h3>
                </div>
                {[
                  { name: "Node.js", level: 87, label: "Advanced" },
                  { name: "Express.js", level: 85, label: "Advanced" },
                  { name: "MongoDB", level: 82, label: "Advanced" },
                  { name: "RESTful APIs", level: 85, label: "Advanced" },
                  { name: "API Security", level: 80, label: "Advanced" },
                ].map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </StaggerWrapper>

        {/* Programming Languages & DevOps */}
        <StaggerWrapper className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={staggerItem}>
            <Card className="h-full border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="h-6 w-6 text-chart-2" />
                  <h3 className="text-2xl font-heading font-semibold text-foreground">Programming Languages</h3>
                </div>
                {[
                  { name: "JavaScript", level: 90, label: "Expert" },
                  { name: "Python", level: 75, label: "Intermediate" },
                  { name: "Java", level: 70, label: "Intermediate" },
                  { name: "C/C++", level: 68, label: "Intermediate" },
                ].map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="h-full border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="h-6 w-6 text-chart-3" />
                  <h3 className="text-2xl font-heading font-semibold text-foreground">DevOps & Cloud</h3>
                </div>
                {[
                  { name: "Docker", level: 85, label: "Advanced" },
                  { name: "CI/CD Pipelines", level: 82, label: "Advanced" },
                  { name: "AWS / Azure / GCP", level: 78, label: "Intermediate" },
                  { name: "Infrastructure as Code", level: 75, label: "Intermediate" },
                ].map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </StaggerWrapper>

        {/* AI & Cybersecurity */}
        <StaggerWrapper className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={staggerItem}>
            <Card className="h-full border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-heading font-semibold text-foreground">AI & Automation</h3>
                </div>
                {[
                  { name: "Generative AI", level: 80, label: "Advanced" },
                  { name: "AI APIs", level: 78, label: "Intermediate" },
                  { name: "Intelligent Automation", level: 75, label: "Intermediate" },
                ].map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="h-full border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-chart-1" />
                  <h3 className="text-2xl font-heading font-semibold text-foreground">Cybersecurity</h3>
                </div>
                {[
                  { name: "Encryption & Authentication", level: 80, label: "Advanced" },
                  { name: "API Protection", level: 78, label: "Advanced" },
                  { name: "Vulnerability Mitigation", level: 75, label: "Intermediate" },
                ].map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </StaggerWrapper>

        {/* Technology Stack Overview */}
        <motion.div className="mt-16 text-center">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">Technology Stack</h3>
          <StaggerWrapper className="flex flex-wrap justify-center gap-3">
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
            ].map((tech, i) => (
              <motion.div key={tech} variants={staggerItem}>
                <Badge variant="outline" className="px-4 py-2 text-sm">{tech}</Badge>
              </motion.div>
            ))}
          </StaggerWrapper>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

// Reusable Skill Progress
function SkillBar({ skill, delay }) {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <Badge variant="outline" className="text-xs">{skill.label}</Badge>
      </div>
      <div className="relative">
        <Progress value={0} className="h-2" />
        <motion.div
          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-accent to-chart-1 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay * 2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}
