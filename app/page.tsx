"use client"

import { Suspense, lazy } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ErrorBoundary } from "@/components/error-boundary"
import { LoadingSkeleton } from "@/components/loading-spinner"
import "./globals.css"

const AboutSection = lazy(() =>
  import("@/components/about-section").then((module) => ({ default: module.AboutSection })),
)
const SkillsSection = lazy(() =>
  import("@/components/skills-section").then((module) => ({ default: module.SkillsSection })),
)
const ServicesSection = lazy(() =>
  import("@/components/services-section").then((module) => ({ default: module.ServicesSection })),
)
const TestimonialsSection = lazy(() =>
  import("@/components/testimonials-section").then((module) => ({ default: module.TestimonialsSection })),
)
const AchievementsSection = lazy(() =>
  import("@/components/achievements-section").then((module) => ({ default: module.AchievementsSection })),
)
const EnhancedContactSection = lazy(() =>
  import("@/components/enhanced-contact-section").then((module) => ({ default: module.EnhancedContactSection })),
)
const Footer = lazy(() => import("@/components/footer").then((module) => ({ default: module.Footer })))

function SectionLoader() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <LoadingSkeleton className="h-10 sm:h-12 w-48 sm:w-64 mx-auto" />
        <LoadingSkeleton className="h-4 sm:h-6 w-72 sm:w-96 mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <LoadingSkeleton className="h-48 sm:h-64" />
          <LoadingSkeleton className="h-48 sm:h-64" />
          <LoadingSkeleton className="h-48 sm:h-64 hidden lg:block" />
        </div>
      </div>
    </div>
  )
}
export default function Portfolio() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Resume - Umar Ahmed.pdf"
    link.download = "Resume - Umar Ahmed.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <Navigation />
        <section id="home">
          <HeroSection onDownloadResume={handleDownloadResume} />
        </section>

        <section id="about">
          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <AboutSection />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section id="skills">
          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <SkillsSection />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section id="services">
          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <ServicesSection />
            </Suspense>
          </ErrorBoundary>
        </section>

        {/* <section id="testimonials">
          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <TestimonialsSection />
            </Suspense>
          </ErrorBoundary>
        </section> */}

        <section id="achievements">
          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <AchievementsSection />
            </Suspense>
          </ErrorBoundary>
        </section>

        <section id="contact">
          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <EnhancedContactSection onDownloadResume={handleDownloadResume} />
            </Suspense>
          </ErrorBoundary>
        </section>

        <ErrorBoundary fallback={<div className="h-32 bg-muted/30" />}>
          <Suspense fallback={<LoadingSkeleton className="h-32" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  )
}
