// services/payment.service.js
const { ClientPayment } = require('../models');

class ClientPaymentService {
  // Crear paymente
  async create(data) {
    const ClientPayment = await ClientPayment.create(data);
    return ClientPayment;
  }

  // Obtener un paymente por ID
  async findOne(id) {
    const ClientPayment = await ClientPayment.findByPk(id);
    return ClientPayment;
  }

  // Obtener todos con paginación (15 por página)
  async findAll(page = 1) {
    const limit = 15;
    const offset = (page - 1) * limit;
    const ClientPayments = await ClientPayment.findAll({ limit, offset });
    return ClientPayments;
  }

  // Actualizar un paymente
  async update(id, changes) {
    const ClientPayment = await ClientPayment.findByPk(id);
    if (!ClientPayment) return null;
    await ClientPayment.update(changes);
    return ClientPayment;
  }

  // Eliminar un paymente       
  async delete(id) {
    const ClientPayment = await ClientPayment.findByPk(id);
    if (!ClientPayment) return null;
    await ClientPayment.destroy();
    return { deleted: true };
  }
}

module.exports = new ClientPaymentService();
