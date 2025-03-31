const express = require('express');
const router = express.Router();

// Importar rutas individuales
const clientRoutes = require('./client.routes.js');

// Usar rutas
router.use('/clients', clientRoutes);

module.exports = router;
