export default async function handler(req, res) {
  res.status(200).json({ bench: { tools: ['watering-can', 'shears'] } });
}
