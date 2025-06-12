/**
 * API-ruter for håndtering av globale nettstedsinnstillinger.
 * @module routes/siteSettings
 */
import express from 'express';
const router = express.Router();

// In-memory data for dette eksempelet - erstatt med databasekall senere
let siteSettingsStore = {
  site_title: 'Ski Golfklubb',
  default_language: 'no',
  meta_robots: 'NOINDEX, NOFOLLOW',
  theme_version: '3.0',
};

/**
 * Henter nettstedets globale innstillinger.
 * @name GET /api/site/settings
 * @function
 * @memberof module:routes/siteSettings
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med innstillingene
 * @returns {void}
 */
router.get('/', (req, res) => { // Stien er '/' relativt til '/api/site/settings'
  res.json(siteSettingsStore);
});

/**
 * Oppdaterer nettstedets globale innstillinger.
 * Eksempelpayload for request body:
 * {
 *   "site_title": "Min Fantastiske Klubb",
 *   "default_language": "en"
 * }
 * @name PUT /api/site/settings
 * @function
 * @memberof module:routes/siteSettings
 * @param {express.Request} req HTTP-forespørselen med oppdaterte verdier i req.body
 * @param {express.Response} res HTTP-responsen med de nye innstillingene
 * @returns {void}
 */
router.put('/', (req, res) => { // Stien er '/'
  const { site_title, default_language, meta_robots, theme_version } = req.body;

  if (site_title !== undefined) siteSettingsStore.site_title = site_title;
  if (default_language !== undefined) siteSettingsStore.default_language = default_language;
  if (meta_robots !== undefined) siteSettingsStore.meta_robots = meta_robots;
  if (theme_version !== undefined) siteSettingsStore.theme_version = theme_version;
  
  res.json({ settings: siteSettingsStore });
});

export default router;
