/**
 * Modul for API-endepunkter relatert til globale nettstedsinnstillinger.
 * @module routes/siteSettings
 */
import express from 'express';
const router = express.Router();

/**
 * Henter nettstedets globale innstillinger.
 * @name GET /
 * @function
 * @memberof module:routes/siteSettings
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med innstillingene
 * @returns {void}
 */
router.get('/', (req, res) => {
  res.json({
    site_title: 'Ski Golfklubb', // Disse verdiene bør komme fra en konfigurasjon eller database
    default_language: 'no',
    meta_robots: 'NOINDEX, NOFOLLOW', // Vurder å endre dette for produksjon
    theme_version: '3.0',
  });
});

/**
 * Oppdaterer nettstedets globale innstillinger.
 * @name PUT /
 * @function
 * @memberof module:routes/siteSettings
 * @param {express.Request} req HTTP-forespørselen med oppdaterte verdier
 * @param {express.Response} res HTTP-responsen med nye innstillinger
 * @returns {void}
 */
router.put('/', (req, res) => {
  const settings = { // I en ekte applikasjon ville du validert og lagret disse
    site_title: req.body.site_title,
    default_language: req.body.default_language,
    meta_robots: req.body.meta_robots,
    theme_version: req.body.theme_version,
  };
  res.json({ message: 'Site settings updated successfully', settings });
});

export default router;
