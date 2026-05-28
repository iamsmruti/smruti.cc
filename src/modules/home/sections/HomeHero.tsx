import { useEffect, useState, useMemo } from "react"

const roles = [
  { text: "Software Engineer", color: "#6C63FF" },
  { text: "Author", color: "#D97706" },
  { text: "Content Creator", color: "#EF4444" },
  { text: "Traveler", color: "#F59E0B" },
  { text: "Builder", color: "#10B981" },
]

const HomeHero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setFade(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 13) % 100}%`,
      size: 3 + (i % 4),
      delay: (i * 0.7) % 6,
      duration: 8 + (i % 5) * 2,
    })), [])

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] relative px-4 overflow-hidden">
      {/* Subtle ambient tint */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] bg-[#4c82c5] opacity-[0.08] pointer-events-none" />

      {/* Floating dots */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none opacity-[0.08]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: "#4c82c5",
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Status badge */}
      <div className="px-5 py-2 bg-white/[0.03] border border-white/[0.06] rounded-full flex items-center gap-2.5 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        <p className="text-xs text-gray-500 font-light tracking-wider uppercase">Open for Collaborations</p>
      </div>

      {/* Name */}
      <h1 className="md:text-8xl sm:text-6xl text-4xl text-center mb-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        <span className="font-[200] text-gray-400">I'm </span>
        <span className="font-[300] tracking-tight text-white">Smruti Ranjan</span>
      </h1>

      {/* Rotating role */}
      <div className="h-10 flex items-center justify-center mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
        <p
          className="text-xl md:text-2xl font-light tracking-wide transition-all duration-400"
          style={{
            color: roles[currentRole].color,
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {roles[currentRole].text}
        </p>
      </div>

      {/* Thin separator */}
      <div
        className="w-12 h-px mb-8 opacity-0 animate-fade-in-up transition-colors duration-1000"
        style={{ backgroundColor: roles[currentRole].color + "40", animationDelay: "0.55s", animationFillMode: "forwards" }}
      />

      {/* Description */}
      <p className="text-gray-500 text-center max-w-md text-base font-light leading-relaxed mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
        I build software, write books, make videos, and travel when I can.<br />
      </p>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
        <button
          onClick={() => {
            document.getElementById("life-worlds")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="px-7 py-3 bg-white text-black rounded-xl text-sm font-medium hover:bg-gray-100 transition-all"
        >
          Explore My World
        </button>
        <a
          href="/portfolio"
          className="px-7 py-3 border border-white/[0.08] rounded-xl text-sm font-light text-gray-400 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.03] transition-all"
        >
          Hire Me
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
        <p className="text-[10px] text-gray-400 mb-3 tracking-[0.25em] uppercase font-light">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </div>
  )
}

export default HomeHero
