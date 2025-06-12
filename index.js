/**
 * Hovedapplikasjonsfil for ClubSiteCMS API.
 * Setter opp Express-serveren og forbereder montering av API-rutemoduler.
 * @module main
 */
import express from 'express';

// Importerer rute-filene
import newsRoutes from './routes/news.js'; // DENNE LINJEN ER NÅ AKTIVERT
// import siteSettingsRoutes from './routes/siteSettings.js'; // Denne venter vi med
// import userRoutes from './routes/user.js'; // Denne venter vi med

const app = express();
app.use(express.json()); // Middleware for å parse JSON-requests

// Monterer (bruker) rutene
app.use('/api/news', newsRoutes); // DENNE LINJEN ER NÅ AKTIVERT
// app.use('/api/site/settings', siteSettingsRoutes); // Denne venter vi med
// app.use('/api/user', userRoutes); // Denne venter vi med

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});

// Denne timeouten er kun for din lokale testing med `npm start`
// og for å unngå at serveren kjører evig under Codex-testing.
// Den påvirker ikke GitHub Actions eller den publiserte dokumentasjonen.
setTimeout(() => {
  server.close(() => {
    console.log('Server stoppet automatisk (lokal test)');
  });
}, 10000);

// Eksporter 'app' kan være nyttig for fremtidig testing med verktøy som Supertest
export default app;
