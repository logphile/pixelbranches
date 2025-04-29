'use client'

import { useState } from 'react'

export default function ForgotPasswordPage() {
  const [characterName, setCharacterName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!characterName || !email) {
      setError('Please fill in all fields')
      return
    }

    // Simulate account check and email sending
    // In real app, call API to verify and send email
    if (characterName === 'testuser' && email === 'test@example.com') {
      setSuccess('Password reset email sent!')
    } else {
      setError('No account found with that Character Name and Email')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#5C7285' }} className="flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="rounded-lg p-8 w-full max-w-md shadow-lg" style={{ backgroundColor: '#626F47' }}>
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#F5ECD5' }}>Forget something?</h1>
        {error && <p className="mb-4" style={{ color: '#F5ECD5' }}>{error}</p>}
        {success && <p className="mb-4" style={{ color: '#F5ECD5' }}>{success}</p>}
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
        <label className="block mb-6">
          <span style={{ color: '#F5ECD5' }}>Email</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            style={{ borderColor: '#F0BB78', backgroundColor: '#5C7285', color: '#F5ECD5', caretColor: '#F5ECD5' }}
          />
        </label>
        <button
          type="submit"
          disabled={!characterName || !email}
          className="w-full py-3 rounded-lg transition-colors disabled:opacity-50"
          style={{ backgroundColor: '#F0BB78', color: '#626F47' }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}
