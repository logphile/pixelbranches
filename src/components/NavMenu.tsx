'use client'

import { useRouter } from 'next/navigation'

export default function NavMenu() {
  const router = useRouter()

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'How To', path: '/howto' },
    { label: 'My Bench', path: '/bench' },
    { label: 'Shop', path: '/shop' },
    { label: 'Leaderboards', path: '/leaderboard' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        backgroundColor: '#543A14',
        borderRadius: '0.5rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
        padding: '0.5rem 1rem',
        zIndex: 1000,
        display: 'flex',
        gap: '1rem',
      }}
    >
      {menuItems.map(({ label, path }) => (
        <button
          key={label}
          onClick={() => router.push(path)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#F5ECD5',
            fontWeight: 'bold',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6B4C1D')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
