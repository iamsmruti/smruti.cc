const topics = [
  { name: "Black Holes", description: "The most fascinating objects in the universe — where spacetime bends to infinity.", emoji: "🕳️" },
  { name: "Exoplanets", description: "The search for habitable worlds beyond our solar system.", emoji: "🪐" },
  { name: "Neutron Stars", description: "The densest objects we know — a teaspoon weighs billions of tons.", emoji: "⭐" },
  { name: "The Multiverse", description: "Could there be parallel universes? The theories are mind-bending.", emoji: "🌌" },
  { name: "Dark Matter", description: "It makes up 27% of the universe but we can't see it. Yet.", emoji: "🔮" },
  { name: "Telescopes", description: "From Hubble to James Webb — the eyes that let us see the cosmos.", emoji: "🔭" },
]

const AstronomySection = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🔭</span>
          <p className="sm:text-4xl text-2xl">
            <span className="font-extralight text-gray-400">I Stare at </span>
            <span className="font-light">Stars</span>
          </p>
        </div>
        <p className="text-gray-500 mb-10 font-light">
          The universe is 13.8 billion years old and we're here for a blink. Astronomy reminds me of how small and lucky we are.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, i) => (
            <div
              key={topic.name}
              className="group glass rounded-2xl p-6 card-hover relative overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] bg-[#8B5CF6] opacity-0 group-hover:opacity-15 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-3xl block mb-3">{topic.emoji}</span>
                <h4 className="text-lg font-medium text-[#8B5CF6] mb-2">{topic.name}</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AstronomySection
