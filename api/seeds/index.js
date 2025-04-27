module.exports = async function (context, req) {
  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: {
      seeds: [
        { id: 'maple',   name: 'Maple Bonsai' },
        { id: 'juniper', name: 'Juniper Bonsai' },
        { id: 'pine',    name: 'Pine Bonsai' }
      ]
    }
  };
}