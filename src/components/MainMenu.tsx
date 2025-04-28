'use client'

'use client'

import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import BenchBonsai from './BenchBonsai'

const fetcher = (url: string) => fetch(url).then(r => r.json())

type Bench = {
  tools: string[]
  plantedSeed?: { id: string; plantedAt: string }
}

export default function MainMenu() {
  const router = useRouter()
  const { data, error } = useSWR<{ bench: Bench }>('/api/bench', fetcher)

  if (error) return <div className="p-4 text-red-500">Failed to load menu</div>
  if (!data) return <div className="p-4">Loading…</div>

  const { bench } = data

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ paddingTop: '5rem', background: '#5C7285' }}>
      <BenchBonsai />
      <h1 className="text-6xl font-extrabold mb-12" style={{ marginTop: '1rem', color: '#2F3E46' }}>Pixel Branches</h1>
      <div className="flex flex-col space-y-4 w-64">
        <button
          onClick={() => router.push('/register')}
          className="px-8 py-3 rounded-lg"
          style={{ backgroundColor: '#9BEC00', color: '#2F3E46', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: 'transform 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Start New Game
        </button>

        <button
          className="px-8 py-3 rounded-lg"
          style={{ backgroundColor: '#06D001', color: '#2F3E46', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: 'transform 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Continue
        </button>

        {bench.plantedSeed && (
          <button
            onClick={() => router.push('/game')}
          className="px-8 py-3 rounded-lg"
          style={{ backgroundColor: '#06D001', color: '#2F3E46', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: 'transform 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Continue
          </button>
        )}

        <button
          onClick={() => router.push('/leaderboard')}
          className="px-8 py-3 rounded-lg"
          style={{ backgroundColor: '#059212', color: '#2F3E46', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: 'transform 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Leaderboard
        </button>
      </div>
    </div>
  )
}
