import express from 'express';
import data from './data.js';

const app = express();
app.get('/api/products', (req, res) => {
  /* Los paramétrode get son url del servidor, función a ejecutarse al ir al url */
  res.send(data.products); /* Envía de vuelta datos al front */
});

const port =
  process.env.PORT ||
  5000; /* Definir el puerto que va a responder al backend */

app.listen(port, () => {
  console.log(`servidor en http://localhost:${port}`);
}); /* Se inicializa el servidor y queda listo para responder al frontend. 
Usa dos parámetros: puerto, y una función callback que se ejecuta cuando el servidor está listo*/
