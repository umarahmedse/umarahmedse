//@ts-nocheck
"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"
import { pageTransition } from "@/lib/animations"

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionArticle = motion.article
export const MotionButton = motion.button
export const MotionSpan = motion.span
export const MotionH1 = motion.h1
export const MotionH2 = motion.h2
export const MotionH3 = motion.h3
export const MotionP = motion.p
export const MotionImg = motion.img

export const PageWrapper = ({ children, className = "" }: MotionWrapperProps) => {
  return (
    <motion.div className={className} variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

export const SectionWrapper = ({ children, className = "", delay = 0 }: MotionWrapperProps) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    >
      {children}
    </motion.section>
  )
}

export const StaggerWrapper = ({ children, className = "", delay = 0.1 }: MotionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: delay,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export { AnimatePresence }
