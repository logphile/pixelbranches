module.exports = async function (context) {
  context.res = {
    status: 200,
    body: { bench: { tools: ['watering-can', 'shears'] } }
  }
}
