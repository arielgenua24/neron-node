// models/ClientPayment.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ClientPayment extends Model {}

ClientPayment.init(
  {
    // ID autoincremental
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    month_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'months', // Nombre de la tabla referenciada
        key: 'id',       // Columna de referencia
      },
    },
    client_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    payment_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'payments',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
  },
  {
    sequelize,
    modelName: 'ClientPayment',
    tableName: 'client_payments',  // Nombre explícito de la tabla
    timestamps: true,             // creará createdAt y updatedAt
    // underscored: true,         // Si prefieres created_at y updated_at
  }
);

module.exports = ClientPayment;
