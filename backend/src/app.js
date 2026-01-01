import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getMessage } from './message.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Servir frontend
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Endpoint API
app.get('/api/message', (req, res) => {
  res.json({ message: getMessage() });
});

// Catch-all para React Router (debe ir después de la API)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

export default app;

