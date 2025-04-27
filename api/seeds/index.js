module.exports = async function (context) {
  context.res = {
    status: 200,
    body: {
      seeds: [
        { id: 'maple', name: 'Maple Bonsai' },
        { id: 'juniper', name: 'Juniper Bonsai' },
        { id: 'pine', name: 'Pine Bonsai' }
      ]
    }
  }
}

