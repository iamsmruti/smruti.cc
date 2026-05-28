import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import trips, { Trip } from "../data/trips"

const groupedTrips = trips.reduce((acc, trip) => {
  const year = trip.date.split(" ").pop() || "Unknown"
  if (!acc[year]) acc[year] = []
  acc[year].push(trip)
  return acc
}, {} as Record<string, Trip[]>)

const sortedYears = Object.keys(groupedTrips).sort((a, b) => Number(b) - Number(a))

const TravelTimeline = () => {
  const navigate = useNavigate()
  const [activeYear, setActiveYear] = useState(sortedYears[0])
  const [scrubberVisible, setScrubberVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const visObs = new IntersectionObserver(
      ([e]) => setScrubberVisible(e.isIntersecting),
      { threshold: 0 }
    )
    visObs.observe(container)

    const yearObs = sortedYears.map(year => {
      const el = document.getElementById(`yr-${year}`)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveYear(year) },
        { rootMargin: '0px 0px -75% 0px' }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean) as IntersectionObserver[]

    return () => {
      visObs.disconnect()
      yearObs.forEach(o => o.disconnect())
    }
  }, [])

  const scrollToYear = (year: string) => {
    document.getElementById(`yr-${year}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={containerRef} className="page-section px-4 pt-16">
      {/* Year scrubber — fixed right edge, Google Photos style */}
      <div
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 select-none transition-opacity duration-300 ${
          scrubberVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Track line */}
        <div className="absolute right-[3px] top-0 bottom-0 w-px bg-white/[0.08]" />

        {sortedYears.map(year => {
          const isActive = activeYear === year
          return (
            <button
              key={year}
              onClick={() => scrollToYear(year)}
              className="flex items-center gap-2 group transition-all duration-200"
            >
              <span className={`font-mono leading-none transition-all duration-200 ${
                isActive
                  ? 'text-[11px] text-[#4c82c5] opacity-100'
                  : 'text-[9px] text-gray-600 opacity-60 group-hover:opacity-100 group-hover:text-gray-400'
              }`}>
                {year}
              </span>
              <div className={`rounded-full flex-shrink-0 transition-all duration-200 ${
                isActive ? 'w-[7px] h-[7px] bg-[#4c82c5]' : 'w-[3px] h-[3px] bg-gray-700 group-hover:bg-gray-500'
              }`} />
            </button>
          )
        })}
      </div>

      <div className="max-w-5xl mx-auto">
        {sortedYears.map((year, yearIndex) => (
          <div key={year} id={`yr-${year}`} className="mb-20">
            {/* Year header */}
            <div
              className="flex items-center gap-6 mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${yearIndex * 0.15}s`, animationFillMode: "forwards" }}
            >
              <h2 className="text-4xl md:text-5xl font-[200] text-[#4c82c5] tracking-tight">{year}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#4c82c5]/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {groupedTrips[year].map((trip, tripIndex) => {
                const globalIndex = yearIndex * 5 + tripIndex
                const hasImage = !!(trip.coverImage || (trip.gallery && trip.gallery.length > 0))

                return (
                  <div
                    key={tripIndex}
                    onClick={() => hasImage && navigate(`/travel-log/${trip.slug}`)}
                    className={`group light-card rounded-2xl overflow-hidden flex flex-col h-full opacity-0 animate-fade-in-up ${hasImage ? 'cursor-pointer' : 'cursor-default'}`}
                    style={{ animationDelay: `${Math.min(globalIndex * 0.05, 1.5)}s`, animationFillMode: "forwards" }}
                  >
                    {/* Cover */}
                    <div className="h-40 md:h-48 w-full relative overflow-hidden bg-white/[0.05]">
                      {trip.coverImage ? (
                        <>
                          <img
                            src={trip.coverImage}
                            alt={trip.destination}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="absolute inset-0"
                            style={{ backgroundImage: "radial-gradient(#F59E0B30 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                          />
                        </div>
                      )}

                      {hasImage && (
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-light text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <span>Read Story</span>
                          <span>→</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-semibold text-white group-hover:text-[#4c82c5] transition-colors mb-1">
                        {trip.destination}
                      </h3>
                      <span className="text-xs text-gray-400 font-light mb-3 block">{trip.date}</span>

                      {trip.story && (
                        <p className="text-gray-500 font-light text-sm line-clamp-2 leading-relaxed">
                          {trip.story}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelTimeline
