const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Asegura que el email sea único
      validate: {
        isEmail: true, // Valida que el formato del email sea correcto
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,            // Instancia de conexión
    modelName: 'User',   // Nombre del modelo
    tableName: 'users',   // Nombre explícito de la tabla en la DB
    timestamps: true,     // createdAt y updatedAt automáticos
  }
);

module.exports = User;
