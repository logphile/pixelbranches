'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegistrationSuccess() {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#059212' }} className="flex flex-col items-center justify-center p-4">
      <h1 className="text-white font-bold flex items-center gap-3" style={{ fontSize: '4rem', marginBottom: '4rem' }}>
        Registration Successful! <span style={{ fontSize: '3rem' }}>🌱</span>
      </h1>
      <button
        onClick={() => router.push('/game')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="text-white font-bold text-2xl px-8 py-4 rounded-lg"
        style={{
          backgroundColor: '#2F3E46',
          animation: 'leafWind 3s ease-in-out infinite',
          cursor: 'pointer',
          userSelect: 'none',
          boxShadow: hovered ? '0 8px 16px rgba(0,0,0,0.6)' : '0 4px 8px rgba(0,0,0,0.3)',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
      >
        Time to grow...
      </button>
      <style jsx>{`
        @keyframes leafWind {
          0% {
            transform: rotate(0deg) translateX(0);
          }
          25% {
            transform: rotate(3deg) translateX(3px);
          }
          50% {
            transform: rotate(0deg) translateX(0);
          }
          75% {
            transform: rotate(-3deg) translateX(-3px);
          }
          100% {
            transform: rotate(0deg) translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
