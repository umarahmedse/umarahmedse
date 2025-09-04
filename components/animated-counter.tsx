//@ts-nocheck
"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
  decimals?: number // optional override
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  className = "",
  decimals,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  // 👇 Auto-detect decimals from `end` if not explicitly provided
  const decimalPlaces =
    decimals !== undefined ? decimals : (end.toString().split(".")[1]?.length || 0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const element = elementRef.current
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startCount = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = easeOutQuart * (end - startCount) + startCount

      setCount(currentCount)

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={elementRef} className={className}>
      {count.toFixed(decimalPlaces)}
      {suffix}
    </div>
  )
}
