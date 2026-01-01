import app from './app.js';

// process.env.PORT es la variable que usará Render.
// Si no existe (en local), usará el puerto 3000 por defecto.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
