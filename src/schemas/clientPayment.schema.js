// schemas/client.schema.js
const Joi = require('joi');

const id = Joi.number().integer().positive();
const month_id = Joi.number().integer().positive(); 
const client_id = Joi.number().integer().positive();
const payment_id = Joi.number().integer().positive();


const createClientPaymentSchema = Joi.object({
  id: id.required(),
  month_id: month_id.required(),
  client_id: client_id.required(),
  payment_id: payment_id.required(),
});

const updateClientPaymentSchema = Joi.object({
  id: id.required(),
  month_id: month_id.optional(),
  client_id: client_id.optional(),
  payment_id: payment_id.optional(),
});

const getClientPaymentSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createClientPaymentSchema,
  updateClientPaymentSchema,
  getClientPaymentSchema,
};
