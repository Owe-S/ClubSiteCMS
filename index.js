import express from 'express';
import newsRoutes from './routes/news.js';
import siteSettingsRoutes from './routes/siteSettings.js';
import userRoutes from './routes/user.js';

/**
 * Hovedapplikasjonsfil for ClubSiteCMS.
 * Setter opp Express-serveren og monterer de ulike API-rutemodulene.
 * @module main
 */
const app = express();

// Middleware for å parse JSON-request bodies
app.use(express.json());

/**
 * En enkel velkomst-rute for API-roten.
 * @name GET /api
 * @function
 * @memberof module:main
 * @param {express.Request} req - Forespørselsobjektet.
 * @param {express.Response} res - Responsobjektet.
 */
app.get('/api', (req, res) => {
  res.json({ message: 'Velkommen til ClubSiteCMS API' });
});

// Monter rutemodulene på deres respektive stier
app.use('/api/news', newsRoutes);
app.use('/api/site/settings', siteSettingsRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
  console.log(`API tilgjengelig på http://localhost:${PORT}/api`);
  console.log(`Nyhets-API på http://localhost:${PORT}/api/news`);
  console.log(`Nettstedsinnstillinger-API på http://localhost:${PORT}/api/site/settings`);
  console.log(`Bruker-API på http://localhost:${PORT}/api/user`);
});

// Valgfritt: For automatisk nedstenging under testing (fjern eller juster for produksjon)
// Vurder om du fortsatt trenger denne hvis du tester manuelt eller via andre metoder.
if (process.env.NODE_ENV === 'test_codex') { // Eksempel på betingelse
  console.log('Automatisk nedstenging aktivert for test_codex.');
  setTimeout(() => {
    server.close(() => {
      console.log('Server stoppet automatisk etter testperiode.');
      process.exit(0); // Avslutt prosessen
    });
  }, 15000); // Økt til 15 sekunder
}

// Eksporter app for eventuell testing eller programmatisk bruk
export default app;
