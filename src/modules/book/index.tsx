import BookCover from "../../assets/book-cover.png"

const featuredBook = {
  title: "Her Struggles, My Wings",
  subtitle: "A Memoir of Survival, Sacrifice, and Flying.",
  genre: "A Memoir",
  description:
    "This is the story of my mother — a woman who carried unimaginable weight so her son could fly. It's about the sacrifices that go unseen, the strength that doesn't announce itself, and the debt no child can fully repay.",
  quote: "Her struggles were the soil. My wings are proof that something grew.",
  author: "Smruti Ranjan Badatya",
  cover: BookCover,
  buyLinks: [
    {
      name: "Amazon",
      url: "https://www.amazon.in/dp/B0GTQC3L7G",
      icon: "📦",
      color: "#FF9900",
      bg: "#FFF8EC",
      border: "#FFD77A",
    },
    {
      name: "Flipkart",
      url: "https://www.flipkart.com/her-struggles-my-wings/p/itmdce1e5b71f7b6?pid=9798903301454",
      icon: "🛒",
      color: "#2874F0",
      bg: "#EDF4FF",
      border: "#A8C9FF",
    },
    {
      name: "Pothi",
      url: "https://store.pothi.com/book/smruti-ranjan-badatya-her-struggle-my-wings/",
      icon: "📚",
      color: "#E05C2A",
      bg: "#FFF1EC",
      border: "#F9B99A",
    },
  ],
}

const Books = () => {
  return (
    <div className="w-full">

      {/* Featured book — full-bleed hero */}
      <div className="w-full relative border-b border-white/[0.04] py-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] bg-[#4c82c5] opacity-[0.08] pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 relative z-10">

          {/* Cover */}
          <div className="flex-shrink-0 flex justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-[#4c82c5]/10 rounded-3xl blur-lg" />
              <img
                src={featuredBook.cover}
                alt={featuredBook.title}
                className="relative w-56 md:w-72 lg:w-80 rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col min-w-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              {featuredBook.title}
            </h1>

            <div className="w-12 h-px bg-[#4c82c5] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }} />

            <p className="text-gray-500 font-light text-base leading-relaxed mb-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <em>{featuredBook.subtitle}</em>
            </p>

            <p className="text-gray-400 font-light text-base leading-relaxed mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
              {featuredBook.description}
            </p>

            <p className="text-gray-500 font-light text-sm mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              by <span className="text-gray-700 font-normal">{featuredBook.author}</span>
            </p>

            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Available on</p>
              <div className="flex flex-wrap gap-3">
                {featuredBook.buyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: link.bg, color: link.color, border: `1px solid ${link.border}` }}
                  >
                    <span>{link.icon}</span>
                    <span>Buy on {link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About the book */}
      <div className="w-full px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl font-light text-white mb-10">
            <span className="font-[200] text-gray-400">About the </span>
            <span>Book</span>
          </p>

          <div className="space-y-6 text-gray-400 font-light text-base leading-relaxed">
            <p>
              Every child grows up with a version of their parents that feels ordinary — because ordinary is all they've known. It took me years to realize that what I was experiencing as "normal" was anything but.
            </p>
            <p>
              This book is my attempt to tell my mother's story with the honesty she deserves. The struggles she never spoke about, the choices she made in silence, and the way she carried everything so I could carry nothing but my own dreams.
            </p>
            <p>
              It's a memoir, but it's also a letter. To her. To every parent who gave everything without asking for recognition. And to every child who grew up not fully understanding what was being sacrificed for them.
            </p>
          </div>

          <div className="mt-12 px-6 py-6 rounded-2xl bg-[#4c82c5]/5 border-l-4 border-[#4c82c5]">
            <p className="text-gray-300 font-light text-lg leading-relaxed italic">
              "{featuredBook.quote}"
            </p>
          </div>
        </div>
      </div>

      {/* More Books shelf */}
      <div className="w-full px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-white/[0.06] pt-16">
            <p className="text-2xl font-light text-white mb-2">
              <span className="font-[200] text-gray-400">More </span>
              <span>Books</span>
            </p>
            <p className="text-sm text-gray-400 font-light mb-10">More titles in the works — check back soon.</p>

            <div className="flex items-center justify-center border border-dashed border-white/[0.08] rounded-2xl py-16 px-8 bg-white/[0.02]">
              <div className="text-center">
                <div className="text-4xl mb-4 opacity-40">📖</div>
                <p className="text-gray-400 font-light text-sm">Next book coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Books
