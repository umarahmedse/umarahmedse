//@ts-nocheck
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager at TechCorp",
    company: "TechCorp Solutions",
    image: "/professional-woman-headshot.png",
    rating: 5,
    text: "Mahnoor delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise in React and Node.js helped us launch ahead of schedule. Highly recommended!",
    project: "E-commerce Platform",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "CTO at StartupHub",
    company: "StartupHub",
    image: "/professional-man-headshot.png",
    rating: 5,
    text: "Working with Mahnoor on SignaForm was a game-changer. Her full-stack development skills and innovative approach to drag-and-drop functionality exceeded our expectations.",
    project: "SignaForm Development",
  },
  {
    id: 3,
    name: "Lisa Chen",
    role: "Lead Developer at InnovateLab",
    company: "InnovateLab",
    image: "/asian-woman-developer-headshot.png",
    rating: 5,
    text: "Mahnoor's expertise in MERN stack development and her collaborative approach made our project a success. She's a talented developer with great communication skills.",
    project: "Web Application Development",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "Product Owner at DigitalFlow",
    company: "DigitalFlow",
    image: "/hispanic-man-professional-headshot.png",
    rating: 5,
    text: "Exceptional work on our dashboard application. Mahnoor's ability to translate complex requirements into clean, efficient code is impressive. A true professional.",
    project: "Dashboard Application",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-bold mb-4 text-gradient-primary">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="glass-card hover-lift mb-8 reveal">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6">
                <Quote className="h-12 w-12 text-accent flex-shrink-0 opacity-50" />
                <div className="flex-1">
                  <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
                    "{currentTestimonial.text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16 ring-2 ring-accent/20">
                        <AvatarImage
                          src={currentTestimonial.image || "/placeholder.svg"}
                          alt={currentTestimonial.name}
                        />
                        <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                          {currentTestimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h4 className="font-semibold text-lg">{currentTestimonial.name}</h4>
                        <p className="text-muted-foreground">{currentTestimonial.role}</p>
                        <p className="text-sm text-accent font-medium">{currentTestimonial.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 inline-block">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {currentTestimonial.project}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="glass hover-glow bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="glass hover-glow bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonial Grid Preview */}
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials
              .filter((_, index) => index !== currentIndex)
              .slice(0, 3)
              .map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`glass cursor-pointer hover-lift transition-all duration-300 ${
                    index === 0 ? "animate-stagger-1" : index === 1 ? "animate-stagger-2" : "animate-stagger-3"
                  }`}
                  onClick={() => setCurrentIndex(testimonials.findIndex((t) => t.id === testimonial.id))}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-primary text-white text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h5 className="font-medium text-sm">{testimonial.name}</h5>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80 line-clamp-2">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
