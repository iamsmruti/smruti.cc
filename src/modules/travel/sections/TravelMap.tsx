import { useState, useEffect, useRef, useLayoutEffect, CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ComposableMap, Geographies, Geography, Marker, ZoomableGroup,
} from 'react-simple-maps'
import { useTravelContext } from '../context/TravelContext'
import { useSectionTimer } from '../../../hooks/useSectionTimer'
import TripStoryModal from './TripStoryModal'

const INDIA_GEO = '/india-states.geojson'
const WORLD_GEO = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const MODAL_W = 340
const MODAL_H = 260

function stateFill(count: number, hovered: boolean): string {
  const boost = hovered ? 0.1 : 0
  if (count <= 0) return hovered ? '#111e35' : '#0b1628'
  if (count >= 15) return `rgba(59,130,246,${0.50 + boost})`
  if (count >= 6)  return `rgba(59,130,246,${0.32 + boost})`
  if (count >= 3)  return `rgba(59,130,246,${0.22 + boost})`
  if (count >= 2)  return `rgba(59,130,246,${0.16 + boost})`
  return `rgba(59,130,246,${0.11 + boost})`
}

function stateStroke(count: number): string {
  if (count <= 0) return '#172238'
  if (count >= 15) return 'rgba(59,130,246,0.80)'
  if (count >= 6)  return 'rgba(59,130,246,0.55)'
  return 'rgba(59,130,246,0.38)'
}

function calcModalStyle(
  pinX: number, pinY: number,
  mapW: number, mapH: number
): CSSProperties {
  const GAP = 8
  const PIN_HALF_H = 20 // visual top of pin above the tracked coordinate

  // --- Horizontal ---
  let left: number | undefined
  let right: number | undefined
  if (pinX + GAP + MODAL_W <= mapW - 8) {
    left = pinX + GAP                        // right of pin
  } else if (pinX - GAP - MODAL_W >= 8) {
    left = pinX - GAP - MODAL_W             // left of pin
  } else {
    left = Math.max(8, mapW / 2 - MODAL_W / 2) // centre fallback
  }

  // --- Vertical: align top of modal with top of pin body ---
  let top = pinY - PIN_HALF_H
  top = Math.max(8, Math.min(mapH - MODAL_H - 8, top))

  return { position: 'absolute', top, left, right, width: MODAL_W }
}

