/**
 * Hovedapplikasjonsfil for ClubSiteCMS API.
 * Setter opp Express-serveren og monterer de ulike API-rutemodulene.
 * @module main
 */
import express from 'express';
import newsRoutes from './routes/news.js';
import siteSettingsRoutes from './routes/siteSettings.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());

// Monter rutene
app.use('/api/news', newsRoutes);
app.use('/api/site/settings', siteSettingsRoutes);
app.use('/api/user', userRoutes); // Merk: endret fra /api/user/me for å passe med en dedikert user-router

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});

// Kun for Codex-testing: stopp etter 10 sek
setTimeout(() => {
  server.close(() => {
    console.log('Server stoppet automatisk');
  });
}, 10000);

export default app; // Kan være nyttig for testing
