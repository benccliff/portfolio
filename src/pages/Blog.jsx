import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import matter from 'gray-matter'

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' })

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const loaded = await Promise.all(
        Object.entries(modules).map(async ([path, loader]) => {
          const raw = await loader()
          const { data } = matter(raw)
          const filename = path.split('/').pop().replace('.md', '')
          return { slug: filename, ...data }
        })
      )
      loaded.sort((a, b) => new Date(b.date) - new Date(a.date))
      setPosts(loaded)
    }
    loadPosts()
  }, [])

  return (
    <div className="container">
      <h1>Blog</h1>
      <p className="page-intro">Notes on software, finance, and whatever else I'm thinking about.</p>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.slug} className="post-item">
            <p className="post-meta">{formatDate(post.date)}</p>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            {post.description && (
              <p className="post-description">{post.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
