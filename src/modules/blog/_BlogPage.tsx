import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { blogIndex } from '../../content'

const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>()
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
      console.log(text)
        setContent(text)
      } catch (err) {
        console.error(err)
        setError('Failed to load blog content.')
      }
    }

    fetchPost()
  }, [slug])

  if (!post) return <div className="p-8 text-red-600">Post not found.</div>
  if (error) return <div className="p-8 text-red-600">{error}</div>
  if (!content) return <div className="p-8">Loading...</div>

  return (
    <article className="prose prose-lg max-w-3xl mx-auto py-12 px-4">
      <h1 className='text-4xl font-light'>{post.title}</h1>
      
      <p className="text-sm text-gray-500 mt-3">
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
          className="rounded my-6"
        />
      )}
      <div className='markdown'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  )
}

export default BlogPage
