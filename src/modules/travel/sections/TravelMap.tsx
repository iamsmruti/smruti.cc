import { Map, Marker } from 'pigeon-maps'
import { useNavigate } from 'react-router-dom'
import trips from '../data/trips'
import { useSectionTimer } from '../../../hooks/useSectionTimer'

// Custom map style using MapTiler's basic dark theme
// Note: pigeon-maps default OSM provider is fine too, but MapTiler looks better for dark mode if you have a key.
// Without a key, we'll use a custom dark theme provider built over standard OSM
function customDarkProvider(x: number, y: number, z: number) {
  // Free CartoDB dark matter tiles
  return `https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/${z}/${x}/${y}.png`
}

const TravelMap = () => {
  const ref = useSectionTimer("travel-map")
  const navigate = useNavigate()

  return (
    <div ref={ref as any} className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-6 mb-10 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extralight text-[#4c82c5] tracking-tight">Footprints</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#4c82c5]/30 to-transparent" />
        </div>

        <div className="glass rounded-3xl overflow-hidden h-[500px] md:h-[600px] w-full relative group shadow-2xl shadow-black/50 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {/* Overlay to allow scrolling over the map without trapping the scroll wheel immediately */}
          <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl z-10" />
          
          <Map 
            provider={customDarkProvider} 
            defaultCenter={[20.5937, 78.9629]} // Center of India
            defaultZoom={5} 
            maxZoom={12}
            minZoom={4}
            metaWheelZoom={true} // Requires meta key (Cmd/Ctrl) to scroll zoom so user doesn't get stuck
          >
            {trips.map((trip, i) => (
              <Marker 
                key={i} 
                width={40} 
                anchor={trip.coordinates} 
                onClick={() => navigate(`/travel/${trip.slug}`)}
                hover={true}
              >
                <div className="group/marker cursor-pointer relative flex items-center justify-center translate-y-[-50%]">
                  {/* Map Pin UI */}
                  <div className="w-10 h-10 bg-black/60 backdrop-blur-md border border-[#4c82c5]/50 rounded-full flex items-center justify-center text-xl shadow-lg z-10 relative hover:scale-125 transition-transform duration-300 hover:bg-[#4c82c5]/20">
                    {trip.emoji}
                  </div>
                  
                  {/* Ping animation behind the marker */}
                  <div className="absolute inset-0 w-full h-full rounded-full bg-[#4c82c5] opacity-20 animate-ping" style={{ animationDuration: '3s' }} />

                  {/* Tooltip on Hover */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                    <p className="text-[#4c82c5] font-medium text-sm">{trip.destination}</p>
                    <p className="text-gray-400 font-light text-xs">{trip.date}</p>
                  </div>
                </div>
              </Marker>
            ))}
          </Map>
        </div>
        <p className="text-center text-gray-500 font-light text-sm italic mt-4 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Scroll with Cmd/Ctrl to zoom. Click any pin to open the travel log.
        </p>
      </div>
    </div>
  )
}

export default TravelMap
