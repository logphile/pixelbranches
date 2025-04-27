import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    bench: {
      tools: ['watering-can', 'shears']
    }
  })
}
