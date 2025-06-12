/**
 * API-ruter for bildegalleriet.
 * @module routes/gallery
 */
import express from 'express';
const router = express.Router();

// In-memory data for dette eksempelet - erstatt med databasekall senere
let galleryStore = [
  { id: 1, title: 'Klubbmesterskap 2023', imageUrl: '/images/gallery/klubbmesterskap.jpg', uploaded_at: '2023-09-15' },
  { id: 2, title: 'Dugnad Vår 2024', imageUrl: '/images/gallery/dugnad_var.png', uploaded_at: '2024-05-02' },
];
let nextGalleryId = 3;

/**
 * Henter alle bilder fra galleriet.
 * @name GET /api/gallery
 * @function
 * @memberof module:routes/gallery
 * @param {express.Request} req HTTP-forespørselen
 * @param {express.Response} res HTTP-responsen med listen over galleribilder
 * @returns {void}
 */
router.get('/', (req, res) => { // Stien er '/' relativt til '/api/gallery'
  res.json({ gallery: galleryStore });
});

/**
 * Legger til et nytt bilde i galleriet.
 * Forventer 'title' og 'imageUrl' i request body.
 * @name POST /api/gallery
 * @function
 * @memberof module:routes/gallery
 * @param {express.Request} req HTTP-forespørselen. Body bør inneholde { title: "...", imageUrl: "..." }.
 * @param {express.Response} res HTTP-responsen med det nylig tillagte bildet.
 * @returns {void}
 */
router.post('/', (req, res) => { // Stien er '/'
  const { title, imageUrl } = req.body;
  if (!title || !imageUrl) {
    return res.status(400).json({ message: 'Title and imageUrl are required.' });
  }
  const newImage = {
    id: nextGalleryId++,
    title,
    imageUrl,
    uploaded_at: new Date().toISOString().split('T')[0], // Dagens dato YYYY-MM-DD
  };
  galleryStore.push(newImage);
  res.status(201).json(newImage);
});

export default router;
