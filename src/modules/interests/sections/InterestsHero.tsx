const InterestsHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] relative px-4">
      {/* Indigo glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] bg-[#8B5CF6] opacity-10 pointer-events-none" />

      <span className="text-6xl mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>🌌</span>

      <h1 className="md:text-6xl sm:text-4xl text-3xl text-center font-light mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <span className="font-extralight text-gray-400">Things I </span>
        <span className="font-normal text-[#8B5CF6]">Love</span>
      </h1>

      <p className="text-gray-400 text-center max-w-lg text-lg font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        Gaming, reading, amateur astronomy, and writing that has nothing to do with software. These are the interests that don't fit anywhere else — which is exactly why they have their own page.
      </p>
    </div>
  )
}

export default InterestsHero
