'use client'

import Image from 'next/image'
import useSWR from 'swr'
import { useRouter } from 'next/navigation'

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300">
      <Image
  src="/workbench-bonsai.png"
  alt="Modest Workbench with Bonsai Plant"
  width={256}
  height={256}
  className="mb-8"
/>
      <h1 className="text-6xl font-extrabold mb-12">Pixel Branches</h1>
      <div className="space-y-4">
        <button
          onClick={() => router.push('/game')}
          className="px-8 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
        >
          Start New Game
        </button>

        {bench.plantedSeed && (
          <button
            onClick={() => router.push('/game')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Continue
          </button>
        )}

        <button
          onClick={() => router.push('/leaderboard')}
          className="px-8 py-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800"
        >
          Leaderboard
        </button>
      </div>
    </div>
  )
}
