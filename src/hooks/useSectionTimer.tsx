import { useEffect, useRef } from "react"
import { event as trackEvent } from "../utils/gtag"

export const useSectionTimer = (sectionName: string) => {
  const ref = useRef<HTMLElement | null>(null)
  const startTime = useRef<number | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTime.current = performance.now()
        } else if (startTime.current) {
          const durationMs = performance.now() - startTime.current
          const durationSec = Math.round(durationMs / 1000)  // convert to seconds
          if (durationSec > 1) {  // keep your threshold in seconds
            trackEvent({
              action: "section_view_time",
              category: "engagement",
              label: sectionName,
              value: durationSec,
            })
          }
          startTime.current = null
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [sectionName])

  return ref
}
