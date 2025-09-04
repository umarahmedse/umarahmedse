"use client"

import { useScroll, useTransform, useSpring, type MotionValue } from "framer-motion"
import type { RefObject } from "react"

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

export const useScrollProgress = (target: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  })

  return scrollYProgress
}

export const useScrollScale = (target: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  })

  return useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
}

export const useScrollOpacity = (target: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  })

  return useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
}

export const useScrollRotate = (target: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  })

  return useTransform(scrollYProgress, [0, 1], [0, 360])
}

export const useSmoothTransform = (value: MotionValue<number>, springConfig = { stiffness: 100, damping: 30 }) => {
  return useSpring(value, springConfig)
}
