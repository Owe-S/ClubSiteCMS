/**
 * Modul for API-endepunkter relatert til brukerdata.
 * @module routes/user
 */
import express from 'express';
const router = express.Router();

/**
 * Returnerer profilinformasjon om innlogget bruker.
 * (Dette er en mock-implementasjon. I en ekte applikasjon ville dette krevd autentisering.)
 * @name GET /me
 * @function
 * @memberof module:routes/user
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med brukerinfo
 * @returns {void}
 */
router.get('/me', (req, res) => {
  res.json({
    id: 1, // Hardkodet for eksempel
    name: 'Owe Stangeland', // Bør hentes fra autentisert bruker
    email: 'owe.stangeland@gmail.com', // Bør hentes fra autentisert bruker
  });
});

/**
 * Oppdaterer data for innlogget bruker.
 * (Dette er en mock-implementasjon. I en ekte applikasjon ville dette krevd autentisering.)
 * @name PUT /me
 * @function
 * @memberof module:routes/user
 * @param {express.Request} req HTTP-forespørselen med nye data
 * @param {express.Response} res HTTP-responsen med oppdatert brukerinfo
 * @returns {void}
 */
router.put('/me', (req, res) => {
  const user = { // I en ekte applikasjon ville du validert og lagret disse for den autentiserte brukeren
    id: 1, // Hardkodet for eksempel
    name: req.body.name,
    email: req.body.email,
  };
  res.json({ message: 'User profile updated successfully', user });
});

export default router;
