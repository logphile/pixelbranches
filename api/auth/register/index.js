module.exports = async function (context, req) {
  // Read the posted body (if using JSON)
  const body = req.body || {}

  if (!body.email || !body.password) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: { message: 'Email & password required' }
    }
    return
  }

  // Stub: pretend we created the user
  context.res = {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
    body: {
      message: 'User registered',
      user: { id: '1', email: body.email }
    }
  }
}
