/**
 * API-ruter for hendelser/arrangementer.
 * @module routes/event
 */
import express from 'express';
const router = express.Router();

// In-memory data for dette eksempelet - erstatt med databasekall senere
let eventStore = [
  { id: 1, title: 'Sommerfest', date: '2025-07-20', description: 'Årlig sommerfest for klubbens medlemmer.' },
  { id: 2, title: 'Julebord', date: '2025-12-05', description: 'Tradisjonelt julebord med god mat og drikke.' },
];
let nextEventId = 3;

/**
 * Henter alle hendelser.
 * @name GET /api/event
 * @function
 * @memberof module:routes/event
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med listen over hendelser
 * @returns {void}
 */
router.get('/', (req, res) => { // Stien er '/' relativt til '/api/event'
  res.json({ events: eventStore });
});

/**
 * Legger til en ny hendelse.
 * Forventer 'title', 'date', og 'description' i request body.
 * @name POST /api/event
 * @function
 * @memberof module:routes/event
 * @param {express.Request} req HTTP-forespørselen. Body bør inneholde { title: "...", date: "YYYY-MM-DD", description: "..." }.
 * @param {express.Response} res HTTP-responsen med den nylig tillagte hendelsen.
 * @returns {void}
 */
router.post('/', (req, res) => { // Stien er '/'
  const { title, date, description } = req.body;
  if (!title || !date || !description) {
    return res.status(400).json({ message: 'Title, date, and description are required.' });
  }
  const newEvent = {
    id: nextEventId++,
    title,
    date,
    description,
  };
  eventStore.push(newEvent);
  res.status(201).json(newEvent);
});

export default router;
