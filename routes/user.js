/**
 * API-ruter for brukerhåndtering (foreløpig kun én eksempelrute).
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

// Her kan du legge til flere ruter for brukerhåndtering etter hvert,
// f.eks. POST for å opprette bruker, GET /:id for å hente spesifikk bruker,
// PUT /:id for å oppdatere, DELETE /:id for å slette, osv.
// Husk å dokumentere dem med JSDoc!

export default router;
