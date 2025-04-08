const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Client extends Model {}

Client.init(
  {
    // ID autoincremental
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuit: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    honorarios: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,            // Instancia de conexión
    modelName: 'Client',  // Nombre del modelo
    tableName: 'clients', // Nombre explícito de la tabla en la DB
    timestamps: true,     // createdAt y updatedAt automáticos
  }
);

module.exports = Client;
