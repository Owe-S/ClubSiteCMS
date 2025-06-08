// index.js
import express from 'express';

const app = express();
app.use(express.json());

// Dummy route for /api/news
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});
