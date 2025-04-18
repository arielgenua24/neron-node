const express = require('express');
const router = express.Router();

// Importar rutas individuales
const clientRoutes = require('./client.routes.js');
const paymentRoutes = require('./payment.routes.js');
//const clientPaymentRoutes = require('./clientPayment.routes.js');

// Usar rutas
router.use('/clients', clientRoutes);
router.use('/payments', paymentRoutes);
//router.use('/client-payments', clientPaymentRoutes);

module.exports = router;
