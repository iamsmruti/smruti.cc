import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { blogIndex } from '../../content'

const BackButton = ({ onClick, className = '' }: { onClick: () => void; className?: string }) => (
  <button
    onClick={onClick}
    className={`group flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-light ${className}`}
  >
    <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
    <span>Back to Blog</span>
  </button>
)

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [content, setContent] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const post = blogIndex.find((post) => post.slug === slug)

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return

      try {
        const res = await fetch(`/blogs/${slug}.md`)
        if (!res.ok) throw new Error('Failed to fetch markdown file')
        const text = await res.text()
        setContent(text)
      } catch (err) {
        console.error(err)
        setError('Failed to load blog content.')
      }
    }

    fetchPost()
  }, [slug])

  if (!post) return <div className="page-section px-4 text-center text-gray-500 font-light">Post not found.</div>
  if (error) return <div className="page-section px-4 text-center text-gray-500 font-light">{error}</div>
  if (!content) return <div className="page-section px-4 text-center text-gray-500 font-light">Loading…</div>

  return (
    <div className="page-section px-4">
      <article className="max-w-5xl mx-auto">
        <BackButton onClick={() => navigate('/blog')} className="mb-8" />

        <h1 className="text-4xl md:text-5xl font-light text-white">{post.title}</h1>

        <p className="text-sm text-gray-500 font-light mt-3">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-2xl my-8 w-full"
          />
        )}
        <div className="markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <BackButton onClick={() => navigate('/blog')} className="mt-12 pt-8 border-t border-white/[0.05]" />
      </article>
    </div>
  )
}

export default BlogPage
