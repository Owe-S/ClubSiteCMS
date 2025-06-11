/**
 * Hovedapplikasjon for ClubSiteCMS API
 * @module index
 * @license MIT
 */
import express from 'express';

const app = express();
app.use(express.json());

/**
 * Henter nyheter
 * @name GetNews
 * @route {GET} /api/news
 * @returns {Object[]} articles - Liste med nyhetsobjekter
 * @example
 * // Eksempelrespons:
 * {
 *   "articles": [
 *     {
 *       "id": 1,
 *       "title": "Velkommen",
 *       "content": "Dette er en testnyhet"
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
        date: new Date().toISOString()
      }
    ]
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});
