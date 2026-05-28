const genres = [
  { name: "RPG", emoji: "⚔️" },
  { name: "Open World", emoji: "🗺️" },
  { name: "Strategy", emoji: "♟️" },
  { name: "FPS", emoji: "🎯" },
]

const favorites = [
  { name: "The Witcher 3", year: "All-time favorite", emoji: "🐺" },
  { name: "GTA V", year: "Open world legend", emoji: "🚗" },
  { name: "Valorant", year: "Competitive fix", emoji: "🎯" },
  { name: "Minecraft", year: "Creative outlet", emoji: "⛏️" },
  { name: "Age of Empires", year: "Strategy classic", emoji: "🏰" },
  { name: "CS2", year: "Weekend warrior", emoji: "💣" },
]

const GamingSection = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🎮</span>
          <p className="sm:text-4xl text-2xl">
            <span className="font-extralight text-gray-400">I </span>
            <span className="font-light">Game</span>
          </p>
        </div>
        <p className="text-gray-500 mb-10 font-light">
          Gaming has been a part of my life since childhood. From competitive shooters to open-world adventures.
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-3 mb-8">
          {genres.map((g) => (
            <span key={g.name} className="text-sm px-4 py-2 rounded-full glass flex items-center gap-2">
              <span>{g.emoji}</span>
              <span className="text-gray-300 font-light">{g.name}</span>
            </span>
          ))}
        </div>

        {/* Favorite Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {favorites.map((game, i) => (
            <div
              key={game.name}
              className="glass rounded-xl p-4 card-hover group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <span className="text-3xl block mb-2">{game.emoji}</span>
              <h4 className="text-sm font-medium text-white">{game.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{game.year}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm font-light italic mt-6">
          * These are placeholder favorites — update with your real gaming preferences!
        </p>
      </div>
    </div>
  )
}

export default GamingSection
