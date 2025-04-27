import { Context, HttpRequest } from "@azure/functions"

export default async function (context: Context, req: HttpRequest) {
  const body = await req.json?.() ?? req.body
  if (!body?.email || !body?.password) {
    context.res = { status: 400, body: { message: "Email & password required" } }
    return
  }
  context.res = {
    status: 201,
    body: { message: "User registered", user: { id: "1", email: body.email } }
  }
}
