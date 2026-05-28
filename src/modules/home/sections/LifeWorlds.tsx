import { useNavigate } from "react-router-dom"

const worlds = [
  {
    title: "Portfolio",
    label: "Engineering",
    description: "I've spent years building full-stack products — from internal tools at eLitmus to my own startups, Agile Coder and Devian Labs. This is the part of me that ships.",
    path: "/portfolio",
    accentColor: "#4c82c5",
    icon: "⚡",
    span: "md:col-span-2",
  },
  {
    title: "Her Struggles, My Wings",
    label: "Book",
    description: "A memoir about my mother's sacrifices and how they gave me wings to fly. Available on Amazon, Flipkart, and Pothi.",
    path: "/books",
    accentColor: "#4c82c5",
    icon: "📖",
    span: "md:col-span-1",
  },
  {
    title: "Travel Log",
    label: "Places I've Been",
    description: "New places rewire how I see familiar things. I try to get away at least twice a year — here's where I've been.",
    path: "/travel-log",
    accentColor: "#4c82c5",
    icon: "✈️",
    span: "md:col-span-1",
  },
  {
    title: "Creator",
    label: "YouTube & Blogs",
    description: "Three YouTube channels, multiple blog platforms, and a habit of writing about everything I learn. If I figure something out, I probably made content about it.",
    path: "/creator",
    accentColor: "#4c82c5",
    icon: "🎬",
    span: "md:col-span-2",
  },
]

const LifeWorlds = () => {
  const navigate = useNavigate()

  return (
    <div id="life-worlds" className="px-4 pb-24">
      <div className="max-w-5xl mx-auto">
        <p className="sm:text-5xl text-3xl mb-3 text-center">
          <span className="font-[200] text-gray-400">Different </span>
          <span className="font-[300] text-white">Sides</span>
        </p>
        <p className="text-gray-500 text-center mb-14 font-light text-lg">
          I don't fit neatly into one box. Here's what the full picture looks like.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {worlds.map((world, i) => (
            <div
              key={world.path}
              onClick={() => navigate(world.path)}
              className={`${world.span} group relative light-card rounded-2xl cursor-pointer overflow-hidden opacity-0 animate-fade-in-up`}
              style={{
                animationDelay: `${i * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Colored top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: world.accentColor }}
              />

              {/* Subtle hover glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                style={{ backgroundColor: world.accentColor }}
              />

              <div className="relative z-10 p-6 md:p-8 flex flex-col min-h-[180px]">
                {/* Label */}
                <span
                  className="text-xs font-medium tracking-wider uppercase mb-3"
                  style={{ color: world.accentColor }}
                >
                  {world.label}
                </span>

                <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                  {world.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-auto">
                  {world.description}
                </p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium transition-all duration-300" style={{ color: world.accentColor }}>
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LifeWorlds
