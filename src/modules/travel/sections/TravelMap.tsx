import { useState } from 'react'
import { Map, Marker } from 'pigeon-maps'
import trips, { Trip } from '../data/trips'
import { useSectionTimer } from '../../../hooks/useSectionTimer'
import TripModal from './TripModal'

function darkProvider(x: number, y: number, z: number) {
  return `https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/${z}/${x}/${y}.png`
}

const uniquePlaces = new Set(trips.map(t => t.destination)).size
const STATES = 11
const COUNTRIES = 2

const TravelMap = () => {
  const ref = useSectionTimer("travel-map")
  const [selected, setSelected] = useState<Trip | null>(null)

  return (
    <>
      <div ref={ref as any} className="w-full relative" style={{ height: "90vh" }}>

        <Map
          provider={darkProvider}
          defaultCenter={[22, 82]}
          defaultZoom={5}
          maxZoom={13}
          minZoom={3}
          metaWheelZoom={true}
        >
          {trips.map((trip, i) => (
            <Marker
              key={i}
              width={28}
              anchor={trip.coordinates}
              onClick={() => setSelected(trip)}
            >
              <div className="relative flex items-center justify-center cursor-pointer group -translate-x-1/2 -translate-y-1/2">
                {/* Pulse ring */}
                <div
                  className="absolute w-5 h-5 rounded-full bg-[#4c82c5] opacity-25 animate-ping"
                  style={{ animationDuration: "2.8s", animationDelay: `${(i * 0.3) % 2}s` }}
                />
                {/* Dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#4c82c5] border border-white/30 shadow-md shadow-[#4c82c5]/40 relative z-10 group-hover:scale-150 group-hover:bg-white transition-all duration-200" />

                {/* Tooltip */}
                <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/[0.08] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap shadow-xl">
                  <p className="text-white text-xs font-light">{trip.destination}</p>
                  <p className="text-[#4c82c5] text-[10px] font-light">{trip.date}</p>
                </div>
              </div>
            </Marker>
          ))}
        </Map>

        {/* Title overlay — top left */}
        <div className="absolute top-6 left-6 z-20 pointer-events-none">
          <p className="text-2xl font-light text-white drop-shadow-lg">
            <span className="font-[200] text-gray-400">Travel </span>
            <span className="text-[#4c82c5]">Log</span>
          </p>
          <p className="text-[10px] text-gray-600 font-light mt-1 tracking-wide">Cmd / Ctrl + scroll to zoom</p>
        </div>

        {/* Stats overlay — bottom left */}
        <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
          <div className="glass rounded-2xl px-5 py-4">
            <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-medium mb-3">My Footprints</p>
            <div className="flex gap-5">
              {[
                { value: trips.length, label: "Trips" },
                { value: uniquePlaces, label: "Places" },
                { value: STATES, label: "States" },
                { value: COUNTRIES, label: "Countries" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-xl font-light text-white leading-none">{value}</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-wider mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint — bottom right */}
        <div className="absolute bottom-6 right-6 z-20 pointer-events-none flex flex-col items-center gap-2 opacity-60">
          <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">Scroll to explore</p>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>

      {selected && <TripModal trip={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

export default TravelMap
