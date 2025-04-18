const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const paymentService = require('../services/payment.service');
const validatorHandler = require('../middlewares/validatorHandler');
const {
    createPaymentSchema,
    updatePaymentSchema,
    getPaymentSchema,
  } = require('../schemas/payment.schema');

// Crear pago
router.post(
  '/',
  validatorHandler(createPaymentSchema, 'body'),
  async (req, res, next) => {
    try {
      const newPayment = await paymentService.create(req.body);
      res.status(201).json(newPayment);
    } catch (err) {
      next(err);
    }
  }
);

// Obtener cliente por ID
router.get('/',
  async (req, res, next) => {
    try {
      console.log('Obteniendo todos los pagos');
      const payments = await paymentService.findAll();
      if (!payments) throw boom.notFound('Pagos no encontrados');
      res.json(payments);
    } catch (err) {
      next(err);
    }
  }
);

// Obtener pago por ID
router.get(
  '/:id',
  validatorHandler(getPaymentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const payment = await paymentService.findOne(id);
      if (!payment) throw boom.notFound('Pago no encontrado');
      res.json(payment);
    } catch (err) {
      next(err);
    }
  }
);

// Actualizar pago
router.put(
  '/:id',
  validatorHandler(getPaymentSchema, 'params'),
  validatorHandler(updatePaymentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const updated = await paymentService.update(id, req.body);
      if (!updated) throw boom.notFound('Pago no encontrado');
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
