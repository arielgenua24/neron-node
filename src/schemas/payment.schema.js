// src/schemas/payment.schema.js
const Joi = require('joi');

const id = Joi.number().integer().positive();

const payment_month = Joi.number()
  .integer()
  .min(1)
  .max(12)
  .required();

const payment_year = Joi.number()
  .integer()
  .min(2000)    // ajusta estos límites si lo deseas
  .max(2100)
  .required();

const payment_date = Joi.number()
  .integer()
  .min(1)
  .max(31)
  .required();

const paid_amount = Joi.number()
  .precision(2)
  .positive()
  .required();

const createPaymentSchema = Joi.object({
  payment_month,
  payment_year,
  payment_date,
  paid_amount,
});

const updatePaymentSchema = Joi.object({
  payment_month: payment_month.optional(),
  payment_year: payment_year.optional(),
  payment_date: payment_date.optional(),
  paid_amount: paid_amount.optional(),
});

const getPaymentSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPaymentSchema,
  updatePaymentSchema,
  getPaymentSchema,
};
