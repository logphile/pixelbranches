import { NextResponse } from 'next/server'

export function POST(request: Request) {
  return request.json().then(body => {
    if (!body.email || !body.password) {
      return NextResponse.json({ message: 'Email & password required' }, { status: 400 })
    }
    return NextResponse.json({
      message: 'User registered',
      user: { id: '1', email: body.email }
    }, { status: 201 })
  })
}
