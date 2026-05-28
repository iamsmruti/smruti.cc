import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { HiX } from "react-icons/hi"
import { Trip } from "../data/trips"

interface Props {
  trip: Trip
  onClose: () => void
}

const TripModal = ({ trip, onClose }: Props) => {
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="relative bg-[#0A0A0A] border border-white/[0.08] rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Cover image */}
        {trip.coverImage ? (
          <div className="relative h-52 overflow-hidden rounded-t-2xl flex-shrink-0">
            <img src={trip.coverImage} alt={trip.destination} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
          </div>
        ) : (
          <div className="h-24 rounded-t-2xl bg-gradient-to-br from-[#4c82c5]/10 to-transparent border-b border-white/[0.04]" />
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
        >
          <HiX />
        </button>

        <div className={`px-6 pb-6 ${trip.coverImage ? "-mt-10 relative z-10" : "pt-5"}`}>
          {/* Header */}
          <span className="text-xs text-[#4c82c5] uppercase tracking-widest font-medium">{trip.date}</span>
          <h2 className="text-2xl font-light text-white mt-1 mb-4">{trip.destination}</h2>

          {/* Story */}
          {trip.story ? (
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-5">
              {trip.story.length > 220 ? trip.story.slice(0, 220) + "…" : trip.story}
            </p>
          ) : (
            <p className="text-gray-600 font-light text-sm italic mb-5">
              Stories and photos from this trip coming soon.
            </p>
          )}

          {/* Highlights */}
          {trip.highlights && trip.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {trip.highlights.map((h) => (
                <span key={h} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-300 font-light">
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* Gallery */}
          {trip.gallery && trip.gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mb-5">
              {trip.gallery.slice(0, 3).map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white/[0.04]">
                  <img src={img} alt={`${trip.destination} ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <button
            onClick={() => navigate(`/travel-log/${trip.slug}`)}
            className="w-full py-3 rounded-xl bg-[#4c82c5]/10 border border-[#4c82c5]/20 text-[#4c82c5] text-sm font-medium hover:bg-[#4c82c5]/20 transition-all"
          >
            Read Full Story →
          </button>
        </div>
      </div>
    </div>
  )
}

export default TripModal
