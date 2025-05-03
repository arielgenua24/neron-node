// services/client.service.js
const { User } = require('../models');

class UserService {
  // Crear cliente
  async create(data) {
    const client = await User.create(data);
    return client;
  }

  // Obtener un usuario por ID
  async findOne(id) {
    const client = await User.findByPk(id);
    return client;
  }

  async findOneByEmail(email) {
    const client = await User.findOne({ where: { email } });
    return client;
  }

  // Obtener todos con paginación (15 por página)
  async findAll(page = 1) {
    const limit = 15;
    const offset = (page - 1) * limit;
    const clients = await User.findAll({ limit, offset });
    return clients;
  }

  // Actualizar un usuario
  async update(id, changes) {
    const client = await User.findByPk(id);
    if (!client) return null;
    await client.update(changes);
    return client;
  }

  // Eliminar un usuario
  async delete(id) {
    const client = await User.findByPk(id);
    if (!client) return null;
    await client.destroy();
    return { deleted: true };
  }
}

module.exports = new UserService();