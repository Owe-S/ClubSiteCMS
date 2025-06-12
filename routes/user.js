/**
 * API-ruter for brukerhåndtering.
 * @module routes/user
 */
import express from 'express';
const router = express.Router();

// In-memory data for dette eksempelet
let usersStore = [
  { id: 1, username: 'admin', role: 'administrator' },
  { id: 2, username: 'editor', role: 'editor' },
];

/**
 * Henter en liste over brukere (forenklet eksempel).
 * @name GET /api/user
 * @function
 * @memberof module:routes/user
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med brukerlisten
 * @returns {void}
 */
router.get('/', (req, res) => { // Stien er '/' relativt til '/api/user'
  res.json({ users: usersStore });
});

/**
 * Håndterer brukerinnlogging.
 * Forventer 'username' og 'password' i request body.
 * @name POST /api/user/login
 * @function
 * @memberof module:routes/user
 * @param {express.Request} req HTTP-forespørselen. Body bør inneholde { username: "...", password: "..." }.
 * @param {express.Response} res HTTP-responsen. Returnerer en melding og evt. token.
 * @returns {void}
 */
router.post('/login', (req, res) => { // Stien er '/login' relativt til '/api/user'
  const { username, password } = req.body;
  // Her ville du vanligvis validert brukernavn og passord mot en database
  if (username && password) {
    // Forenklet eksempel:
    const user = usersStore.find(u => u.username === username);
    if (user) {
      // I et ekte scenario, ville du sjekket et hashet passord
      res.json({ message: `User ${username} logged in successfully (simulated).`, token: 'fake-jwt-token' });
    } else {
      res.status(401).json({ message: 'Invalid credentials (user not found).' });
    }
  } else {
    res.status(400).json({ message: 'Username and password are required.' });
  }
});

// Her kan du legge til flere ruter for brukerhåndtering etter hvert,
// f.eks. GET /:id for å hente spesifikk bruker, osv.

export default router;
