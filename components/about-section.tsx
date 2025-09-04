//@ts-nocheck
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { motion } from "framer-motion"
import { staggerItem } from "@/lib/animations"
import { SectionWrapper, StaggerWrapper } from "@/components/motion-wrapper"
import { useState, useEffect } from "react"

export function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <SectionWrapper id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, education, and passion for software engineering
            </p>
          </div>
          {/* Static content during hydration */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-semibold text-foreground">Hello, I'm Umar Ahmed!</h3>
                {/* ... existing content ... */}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">Education Journey</h3>
              {/* ... existing content ... */}
            </div>
          </div>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get to know more about my journey, education, and passion for software engineering
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <StaggerWrapper className="space-y-4">
              <motion.h3
                className="text-xl sm:text-2xl font-heading font-semibold text-foreground"
                variants={staggerItem}
              >
                Hello, I'm Umar Ahmed!
              </motion.h3>
              <motion.p
  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
  variants={staggerItem}
>
  I am a passionate BS Software Engineering student at COMSATS University Islamabad (Abbottabad), 
  specializing in full-stack development, Generative AI, and DevOps. My journey has been fueled by 
  curiosity and a commitment to building scalable, secure, and high-performance solutions.
</motion.p>

<motion.p
  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
  variants={staggerItem}
>
  Skilled in Next.js, React, TypeScript, Node.js, Express.js, and MongoDB, I design and build dynamic 
  web applications with a strong focus on clean code, performance optimization, and user experience. 
  I also bring hands-on expertise in CI/CD pipelines, cloud deployment, and AI-driven automation.
</motion.p>

<motion.p
  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
  variants={staggerItem}
>
  Fluent in English and Urdu, with additional proficiency in Arabic, I bring strong 
  communication and collaboration skills to every project. My experience spans from developing 
  AI-powered applications to leading teams on enterprise-level solutions at companies like 
  Cybitronix Technologies, Wise360, and DeventiaTech.
</motion.p>

            </StaggerWrapper>

            <StaggerWrapper className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
              {[
                { value: 3.61, label: "Current CGPA" },
                { value: 2026, label: "Expected Graduation" },
                { text: "Business Oriented", label: "Software Engineer" },
                { text: "Full-Stack", label: "Developer" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 sm:p-4 bg-card rounded-lg border border-border/50"
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.value ? (
                    <AnimatedCounter
                      end={item.value}
                      className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-accent"
                    />
                  ) : (
                    <div className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-accent">{item.text}</div>
                  )}
                  <div className="text-xs sm:text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </StaggerWrapper>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-heading font-semibold text-foreground mb-6 sm:mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education Journey
            </motion.h3>

            <StaggerWrapper className="space-y-4 sm:space-y-6">
              {/* Current Education */}
              <motion.div variants={staggerItem}>
                <Card className="border-l-4 border-l-accent border-r border-r-border/50 border-y border-y-border/50">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.div
                          className="p-2 bg-accent/10 rounded-lg flex-shrink-0"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col xs:flex-row xs:items-center gap-2 mb-2">
                            <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base">
                              Bachelor's Degree
                            </h4>
                            <motion.div
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [1, 0.7, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                                Current
                              </Badge>
                            </motion.div>
                          </div>
                          <p className="text-muted-foreground font-medium text-sm sm:text-base">
                            Software Engineering
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            COMSATS University Islamabad, Abbottabad
                          </p>
                          <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 mt-3 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                              2022 - 2026
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                              CGPA: 3.61/4.0
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>

              {/* Intermediate */}
              <motion.div variants={staggerItem}>
                <Card className="border border-border/50">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-2 bg-muted rounded-lg"
                          whileHover={{ rotate: -360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <GraduationCap className="h-6 w-6 text-muted-foreground" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-foreground mb-2">Intermediate</h4>
                          <p className="text-muted-foreground font-medium">Pre-Medical</p>
                          <p className="text-sm text-muted-foreground">Shoukat Public School And College</p>
                          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              2018 - 2020
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4" />
                              Marks: 80.46%
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>

              {/* Matriculation */}
              <motion.div variants={staggerItem}>
                <Card className="border border-border/50">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-2 bg-muted rounded-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <GraduationCap className="h-6 w-6 text-muted-foreground" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-foreground mb-2">Matriculation</h4>
                          <p className="text-muted-foreground font-medium">Science</p>
                          <p className="text-sm text-muted-foreground">Shoukat Public School And College</p>
                          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              2016 - 2018
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4" />
                              Marks: 86.09%
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            </StaggerWrapper>
          </motion.div>
        </div>

        {/* Languages & Communication */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl font-heading font-semibold text-foreground mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Languages & Communication
          </motion.h3>
          <StaggerWrapper className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {["English (Fluent)", "Urdu (Native)", "Collaborative Team Player", "Continuous Learner"].map(
              (skill, index) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="outline" className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base cursor-pointer">
                    {skill}
                  </Badge>
                </motion.div>
              ),
            )}
          </StaggerWrapper>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
