import fm from 'front-matter'

const postSlugs = ['my-journey-of-becoming-a-full-stack-developer']

export async function getPostBySlug(slug: string) {
  const res = await fetch(`/content/${slug}.md`)
  const raw = await res.text()
  const { attributes, body } = fm<any>(raw)

  console.log('Post attributes:', attributes)

  return {
    slug,
    markdown: body,  // raw markdown string
    data: attributes,
  }
}

export async function getAllPosts() {
  const posts = await Promise.all(postSlugs.map(getPostBySlug))
  return posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
}
