'use client'

import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'
import ProceduralPixelatedBonsai from './ProceduralPixelatedBonsai'
import Image from 'next/image'
// Remove import, no need to import directly from public in Next.js
// import MainMenuBonsai12 from '../public/MainMenuBonsai12.png'

<Image
  src="/MainMenuBonsai12.png" 
  alt="Main Menu Bonsai"
  width={280}  // Adjust dimensions as needed
  height={280}
/>

const fetcher = (url: string) => fetch(url).then(r => r.json())

type Bench = {
  tools: string[]
  plantedSeed?: { id: string; plantedAt: string }
}

export default function MainMenu() {
  const router = useRouter()
  const { data, error } = useSWR<{ bench: Bench }>('/api/bench', fetcher)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Simple auth check: check if 'authToken' exists in localStorage
    const token = localStorage.getItem('authToken')
    setIsAuthenticated(!!token)
  }, [])

  if (error) return <div className="p-4 text-red-500">Failed to load menu</div>
  if (!data) return <div className="p-4">Loading…</div>

  const { bench } = data

  const handleContinue = () => {
    if (isAuthenticated) {
      router.push('/bench')
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ paddingTop: '5rem', background: '#5C7285' }}>
      <Image src={MainMenuBonsai12} alt="Main Menu Bonsai" width={256} height={256} />
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
          onClick={handleContinue}
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