import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose.set('strictQuery', true); //suprimir warning

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
// app.get('/api/products', (req, res) => {
//   /* Los paramétrode get son url del servidor, función a ejecutarse al ir al url */
//   res.send(data.products); /* Envía de vuelta datos al front */
// });

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Este Producto No Existe' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Este Producto No Existe' });
  }
  console.log(req.params);
});

const port =
  process.env.PORT ||
  5000; /* Definir el puerto que va a responder al backend */

app.listen(port, () => {
  console.log(`servidor en http://localhost:${port}`);
}); /* Se inicializa el servidor y queda listo para responder al frontend. 
Usa dos parámetros: puerto, y una función callback que se ejecuta cuando el servidor está listo*/
