import { useNavigate } from "react-router-dom"

const platforms = [
  { name: "Agile Coder Blog", url: "https://blog.agilecoder.in", emoji: "💻" },
  { name: "Artful Coding", url: "https://artfulcoding.in", emoji: "🎨" },
  { name: "Nihongo Study", url: "https://nihongo-study.vercel.app", emoji: "🇯🇵" },
]

const WritingSection = () => {
  const navigate = useNavigate()

  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">✍️</span>
          <p className="sm:text-4xl text-2xl">
            <span className="font-extralight text-gray-400">I </span>
            <span className="font-light">Write</span>
          </p>
        </div>
        <p className="text-gray-500 mb-10 font-light">
          I've written a hell lot of blogs scattered across platforms, and even published a book. Writing is how I process my thoughts.
        </p>

        <div className="glass rounded-2xl p-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-between items-center">
            <div>
              <p className="text-4xl font-light mb-1">50+</p>
              <p className="text-gray-500 font-light">Articles & Blogs Written</p>
            </div>
            <div>
              <p className="text-4xl font-light mb-1">1</p>
              <p className="text-gray-500 font-light">Book Published</p>
            </div>
            <div>
              <p className="text-4xl font-light mb-1">3</p>
              <p className="text-gray-500 font-light">Blog Platforms</p>
            </div>
          </div>
        </div>

        <p className="text-xl font-light mb-6 text-[#8B5CF6]">Where I Write</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {platforms.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-xl p-5 card-hover opacity-0 animate-fade-in-up flex items-center gap-3"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <span className="text-2xl">{p.emoji}</span>
              <span className="text-gray-300 font-light group-hover:text-white transition-colors">{p.name}</span>
              <span className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors">↗</span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/creator')}
            className="text-sm px-6 py-2 rounded-lg border border-[#8B5CF6]/30 text-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-colors font-light"
          >
            See all my writings on the Creator page →
          </button>
        </div>
      </div>
    </div>
  )
}

export default WritingSection
