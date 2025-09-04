//@ts-nocheck
"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerItem, hoverScale, cardHover } from "@/lib/animations";
import { SectionWrapper, StaggerWrapper } from "@/components/motion-wrapper";
import axiosInstance from "@/lib/axios";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function EnhancedContactSection({
  onDownloadResume,
}: {
  onDownloadResume: () => void;
}) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await axiosInstance.post("/contact", formData);

      if (response.data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});

        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    } catch (error: any) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <StaggerWrapper className="space-y-6 sm:space-y-8">
            <motion.div variants={staggerItem}>
              <Card className="glass-card border border-border/50">
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </motion.div>
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "umarahmedse@outlook.com",
                        href: "mailto:umarahmedse@outlook.com",
                      },

                      {
                        icon: MapPin,
                        label: "Location",
                        value: "Haripur, Pakistan",
                      },
                      {
                        icon: Clock,
                        label: "Response Time",
                        value: "Usually within 24 hours",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.02,
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-sm sm:text-base">
                            {item.label}
                          </p>
                          {item.href ? (
                            <motion.a
                              href={item.href}
                              className="text-accent hover:underline text-sm sm:text-base break-all"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {item.value}
                            </motion.a>
                          ) : (
                            <p className="text-muted-foreground text-sm sm:text-base">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>

            {/* Social Links & Resume */}
            <motion.div variants={staggerItem}>
              <Card className="glass-card border border-border/50">
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <CardHeader className="pb-4 sm:pb-6">
                    <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </motion.div>
                      Connect & Download
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.div
                        variants={hoverScale}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full glass hover-glow bg-transparent"
                          asChild
                        >
                          <a
                            href="https://github.com/umarahmedse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            >
                              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                            </motion.div>
                            GitHub
                          </a>
                        </Button>
                      </motion.div>

                      <motion.div
                        variants={hoverScale}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full glass hover-glow bg-transparent"
                          asChild
                        >
                          <a
                            href="https://www.linkedin.com/in/umarahmedse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: 0.5,
                              }}
                            >
                              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                            </motion.div>
                            LinkedIn
                          </a>
                        </Button>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={hoverScale}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        onClick={onDownloadResume}
                        size="lg"
                        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        </motion.div>
                        Download Resume
                      </Button>
                    </motion.div>

                    {/* Availability Status */}
                    <motion.div
                      className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 text-center">
                        Available for new projects
                      </span>
                    </motion.div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          </StaggerWrapper>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card border border-border/50">
              <motion.div
                variants={cardHover}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center gap-3 mb-3 text-lg sm:text-xl">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Send className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </motion.div>
                    Send Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <motion.div
                          animate={
                            focusedField === "name"
                              ? { scale: 1.02 }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`glass transition-all duration-300 border border-border/50 ${
                              errors.name ? "border-red-500 animate-shake" : ""
                            } ${
                              focusedField === "name"
                                ? "ring-2 ring-accent/50"
                                : ""
                            }`}
                          />
                        </motion.div>
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p
                              className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1"
                              initial={{ opacity: 0, y: -10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                animate={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                              >
                                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              </motion.div>
                              <span className="break-words">{errors.name}</span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <motion.div
                          animate={
                            focusedField === "email"
                              ? { scale: 1.02 }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`glass transition-all duration-300 border border-border/50 ${
                              errors.email ? "border-red-500 animate-shake" : ""
                            } ${
                              focusedField === "email"
                                ? "ring-2 ring-accent/50"
                                : ""
                            }`}
                          />
                        </motion.div>
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p
                              className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1"
                              initial={{ opacity: 0, y: -10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                animate={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                              >
                                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              </motion.div>
                              <span className="break-words">
                                {errors.email}
                              </span>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Subject and Message fields with improved mobile spacing */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <motion.div
                        animate={
                          focusedField === "subject"
                            ? { scale: 1.02 }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange("subject", e.target.value)
                          }
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className={`glass transition-all duration-300 border border-border/50 ${
                            errors.subject ? "border-red-500 animate-shake" : ""
                          } ${
                            focusedField === "subject"
                              ? "ring-2 ring-accent/50"
                              : ""
                          }`}
                        />
                      </motion.div>
                      <AnimatePresence>
                        {errors.subject && (
                          <motion.p
                            className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1"
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            </motion.div>
                            <span className="break-words">
                              {errors.subject}
                            </span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.div
                        animate={
                          focusedField === "message"
                            ? { scale: 1.02 }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.2 }}
                      >
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`glass resize-none transition-all duration-300 border border-border/50 ${
                            errors.message ? "border-red-500 animate-shake" : ""
                          } ${
                            focusedField === "message"
                              ? "ring-2 ring-accent/50"
                              : ""
                          }`}
                        />
                      </motion.div>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1"
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            </motion.div>
                            <span className="break-words">
                              {errors.message}
                            </span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      variants={hoverScale}
                      whileHover="hover"
                      whileTap="tap"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              className="flex items-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <motion.div
                                className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />
                              Sending...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              className="flex items-center cursor-pointer"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <motion.div
                                animate={{ x: [0, 3, 0] }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                }}
                              >
                                <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                              </motion.div>
                              Send Message
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>

                    {/* Status Messages */}
                    <AnimatePresence>
                      {submitStatus === "success" && (
                        <motion.div
                          className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.5 }}
                          >
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                          </motion.div>
                          <span className="text-xs sm:text-sm text-green-600 dark:text-green-400">
                            Message sent successfully! I'll get back to you
                            soon.
                          </span>
                        </motion.div>
                      )}

                      {submitStatus === "error" && (
                        <motion.div
                          className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0" />
                          </motion.div>
                          <span className="text-xs sm:text-sm text-red-600 dark:text-red-400">
                            Failed to send message. Please try again or contact
                            me directly.
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </CardContent>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
