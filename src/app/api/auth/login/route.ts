import { NextResponse } from 'next/server'

export function POST(request: Request) {
  return request.json().then(body => {
    if (!body.email || !body.password) {
      return NextResponse.json({ message: 'Email & password required' }, { status: 400 })
    }
    return NextResponse.json({
      message: 'Login successful',
      token: 'mock-jwt-token',
      user: { id: '1', email: body.email }
    })
  })
}
