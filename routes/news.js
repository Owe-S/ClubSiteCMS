/**
 * Modul for nyhetsrelaterte API-endepunkter.
 * @module routes/news
 */
import express from 'express';
const router = express.Router();

/**
 * Henter en liste over nyhetsartikler.
 * @name GET /
 * @function
 * @memberof module:routes/news
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med liste over artikler
 * @returns {void}
 */
router.get('/', (req, res) => {
  res.json({
    articles: [
      {
        id: 1,
        title: 'Velkommen til ClubSiteCMS',
        content: 'Dette er en nyhet via API',
        date: new Date().toISOString(),
      },
    ],
  });
});

/**
 * Oppretter en ny nyhetsartikkel.
 * @name POST /
 * @function
 * @memberof module:routes/news
 * @param {express.Request} req HTTP-forespørselen med artikkeldata
 * @param {express.Response} res HTTP-responsen med lagret artikkel
 * @returns {void}
 */
router.post('/', (req, res) => {
  const article = {
    id: 2, // Husk å håndtere ID-generering dynamisk i en ekte applikasjon
    title: req.body.title,
    content: req.body.content,
    date: new Date().toISOString(),
  };
  res.status(201).json({ article });
});

/**
 * Henter nyhetsmodulens innstillinger.
 * @name GET /settings
 * @function
 * @memberof module:routes/news
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med innstillinger
 * @returns {void}
 */
router.get('/settings', (req, res) => {
  res.json({
    commentsEnabled: true,
    itemsPerPage: 10,
  });
});

/**
 * Oppdaterer nyhetsmodulens innstillinger.
 * @name PUT /settings
 * @function
 * @memberof module:routes/news
 * @param {express.Request} req HTTP-forespørselen med innstillinger
 * @param {express.Response} res HTTP-responsen med oppdatert info
 * @returns {void}
 */
router.put('/settings', (req, res) => {
  const settings = {
    commentsEnabled: req.body.commentsEnabled,
    itemsPerPage: req.body.itemsPerPage,
  };
  res.json({ settings });
});

export default router;
