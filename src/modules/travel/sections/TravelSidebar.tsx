import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTravelContext, parseTripDate } from '../context/TravelContext'
import { tripStateMap } from '../data/tripStateMap'
import { Trip } from '../data/trips'

const MODAL_DELAY = 900 // ms before modal fades in on hover

const StatItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col">
    <motion.span
      className="text-2xl font-light text-white leading-none"
      key={value}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {value}
    </motion.span>
    <span className="text-[9px] text-gray-600 uppercase tracking-widest mt-1">{label}</span>
  </div>
)

const TripCard = ({ trip, index }: { trip: Trip; index: number }) => {
  const { selectedTrip, setSelectedTrip, hoveredTrip, setHoveredTrip, setShowModal } = useTravelContext()
  const isSelected = selectedTrip?.slug === trip.slug
  const isHovered = hoveredTrip?.slug === trip.slug
  const state = tripStateMap[trip.slug]
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleMouseEnter = () => {
    setHoveredTrip(trip)
    clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setShowModal(true), MODAL_DELAY)
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer.current)
    setHoveredTrip(null)
    // Only hide modal if no selected trip is holding it open
    setShowModal(false)
  }

  const handleClick = () => {
    clearTimeout(hoverTimer.current)
    const next = isSelected ? null : trip
    setSelectedTrip(next)
    setShowModal(next !== null)
  }

  return (
    <motion.button
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.22, delay: index * 0.018 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`w-full text-left rounded-xl px-3 py-3 transition-all duration-200 border-l-2 ${
        isSelected
          ? 'bg-[#0f172a] border-[#3b82f6]'
          : isHovered
          ? 'bg-white/[0.03] border-[#3b82f6]/40'
          : 'bg-transparent border-transparent hover:bg-white/[0.02]'
      }`}
    >
      <div className="flex items-start gap-3">
        {trip.coverImage && (
          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 opacity-80">
            <img src={trip.coverImage} alt={trip.destination} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-light truncate leading-tight transition-colors ${
            isSelected || isHovered ? 'text-white' : 'text-gray-400'
          }`}>
            {trip.destination}
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            {state && (
              <span className="text-[9px] text-gray-600 truncate">
                {state === 'Orissa' ? 'Odisha' : state}
              </span>
            )}
            {state && <span className="text-[9px] text-gray-700">·</span>}
            <span className="text-[9px] text-[#3b82f6]/60">{trip.date}</span>
          </div>
          {trip.story && (
            <p className="text-[10px] text-gray-600 mt-1 line-clamp-1 font-light leading-relaxed">
              {trip.story}
            </p>
          )}
        </div>
        {(isHovered || isSelected) && (
          <div className="flex-shrink-0 self-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
          </div>
        )}
      </div>
    </motion.button>
  )
}

export default function TravelSidebar() {
  const { activeYear, setActiveYear, years, filteredTrips, visitIntensity } = useTravelContext()
  const scrollRef = useRef<HTMLDivElement>(null)

  const statesVisited = Object.keys(visitIntensity).length
  const countries = filteredTrips.some(t => t.slug === 'phuket-thailand-march-2024') ? 2 : 1

  const grouped = filteredTrips.reduce<Record<string, Trip[]>>((acc, trip) => {
    const year = trip.date.split(' ').pop() ?? ''
    if (!acc[year]) acc[year] = []
    acc[year].push(trip)
    return acc
  }, {})

  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a))
  for (const year of sortedYears) {
    grouped[year].sort((a, b) => parseTripDate(b.date).getTime() - parseTripDate(a.date).getTime())
  }

  return (
    <div className="flex flex-col w-[280px] flex-shrink-0 bg-[#020617] border-r border-white/[0.05] h-full">

      {/* Header */}
      <div className="px-5 pt-6 pb-3 flex-shrink-0">
        <p className="text-lg font-light text-white mb-0.5">
          <span className="text-gray-500 font-[200]">Travel </span>
          <span className="text-[#3b82f6]">Log</span>
        </p>
        <p className="text-[10px] text-gray-600">Hover to peek · Click for story</p>
      </div>

      {/* Year filter */}
      <div className="px-4 pb-3 flex-shrink-0">
        <div className="flex gap-1 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {['All', ...years].map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-medium transition-all ${
                activeYear === year
                  ? 'bg-[#1d4ed8]/20 text-[#93c5fd] border border-[#3b82f6]/30'
                  : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 mb-3 rounded-xl flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex justify-between px-4 py-3">
          <StatItem value={filteredTrips.length} label="Trips" />
          <div className="w-px bg-white/[0.04]" />
          <StatItem value={statesVisited} label="States" />
          <div className="w-px bg-white/[0.04]" />
          <StatItem value={countries} label="Countries" />
        </div>
      </div>

      {/* Trip list */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-3 pb-6"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e3a5f transparent' }}
      >
        <AnimatePresence mode="popLayout">
          {sortedYears.map(year => (
            <motion.div
              key={`${year}-${activeYear}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <div className="flex items-center gap-2 mb-1 px-1">
                <span className="text-[9px] font-medium text-[#3b82f6]/50 uppercase tracking-widest">{year}</span>
                <div className="flex-1 h-px bg-[#3b82f6]/10" />
                <span className="text-[9px] text-gray-700">{grouped[year].length}</span>
              </div>
              {grouped[year].map((trip, i) => (
                <TripCard key={trip.slug} trip={trip} index={i} />
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
