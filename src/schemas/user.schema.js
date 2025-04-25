const Joi = require('joi');

const id = Joi.number().integer().positive();
const nombre = Joi.string().min(1).max(100).required();
const password = Joi.string().min(6).max(50).required();

const createUserSchema = Joi.object({
  nombre,
  password,
});

const updateUserSchema = Joi.object({
  id: id.required(),
  nombre: nombre.optional(),
  password: password.optional(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};