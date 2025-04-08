const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Months extends Model {}

Months.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,             // Instancia de conexión
    modelName: 'Months',   // Nombre del modelo
    tableName: 'months',   // Nombre explícito de la tabla en la DB
    timestamps: true,      // createdAt y updatedAt automáticos
  }
);

module.exports = Months;