export default function TravelMap() {
  const sectionRef = useSectionTimer('travel-map')
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const hintTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const { visitIntensity, selectedTrip, setSelectedTrip, hoveredTrip, showModal, setShowModal } = useTravelContext()
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [center, setCenter] = useState<[number, number]>([82, 22])
  const [scrollHint, setScrollHint] = useState(false)
  // Capture pin position AND map dimensions together in one RAF — avoids stale-dimension bug
  const [pinInfo, setPinInfo] = useState<{ x: number; y: number; mapW: number; mapH: number } | null>(null)

  const activePin = hoveredTrip ?? selectedTrip
  const activeModalTrip = showModal ? activePin : null

  useLayoutEffect(() => {
    if (!activePin) { setPinInfo(null); return }

    const id = requestAnimationFrame(() => {
      const container = mapContainerRef.current
      const tracker = container?.querySelector(`[data-pin-tracker="${activePin.slug}"]`)
      if (!tracker || !container) return
      const pinRect = tracker.getBoundingClientRect()
      const cRect = container.getBoundingClientRect()
      setPinInfo({
        x: pinRect.left - cRect.left + pinRect.width / 2,
        y: pinRect.top  - cRect.top  + pinRect.height / 2,
        mapW: container.clientWidth,
        mapH: container.clientHeight,
      })
    })

    return () => cancelAnimationFrame(id)
  }, [activePin, zoom, center])

  // Cmd/Ctrl + scroll to zoom
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const handler = (e: WheelEvent) => {
      if (e.metaKey || e.ctrlKey) {
        e.preventDefault()
      } else {
        e.stopImmediatePropagation()
        setScrollHint(true)
        clearTimeout(hintTimer.current)
        hintTimer.current = setTimeout(() => setScrollHint(false), 1600)
      }
    }
    el.addEventListener('wheel', handler, { capture: true, passive: false })
    return () => {
      el.removeEventListener('wheel', handler, { capture: true })
      clearTimeout(hintTimer.current)
    }
  }, [])

  const modalStyle = pinInfo
    ? calcModalStyle(pinInfo.x, pinInfo.y, pinInfo.mapW, pinInfo.mapH)
    : undefined

  return (
    <>
      <div
        ref={(el) => {
          (sectionRef as any).current = el
          mapContainerRef.current = el
        }}
        className="flex-1 relative overflow-hidden"
        style={{ background: '#030712' }}
      >
        <div ref={wrapperRef} className="w-full h-full">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ center: [82, 22], scale: 900 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ZoomableGroup
              zoom={zoom}
              center={center}
              minZoom={0.8}
              maxZoom={14}
              onMoveEnd={({ zoom: z, coordinates }) => {
                setZoom(z)
                setCenter(coordinates as [number, number])
              }}
            >
              {/* World background */}
              <Geographies geography={WORLD_GEO}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => (
                    <Geography key={geo.rsmKey} geography={geo}
                      fill="#0a1628" stroke="#122040" strokeWidth={0.3}
                      style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                    />
                  ))
                }
              </Geographies>

              {/* India state heatmap */}
              <Geographies geography={INDIA_GEO}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => {
                    const name: string = geo.properties.NAME_1 ?? ''
                    const count = visitIntensity[name] ?? 0
                    const isHov = hoveredState === name
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={stateFill(count, isHov)}
                        stroke={stateStroke(count)}
                        strokeWidth={0.6}
                        onMouseEnter={() => setHoveredState(name)}
                        onMouseLeave={() => setHoveredState(null)}
                        style={{
                          default: { outline: 'none', transition: 'fill 0.4s ease' },
                          hover: { outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    )
                  })
                }
              </Geographies>

              {/* Animated pin */}
              <AnimatePresence>
                {activePin && (
                  <Marker
                    key={activePin.slug}
                    coordinates={[activePin.coordinates[1], activePin.coordinates[0]]}
                  >
                    {/* Invisible tracker dot — used to measure screen position */}
                    <circle r={1} opacity={0} data-pin-tracker={activePin.slug} />

                    {/* Pulse ring anchored at geographic coordinate */}
                    <motion.circle
                      r={14} fill="none" stroke="#3b82f6" strokeWidth={1}
                      animate={{ r: [12, 22], opacity: [0.5, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                    />

                    <motion.g
                      initial={{ scale: 0, opacity: 0, y: -12 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0, opacity: 0, y: -8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      style={{ transformOrigin: '0px 0px' }}
                    >
                      {/* Tip at (0,0) = geographic coordinate; body rises above */}
                      <path
                        d="M0 0 C-9 -10 -13 -16 -13 -22 A13 13 0 1 1 13 -22 C13 -16 9 -10 0 0 Z"
                        fill="#3b82f6"
                        stroke="rgba(147,197,253,0.4)"
                        strokeWidth="1"
                        style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.9))' }}
                      />
                      <circle cx="0" cy="-22" r="5" fill="rgba(255,255,255,0.92)" />
                    </motion.g>
                  </Marker>
                )}
              </AnimatePresence>
            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* Scroll hint */}
        <AnimatePresence>
          {scrollHint && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none glass rounded-xl px-5 py-3 whitespace-nowrap"
            >
              <p className="text-white text-sm font-light">
                Hold <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-xs font-mono">⌘</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-xs font-mono">Ctrl</kbd> + scroll to zoom
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zoom buttons */}
        <div className="absolute top-5 right-5 z-20 flex flex-col gap-1">
          <button onClick={() => setZoom(z => Math.min(14, z * 1.5))}
            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white text-lg transition-colors leading-none">+</button>
          <button onClick={() => setZoom(z => Math.max(0.8, z / 1.5))}
            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white text-lg transition-colors leading-none">−</button>
        </div>

        {/* Hovered state label */}
        <AnimatePresence>
          {hoveredState && (visitIntensity[hoveredState] ?? 0) > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="absolute top-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
              <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-3">
                <span className="text-white text-sm font-light">
                  {hoveredState === 'Orissa' ? 'Odisha' : hoveredState}
                </span>
                <div className="w-px h-3 bg-white/20" />
                <span className="text-[#3b82f6] text-xs">
                  {visitIntensity[hoveredState]} {visitIntensity[hoveredState] === 1 ? 'trip' : 'trips'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle zoom hint */}
        <div className="absolute bottom-5 right-5 z-10 pointer-events-none opacity-40">
          <p className="text-[9px] text-gray-500 tracking-wide">⌘/Ctrl + scroll to zoom</p>
        </div>

        {/* Story modal — positioned relative to pin */}
        <AnimatePresence>
          {activeModalTrip && modalStyle && (
            <TripStoryModal
              trip={activeModalTrip}
              style={modalStyle}
              onClose={() => { setSelectedTrip(null); setShowModal(false) }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
