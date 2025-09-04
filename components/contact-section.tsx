"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MessageCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Briefcase,
  Download,
  Calendar,
} from "lucide-react"

interface ContactSectionProps {
  onDownloadResume: () => void
}

export function ContactSection({ onDownloadResume }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">Send a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    rows={6}
                    className="bg-background border-border focus:border-accent resize-none"
                  />
                </div>

                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:umarahmedse@outlook.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        umarahmedse@outlook.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-chart-1/10 rounded-lg">
                      <Phone className="h-5 w-5 text-chart-1" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+9231015948394" className="text-muted-foreground hover:text-accent transition-colors">
                        +92 310-5948394
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-chart-2/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-chart-2" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Haripur, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-chart-3/10 rounded-lg">
                      <Clock className="h-5 w-5 text-chart-3" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Connect With Me</h3>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/umarahmedse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex-1"
                  >
                    <Github className="h-5 w-5" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-xs opacity-70">View my code</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/umarahmedse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex-1"
                  >
                    <Linkedin className="h-5 w-5" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-xs opacity-70">Professional network</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="border-l-4 border-l-chart-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-chart-1/10 rounded-lg">
                    <Briefcase className="h-5 w-5 text-chart-1" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">Current Availability</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Currently accepting freelance projects and collaboration opportunities. Let's discuss how I can help
                    bring your ideas to life!
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full bg-transparent" onClick={onDownloadResume}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack web application, UI/UX improvements, or technical consultation, I'm here to
            help you achieve your goals with modern, scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start a Conversation
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
