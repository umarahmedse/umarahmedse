"use client"

import { useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [controls, inView])

  return { ref, controls }
}

export const useStaggerAnimation = (delay = 0.1) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [controls, inView])

  return { ref, controls, delay }
}

export const useParallaxAnimation = (offset = 50) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  return { ref, inView, offset }
}
