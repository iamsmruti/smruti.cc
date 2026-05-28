import { createContext, useContext, useState, useMemo, ReactNode } from 'react'
import trips, { Trip } from '../data/trips'
import { tripStateMap } from '../data/tripStateMap'

interface TravelContextType {
  activeYear: string
  setActiveYear: (y: string) => void
  selectedTrip: Trip | null
  setSelectedTrip: (t: Trip | null) => void
  hoveredTrip: Trip | null
  setHoveredTrip: (t: Trip | null) => void
  showModal: boolean
  setShowModal: (v: boolean) => void
  filteredTrips: Trip[]
  visitIntensity: Record<string, number>
  years: string[]
}

const TravelContext = createContext<TravelContextType>({} as TravelContextType)

const MONTHS: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
}

export function parseTripDate(dateStr: string): Date {
  const [month, year] = dateStr.split(' ')
  return new Date(parseInt(year), MONTHS[month] ?? 0, 1)
}

const allYears = Array.from(
  new Set(trips.map(t => t.date.split(' ').pop() ?? ''))
).sort((a, b) => Number(b) - Number(a))

export const TravelProvider = ({ children }: { children: ReactNode }) => {
  const [activeYear, setActiveYear] = useState('All')
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null)
  const [hoveredTrip, setHoveredTrip] = useState<Trip | null>(null)
  const [showModal, setShowModal] = useState(false)

  const filteredTrips = useMemo(() =>
    activeYear === 'All' ? trips : trips.filter(t => t.date.endsWith(activeYear)),
    [activeYear]
  )

  const visitIntensity = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const trip of filteredTrips) {
      const state = tripStateMap[trip.slug]
      if (state) counts[state] = (counts[state] ?? 0) + 1
    }
    return counts
  }, [filteredTrips])

  return (
    <TravelContext.Provider value={{
      activeYear, setActiveYear,
      selectedTrip, setSelectedTrip,
      hoveredTrip, setHoveredTrip,
      showModal, setShowModal,
      filteredTrips,
      visitIntensity,
      years: allYears,
    }}>
      {children}
    </TravelContext.Provider>
  )
}

export const useTravelContext = () => useContext(TravelContext)
