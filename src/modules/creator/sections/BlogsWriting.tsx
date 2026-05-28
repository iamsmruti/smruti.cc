import AgileCoderThumbnail from "../../../assets/blog-agilecoder.png"
import ArtfulCodingThumbnail from "../../../assets/artfulcoding.png"
import NihongoStudyThumbnail from "../../../assets/nihongo-study.png"
import articles from "../../portfolio/data/articles"

const blogPlatforms = [
  {
    name: "Agile Coder Blogs",
    url: "https://blog.agilecoder.in",
    description: "Software development guides — architecture, tooling, and the craft of writing good code.",
    image: AgileCoderThumbnail,
    tags: ["guides", "software development", "technology"],
    color: "#4c82c5",
  },
  {
    name: "Artful Coding",
    url: "https://artfulcoding.in",
    description: "Creative coding — fractals, generative art, and the beauty of mathematics in code.",
    image: ArtfulCodingThumbnail,
    tags: ["creative coding", "p5.js", "fractals"],
    color: "#4c82c5",
  },
  {
    name: "Nihongo Study",
    url: "https://nihongo-study.vercel.app",
    description: "Japanese culture and language learning — from knowing Japan to learning Kanji.",
    image: NihongoStudyThumbnail,
    tags: ["japanese", "language learning"],
    color: "#4c82c5",
  },
]

const BlogsWriting = () => {
  return (
    <div className="page-section px-4">
      <div className="max-w-5xl mx-auto">
        {/* Blog Platforms */}
        <p className="sm:text-4xl text-2xl mb-3">
          <span className="font-[200] text-gray-400">Blog </span>
          <span className="font-light text-white">Platforms</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          Three distinct topics, three separate spaces — software development, creative coding, and Japanese.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {blogPlatforms.map((blog, i) => (
            <a
              key={blog.name}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group light-card rounded-2xl overflow-hidden opacity-0 animate-fade-in-up block"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="relative overflow-hidden">
                <img src={blog.image} alt={blog.name} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: blog.color }} />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-white group-hover:underline mb-2" style={{ textDecorationColor: blog.color }}>{blog.name}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">{blog.description}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full font-light"
                      style={{ backgroundColor: blog.color + "10", color: blog.color, border: `1px solid ${blog.color}25` }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Articles */}
        <p className="sm:text-4xl text-2xl mb-3">
          <span className="font-[200] text-gray-400">Featured </span>
          <span className="font-light text-white">Articles</span>
        </p>
        <p className="text-gray-500 mb-10 font-light">
          Long-form pieces I've put real effort into. A mix of technical guides and personal essays.
        </p>

        <div className="flex flex-col gap-4">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group light-card rounded-xl flex flex-col sm:flex-row gap-4 p-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <img src={article.thumbnail} alt={article.title} className="sm:w-48 w-full h-32 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-100 group-hover:text-[#6C63FF] transition-colors mb-1">{article.title}</h3>
                <p className="text-gray-500 font-light text-sm line-clamp-2 mb-2">{article.description}</p>
                <p className="text-gray-400 text-xs">{article.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogsWriting
