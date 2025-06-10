/**
 * Hovedfil for ClubSiteCMS API
 * @file Opsetter Express-server og API-ruter
 * @module index
 */

import express from 'express';

const app = express();
app.use(express.json());

/**
 * Henter nyhetsartikler
 * @name GET /api/news
 * @route {GET} /api/news
 * @returns {Object} JSON-objekt med nyhetsliste
 * @returns {Object[]} articles - Liste med artikler
 * @returns {number} articles.id - Artikkelens ID
 * @returns {string} articles.title - Artikkelens tittel
 * @returns {string} articles.content - Artikkelens innhold
 * @returns {string} articles.date - Publiseringsdato (ISO-format)
 * @example {json} Eksempelsvar
 * {
 *   "articles": [
 *     {
 *       "id": 1,
 *       "title": "Eksempeltittel",
 *       "content": "Dette er innhold...",
 *       "date": "2023-10-15T12:00:00.000Z"
 *     }
 *   ]
 * }
 */
app.get('/api/news', (req, res) => {
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

const PORT = process.env.PORT || 8080;

/**
 * Starter webserver
 * @function
 * @listens {PORT}
 */
const server = app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});

// Kun for Codex-testing: stopp etter 10 sek
setTimeout(() => {
  /**
   * Stenger server (kun for testmiljø)
   * @function
   */
  server.close(() => {
    console.log('Server stoppet automatisk');
  });
}, 10000);
