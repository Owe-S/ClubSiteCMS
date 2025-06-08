import express from 'express';

const app = express();
app.use(express.json());

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
const server = app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});

// Kun for Codex-testing: stopp etter 10 sek
setTimeout(() => {
  server.close(() => {
    console.log('Server stoppet automatisk');
  });
}, 10000);
