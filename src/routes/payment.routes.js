const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const paymentService = require('../services/payment.service');
const ClientPaymentService = require('../services/clientPayment.service');
const validatorHandler = require('../middlewares/validatorHandler');
const {
    createPaymentSchema,
    updatePaymentSchema,
    getPaymentSchema,
  } = require('../schemas/payment.schema');

const {
  createClientPaymentSchema,
  updateClientPaymentSchema,
  getClientPaymentSchema,
} = require('../schemas/clientPayment.schema');

//concatenacion de validadores
const fullSchema = createPaymentSchema.concat(createClientPaymentSchema);

// Crear pago
router.post(
  '/',
  validatorHandler(fullSchema, 'body'),
  async (req, res, next) => {
    try {
      const newPayment = await paymentService.create(req.body);
      const { month_id, client_id } = req.body;

      if(!!newPayment) {
        const { id } = newPayment;
        const body = req.body;
        console.log(body)
        console.log(id)
        const clientPayment = {
          payment_id: id,
          month_id,
          client_id,
        };
        console.log(clientPayment)
        // await ClientPaymentService.create(clientPayment);
      }
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
