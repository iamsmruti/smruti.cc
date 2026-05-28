import { useNavigate } from "react-router-dom"
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

  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        {sortedYears.map((year, yearIndex) => (
          <div key={year} className="mb-20">
            {/* Year header */}
            <div className="flex items-center gap-6 mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: `${yearIndex * 0.15}s`, animationFillMode: "forwards" }}>
              <h2 className="text-4xl md:text-5xl font-[200] text-[#4c82c5] tracking-tight">{year}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#4c82c5]/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {groupedTrips[year].map((trip, tripIndex) => {
                const globalIndex = yearIndex * 5 + tripIndex

                return (
                  <div
                    key={tripIndex}
                    onClick={() => navigate(`/travel-log/${trip.slug}`)}
                    className="group light-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full opacity-0 animate-fade-in-up"
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
                          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#F59E0B30 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                        </div>
                      )}

                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 flex items-center justify-center text-xl shadow-sm">
                        {trip.emoji}
                      </div>

                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-light text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span>Read Story</span>
                        <span>→</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-semibold text-white group-hover:text-[#4c82c5] transition-colors mb-1">{trip.destination}</h3>
                      <span className="text-xs text-gray-400 font-light mb-3 block">{trip.date}</span>

                      {trip.story ? (
                        <p className="text-gray-500 font-light text-sm line-clamp-2 leading-relaxed">
                          {trip.story}
                        </p>
                      ) : (
                        <p className="text-gray-400 font-light text-sm italic">
                          Photos & stories coming soon...
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
