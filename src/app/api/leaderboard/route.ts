import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    leaderboard: [
      { player: 'Alice', score: 42 },
      { player: 'Bob',   score: 37 },
      { player: 'Carol', score: 31 },
    ]
  })
}
