/**
 * Hovedapplikasjonsfil for ClubSiteCMS API.
 * Setter opp Express-serveren og forbereder montering av API-rutemoduler.
 * @module main
 */
import express from 'express';

// Importerer rute-filene
import newsRoutes from './routes/news.js';
import siteSettingsRoutes from './routes/siteSettings.js';
import userRoutes from './routes/user.js';
import galleryRoutes from './routes/gallery.js'; // NY LINJE

const app = express();
app.use(express.json()); // Middleware for å parse JSON-requests

// Monterer (bruker) rutene
app.use('/api/news', newsRoutes);
app.use('/api/site/settings', siteSettingsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/gallery', galleryRoutes); // NY LINJE
// app.use('/api/event', eventRoutes); // Denne venter vi med

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});

setTimeout(() => {
  server.close(() => {
    console.log('Server stoppet automatisk (lokal test)');
  });
}, 10000);

export default app;
