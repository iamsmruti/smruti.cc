import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import trips from "../data/trips"
import { FaArrowLeft } from "react-icons/fa"

const TripDetails = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const trip = trips.find((t) => t.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!trip) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-light text-white mb-4">Trip not found</h1>
        <button onClick={() => navigate("/travel-log")} className="text-[#4c82c5] hover:underline font-light">
          Return to Travel Log
        </button>
      </div>
    )
  }

  return (
    <div className="w-full relative -mx-3">
      {/* Hero */}
      <div className="relative h-[55vh] md:h-[65vh] w-full flex items-end overflow-hidden">
        {trip.coverImage ? (
          <>
            <img
              src={trip.coverImage}
              alt={trip.destination}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 to-black flex items-center justify-center">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#4c82c540 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          </div>
        )}

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 md:pb-20">
          <button
            onClick={() => navigate("/travel-log")}
            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-light"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Travel Log</span>
          </button>

          <div className="flex items-center gap-4 mb-4 animate-fade-in-up">
            <span className="text-5xl md:text-6xl drop-shadow-lg">{trip.emoji}</span>
            <span className="px-4 py-1.5 rounded-full border border-[#4c82c5]/40 bg-[#4c82c5]/10 text-[#4c82c5] font-light text-sm tracking-wide backdrop-blur-sm">
              {trip.date}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            {trip.destination}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {trip.story ? (
          <div className="mb-20">
            <p className="text-gray-400 font-light text-lg leading-relaxed whitespace-pre-line animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              {trip.story}
            </p>
          </div>
        ) : (
          <div className="text-center py-20 mb-20 bg-white/[0.03] rounded-3xl border border-white/[0.06] animate-fade-in-up">
            <p className="text-4xl mb-4">✍️</p>
            <p className="text-gray-500 font-light text-lg">Curating the stories and photos from this trip...</p>
            <p className="text-gray-400 font-light mt-2">Check back later for updates.</p>
          </div>
        )}

        {trip.highlights && trip.highlights.length > 0 && (
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-light text-[#4c82c5] mb-6">Highlights</h2>
            <div className="flex flex-wrap gap-3">
              {trip.highlights.map((h, i) => (
                <span key={i} className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 font-light">
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}

        {trip.gallery && trip.gallery.length > 0 && (
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-light text-[#4c82c5] mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4 md:gap-6">
              {trip.gallery.map((img, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden bg-white/[0.05] ${i % 3 === 0 ? "sm:col-span-2 aspect-[21/9]" : "aspect-square"}`}>
                  <img src={img} alt={`${trip.destination} gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TripDetails
