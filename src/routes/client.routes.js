const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const clientService = require('../services/client.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createClientSchema,
  updateClientSchema,
  getClientSchema,
} = require('../schemas/client.schema');

// Crear cliente
router.post(
  '/',
  validatorHandler(createClientSchema, 'body'),
  async (req, res, next) => {
    try {
      const newClient = await clientService.create(req.body);
      res.status(201).json(newClient);
    } catch (err) {
      next(err);
    }
  }
);

// Obtener cliente por ID
router.get(
  '/:id',
  validatorHandler(getClientSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const client = await clientService.findOne(id);
      if (!client) throw boom.notFound('Cliente no encontrado');
      res.json(client);
    } catch (err) {
      next(err);
    }
  }
);

// Actualizar cliente
router.put(
  '/:id',
  validatorHandler(getClientSchema, 'params'),
  validatorHandler(updateClientSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const updated = await clientService.update(id, req.body);
      if (!updated) throw boom.notFound('Cliente no encontrado');
      res.json(updated);
    } catch (err) {
      next(err);
    }
  }
);
