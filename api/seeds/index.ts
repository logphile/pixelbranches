import { Context, HttpRequest } from "@azure/functions"

export default async function (context: Context) {
  context.res = {
    status: 200,
    body: {
      seeds: [
        { id: "maple",   name: "Maple Bonsai" },
        { id: "juniper", name: "Juniper Bonsai" },
        { id: "pine",    name: "Pine Bonsai" },
      ]
    }
  }
}
