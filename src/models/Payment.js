const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Payment extends Model {}

Payment.init(
  {
    client_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'clients',    // nombre real de la tabla
        key: 'id',
      },
    },
    payment_month: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    payment_year: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    paid_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // Los timestamps (created_at, updated_at) los creará Sequelize automáticamente
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    timestamps: true, // Esto crea las columnas createdAt y updatedAt
    // Si quieres que se llamen "created_at" y "updated_at" en lugar de "createdAt" y "updatedAt",
    // añade:
    // underscored: true,
  }
);

module.exports = Payment;
