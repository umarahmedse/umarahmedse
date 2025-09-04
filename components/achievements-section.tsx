//@ts-nocheck
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Target, Zap, Code, Users, Rocket } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Top Performer",
    description: "Recognized as top performer during internship at DeventiaTech (Pvt) Ltd.",
    date: "2024",
    category: "Performance",
    color: "text-yellow-500",
  },

  
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimized API calls reducing load times by 47%",
    date: "2024",
    category: "Technical",
    color: "text-orange-500",
  },
  {
    icon: Code,
    title: "Full-Stack Expertise",
    description: "Mastered MERN stack development with real-world applications",
    date: "2024",
    category: "Skills",
    color: "text-cyan-500",
  },
]

const certifications = [
  {
    title: "META Certified React Developer",
    issuer: "Coursera",
    date: "Sep 2023",
    type: "Qualification Certificate",
    skills: ["React", "Next.js"],
  },
  {
    title: "META Certified Version Control",
    issuer: "Coursera",
    date: "Sep 2023",
    type: "Qualification Certificate",
    skills: ["Git", "Github", "Gitlab", "GitBucket"],
  },
  {
    title: "Lead Of The Month",
    issuer: "DeventiaTech (Pvt) Ltd.",
    date: "Jul 2024",
    type: "Professional Experience",
    skills: ["MongoDB", "Express", "React", "Node.js"],
  },
]

const stats = [
  { label: "Projects Completed", value: "10+", icon: Rocket },
  { label: "Client Satisfaction", value: "100%", icon: Star },
  { label: "Code Commits", value: "500+", icon: Code },
  { label: "Team Collaborations", value: "8+", icon: Users },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-4 text-gradient-primary">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones, certifications, and recognition earned throughout my journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className={`glass-card border border-border/50  hover-lift text-center animate-stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold text-gradient-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card
                  key={achievement.title}
                  className={`glass-card border border-border/50 hover-lift group animate-stagger-${(index % 3) + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors`}>
                        <Icon className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {achievement.date}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {achievement.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications & Experience</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className={`border border-border/50 glass-card hover-lift animate-stagger-${(index % 3) + 1}`}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                    <p className="text-accent font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>

                  <Badge variant="secondary" className="mb-4">
                    {cert.type}
                  </Badge>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
