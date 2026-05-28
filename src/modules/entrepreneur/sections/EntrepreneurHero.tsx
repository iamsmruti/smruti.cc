const EntrepreneurHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] relative px-4">
      {/* Emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] bg-[#10B981] opacity-10 pointer-events-none" />

      <span className="text-6xl mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>🚀</span>

      <h1 className="md:text-6xl sm:text-4xl text-3xl text-center font-light mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <span className="font-extralight text-gray-400">Entrepreneur </span>
        <span className="font-normal text-[#10B981]">Journey</span>
      </h1>

      <p className="text-gray-400 text-center max-w-lg text-lg font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        I started Devian Labs to build products I wanted to exist. It's early, it's scrappy, and it's the most honest thing I do. Here's what I've shipped and what's next.
      </p>
    </div>
  )
}

export default EntrepreneurHero
