import { Context, HttpRequest } from "@azure/functions"

export default async function (context: Context) {
  context.res = {
    status: 200,
    body: {
      leaderboard: [
        { player: "Alice", score: 42 },
        { player: "Bob",   score: 37 },
        { player: "Carol", score: 31 },
      ]
    }
  }
}
