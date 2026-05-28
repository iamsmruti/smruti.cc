import { useEffect, CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { Trip } from '../data/trips'

interface Props {
  trip: Trip
  onClose: () => void
  style?: CSSProperties
}

export default function TripStoryModal({ trip, onClose, style }: Props) {
  const images: string[] = []
  if (trip.gallery && trip.gallery.length > 0) {
    images.push(...trip.gallery.slice(0, 3))
  } else if (trip.coverImage) {
    images.push(trip.coverImage)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      className="z-30 rounded-xl pointer-events-auto overflow-hidden"
      style={{
        ...style,
        background: 'rgba(6, 12, 28, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(59,130,246,0.2)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)',
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:text-white transition-colors z-10"
        style={{ background: 'rgba(0,0,0,0.5)' }}
      >
        <HiX className="text-[10px]" />
      </button>

      {/* Images */}
      {images.length > 0 ? (
        <div className={`grid gap-0.5 ${images.length >= 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {images.length >= 3 ? (
            <>
              <img src={images[0]} alt={trip.destination} className="w-full h-44 object-cover" />
              <div className="grid grid-rows-2 gap-0.5">
                <img src={images[1]} alt={trip.destination} className="w-full h-[86px] object-cover" />
                <img src={images[2]} alt={trip.destination} className="w-full h-[86px] object-cover" />
              </div>
            </>
          ) : images.length === 2 ? (
            <>
              <img src={images[0]} alt={trip.destination} className="w-full h-44 object-cover" />
              <img src={images[1]} alt={trip.destination} className="w-full h-44 object-cover" />
            </>
          ) : (
            <img src={images[0]} alt={trip.destination} className="w-full h-44 object-cover" />
          )}
        </div>
      ) : (
        /* No images — minimal placeholder with destination name */
        <div className="h-20 flex items-end px-4 pb-3"
          style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(6,12,28,0))' }}>
          <p className="text-xs text-gray-600 font-light">{trip.destination}</p>
        </div>
      )}

    </motion.div>
  )
}
