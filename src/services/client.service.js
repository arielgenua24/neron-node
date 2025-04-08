// services/client.service.js
const { Client } = require('../models');

class ClientService {
  // Crear cliente
  async create(data) {
    const client = await Client.create(data);
    return client;
  }

  // Obtener un cliente por ID
  async findOne(id) {
    const client = await Client.findByPk(id);
    return client;
  }

  // Obtener todos con paginación (15 por página)
  async findAll(page = 1) {
    const limit = 15;
    const offset = (page - 1) * limit;
    const clients = await Client.findAll({ limit, offset });
    return clients;
  }

  // Actualizar un cliente
  async update(id, changes) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.update(changes);
    return client;
  }

  // Eliminar un cliente
  async delete(id) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.destroy();
    return { deleted: true };
  }
}

module.exports = new ClientService();
