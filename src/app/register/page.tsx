'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [characterName, setCharacterName] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email !== emailConfirm) {
      setError('Emails do not match')
      return
    }
    setError('')
    // Navigate to registration success page after "registration"
    router.push('/register/success')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#5C7285' }} className="flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg p-8 w-full max-w-md"
        style={{ backgroundColor: '#626F47', boxShadow: '0 8px 16px rgba(0,0,0,0.4)' }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#F5ECD5' }}>Register</h1>
        {error && <p className="mb-4" style={{ color: '#F5ECD5' }}>{error}</p>}
        <label className="block mb-4">
          <span style={{ color: '#F5ECD5' }}>Character Name</span>
          <input
            type="text"
            value={characterName}
            onChange={e => setCharacterName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            style={{ borderColor: '#F0BB78', backgroundColor: '#FFF', color: '#000', caretColor: '#000' }}
          />
        </label>
        <label className="block mb-4">
          <span style={{ color: '#F5ECD5' }}>Email</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            style={{ borderColor: '#F0BB78', backgroundColor: '#FFF', color: '#000', caretColor: '#000' }}
          />
        </label>
        <label className="block mb-4">
          <span style={{ color: '#F5ECD5' }}>Confirm Email</span>
          <input
            type="email"
            value={emailConfirm}
            onChange={e => setEmailConfirm(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            style={{ borderColor: '#F0BB78', backgroundColor: '#FFF', color: '#000', caretColor: '#000' }}
          />
        </label>
        <label className="block mb-6">
          <span style={{ color: '#F5ECD5' }}>Password</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            style={{ borderColor: '#F0BB78', backgroundColor: '#FFF', color: '#000', caretColor: '#000' }}
          />
        </label>
        <button
          type="submit"
          className="w-full py-3 rounded-lg transition-colors"
          style={{ backgroundColor: '#F0BB78', color: '#626F47' }}
        >
          Register
        </button>
      </form>
    </div>
  )
}
