const CreatorHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] relative px-4 overflow-hidden">
      {/* Warm ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-[#4c82c5] opacity-[0.08] pointer-events-none" />

      <span className="text-6xl mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>🎬</span>

      <h1 className="md:text-6xl sm:text-4xl text-3xl text-center font-light mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
        <span className="font-[200] text-gray-400">Content </span>
        <span className="font-normal text-[#4c82c5]">Creator</span>
      </h1>

      <p className="text-gray-500 text-center max-w-lg text-lg font-light leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        I create for the internet — tutorials, vlogs, written deep-dives, and experiments. Below you'll find my 3 YouTube channels, each with their own focus and platform.
      </p>
    </div>
  )
}

export default CreatorHero
