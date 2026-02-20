import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' })

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function loadPost() {
      const key = `../content/blog/${slug}.md`
      const loader = modules[key]
      if (!loader) {
        setNotFound(true)
        return
      }
      const raw = await loader()
      const { data, content } = matter(raw)
      setPost({ frontmatter: data, content })
    }
    loadPost()
  }, [slug])

  if (notFound) return <Navigate to="/blog" replace />
  if (!post) return null

  return (
    <div className="container">
      <p className="post-back"><Link to="/blog">← Blog</Link></p>
      <div className="post-header">
        <h1>{post.frontmatter.title}</h1>
        <p className="post-meta">{formatDate(post.frontmatter.date)}</p>
      </div>
      <div className="post-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}
