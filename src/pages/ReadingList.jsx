import { useState } from 'react'
import { books } from '../data/readingList'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Read', value: 'read' },
  { label: 'Reading', value: 'reading' },
  { label: 'Want to read', value: 'want-to-read' },
]

const BADGE_CLASS = {
  'read': 'badge-read',
  'reading': 'badge-reading',
  'want-to-read': 'badge-want-to-read',
}

const BADGE_LABEL = {
  'read': 'Read',
  'reading': 'Reading',
  'want-to-read': 'Want to read',
}

export default function ReadingList() {
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? books : books.filter(b => b.status === filter)

  return (
    <div className="container">
      <h1>Reading List</h1>
      <p className="page-intro">Books I've read, am reading, or want to read — with brief notes.</p>

      <div className="reading-filters">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-btn${filter === f.value ? ' active' : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="book-list">
        {visible.map((book, i) => (
          <li key={i} className="book-item">
            <div>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.author}{book.year ? ` · ${book.year}` : ''}</p>
              {book.notes && <p className="book-notes">{book.notes}</p>}
            </div>
            <span className={`book-badge ${BADGE_CLASS[book.status]}`}>
              {BADGE_LABEL[book.status]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
