import { useSectionTimer } from "../../../hooks/useSectionTimer"
import { event as trackEvent } from "../../../utils/gtag"

const Hero = () => {
  const ref = useSectionTimer("hero")

  const reportResumeClick = () => {
    trackEvent({
      action: "resume_download",
      category: "engagement",
      label: "Resume Link",
    })
  }

  return (
    <div ref={ref as any} className="flex flex-col items-center justify-center min-h-[90vh] relative px-4 overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-[#4c82c5] opacity-[0.08] pointer-events-none" />

      {/* Status */}
      <div className="px-5 py-2 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-full flex items-center gap-2.5 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        <p className="text-xs text-gray-500 font-light tracking-wider uppercase">Open for Collaborations</p>
      </div>

      {/* Title */}
      <h1 className="md:text-8xl sm:text-6xl text-4xl text-center mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <span className="font-[200] text-gray-500">I'm </span>
        <span className="font-[300] tracking-tight text-white">Smruti Ranjan</span>
      </h1>

      <p className="text-xl md:text-2xl font-extralight text-[#4c82c5] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
        Software Engineer · Content Creator
      </p>

      {/* Separator */}
      <div className="w-12 h-px bg-[#4c82c5]/30 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }} />

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
        <a
          onClick={reportResumeClick}
          href="https://drive.google.com/file/d/1Rv8Iiuxh2EleqDU4AjYWvNAPgOxe128D/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 bg-white text-black rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-white/10 transition-all"
        >
          Resume
        </a>
        <button
          onClick={() => {
            const el = document.getElementById('eng-career')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-7 py-3 border border-white/[0.08] rounded-xl text-sm font-light text-gray-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.03] transition-all"
        >
          See My Work
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <p className="text-[10px] text-gray-600 mb-3 tracking-[0.25em] uppercase font-light">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </div>
  )
}

export default Hero