const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
// Ruta temporal para testear
router.get('/', (req, res) => {
  res.send('Ruta de clientes funcionando ✔️');
});


router.get('/error', (req, res, next) => {
  try {
    throw boom.notFound('Cliente no encontrado');
  } catch (err) {
    next(err); // Pasamos el error al middleware
  }
});

module.exports = router;
