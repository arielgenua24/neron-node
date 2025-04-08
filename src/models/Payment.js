const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    payment_month: {
        type: DataTypes.INTEGER,   // o DataTypes.INTEGER
        allowNull: false,
        validate: {
          min: 1,
          max: 12,
        },
      },
    payment_year: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    paid_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    payment_day: {
      type: DataTypes.SMALLINT,
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
