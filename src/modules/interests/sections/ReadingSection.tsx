import books from "../../portfolio/data/books"

const readingList = [
  { title: "Atomic Habits", author: "James Clear", emoji: "⚡" },
  { title: "Sapiens", author: "Yuval Noah Harari", emoji: "🌍" },
  { title: "Deep Work", author: "Cal Newport", emoji: "🧠" },
  { title: "The Lean Startup", author: "Eric Ries", emoji: "📈" },
  { title: "Zero to One", author: "Peter Thiel", emoji: "🚀" },
  { title: "Shoe Dog", author: "Phil Knight", emoji: "👟" },
]

const ReadingSection = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">📚</span>
          <p className="sm:text-4xl text-2xl">
            <span className="font-extralight text-gray-400">I </span>
            <span className="font-light">Read</span>
          </p>
        </div>
        <p className="text-gray-500 mb-10 font-light">
          Books have shaped how I think. From entrepreneurship to science — I consume them all.
        </p>

        {/* Books I've Written */}
        <p className="text-xl font-light mb-6 text-[#8B5CF6]">Books I've Written</p>
        <div className="space-y-4 mb-16">
          {books.map((book, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 flex flex-wrap md:flex-nowrap gap-5 card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <img src={book.image} alt={book.title} className="w-32 rounded-lg object-cover" />
              <div className="flex-1">
                <h4 className="text-lg font-medium text-white mb-1">{book.title}</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed mb-2">{book.description}</p>
                <p className="text-gray-600 text-xs mb-3">Published: {book.published}</p>
                <div className="flex flex-wrap gap-3">
                  {book.links.amazon && (
                    <a href={book.links.amazon} target="_blank" rel="noopener noreferrer" className="text-xs px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium">
                      Buy on Amazon
                    </a>
                  )}
                  {book.links.gumroad && (
                    <a href={book.links.gumroad} target="_blank" rel="noopener noreferrer" className="text-xs px-4 py-2 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] transition-colors font-medium">
                      Buy on Gumroad
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Books I Love */}
        <p className="text-xl font-light mb-6 text-[#8B5CF6]">Some Books I Love</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {readingList.map((book, i) => (
            <div
              key={book.title}
              className="glass rounded-xl p-4 card-hover opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <span className="text-2xl block mb-2">{book.emoji}</span>
              <h4 className="text-sm font-medium text-white">{book.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{book.author}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm font-light italic mt-6">
          * Update with your actual reading list!
        </p>
      </div>
    </div>
  )
}

export default ReadingSection
