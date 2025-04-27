module.exports = async function (context, req) {
  const body = req.body || {}

  if (!body.email || !body.password) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: { message: 'Email & password required' }
    }
    return
  }

  // Stub: pretend login succeeded
  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: {
      message: 'Login successful',
      token: 'mock-jwt-token',
      user: { id: '1', email: body.email }
    }
  }
}
