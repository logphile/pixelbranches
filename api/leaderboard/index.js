module.exports = async (context) => {
  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: {
      leaderboard: [
        { player: 'Alice', score: 42 },
        { player: 'Bob',   score: 37 },
        { player: 'Carol', score: 31 }
      ]
    }
  }
}
