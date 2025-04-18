// services/payment.service.js
const { Payment } = require('../models');

class paymentService {
  // Crear paymente
  async create(data) {
    const payment = await Payment.create(data);
    return payment;
  }

  // Obtener un paymente por ID
  async findOne(id) {
    const payment = await Payment.findByPk(id);
    return payment;
  }

  // Obtener todos con paginación (15 por página)
  async findAll(page = 1) {
    const limit = 15;
    const offset = (page - 1) * limit;
    const payments = await Payment.findAll({ limit, offset });
    return payments;
  }

  // Actualizar un paymente
  async update(id, changes) {
    const payment = await Payment.findByPk(id);
    if (!payment) return null;
    await payment.update(changes);
    return payment;
  }

  // Eliminar un paymente
  async delete(id) {
    const payment = await Payment.findByPk(id);
    if (!payment) return null;
    await payment.destroy();
    return { deleted: true };
  }
}

module.exports = new paymentService();
