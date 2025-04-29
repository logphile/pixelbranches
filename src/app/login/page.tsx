'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [characterName, setCharacterName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation example
    if (!characterName || !password) {
      setError('Please fill in all fields')
      return
    }
    setError('')
    // Simulate successful login by setting authToken in localStorage
    localStorage.setItem('authToken', 'dummy-token')
    router.push('/bench')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#5C7285' }} className="flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="rounded-lg p-8 w-full max-w-md shadow-lg" style={{ backgroundColor: '#626F47' }}>
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#F5ECD5' }}>Continue growing...</h1>
        {error && <p className="mb-4" style={{ color: '#F5ECD5' }}>{error}</p>}
        <label className="block mb-4">
          <span style={{ color: '#F5ECD5' }}>Character Name</span>
          <input
            type="text"
            value={characterName}
            onChange={e => setCharacterName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            style={{ borderColor: '#F0BB78', backgroundColor: '#5C7285', color: '#F5ECD5', caretColor: '#F5ECD5' }}
          />
        </label>
        <label className="block mb-4">
          <span style={{ color: '#F5ECD5' }}>Password</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            style={{ borderColor: '#F0BB78', backgroundColor: '#5C7285', color: '#F5ECD5', caretColor: '#F5ECD5' }}
          />
        </label>
        <div className="mb-6 text-right">
          <a href="/forgot-password" style={{ color: '#F0BB78', textDecoration: 'underline' }}>Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg transition-colors"
          style={{ backgroundColor: '#F0BB78', color: '#626F47' }}
        >
          Login
        </button>
      </form>
    </div>
  )
}
