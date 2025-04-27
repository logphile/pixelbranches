module.exports = async function (context, req) {
  const body = req.body || {}
  if (!body.email || !body.password) {
    context.res = { status: 400, body: { message: 'Email & password required' } }
    return
  }
  context.res = {
    status: 201,
    body: { message: 'User registered', user: { id: '1', email: body.email } }
  }
}
