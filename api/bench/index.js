module.exports = async function (context, req) {
  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: { bench: { tools: ['watering-can','shears'] } }
  };
}