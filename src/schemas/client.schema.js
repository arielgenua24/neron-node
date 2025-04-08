// schemas/client.schema.js
const Joi = require('joi');

const id = Joi.number().integer().positive();
const nombre = Joi.string().min(1).max(100).required();
const cuit = Joi.string().length(11).pattern(/^[0-9]+$/).required(); // ejemplo: 11 dígitos
const password = Joi.string().min(6).max(50).required();
const honorarios = Joi.number().positive().required();

const createClientSchema = Joi.object({
  nombre,
  cuit,
  password,
  honorarios,
});

const updateClientSchema = Joi.object({
  nombre: nombre.optional(),
  cuit: cuit.optional(),
  password: password.optional(),
  honorarios: honorarios.optional(),
});

const getClientSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createClientSchema,
  updateClientSchema,
  getClientSchema,
};
