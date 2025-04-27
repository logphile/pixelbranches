import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    seeds: [
      { id: 'maple',   name: 'Maple Bonsai' },
      { id: 'juniper', name: 'Juniper Bonsai' },
      { id: 'pine',    name: 'Pine Bonsai' },
    ]
  })
}
