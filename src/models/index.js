const sequelize = require('../config/database'); // 👈 Falta esto


// models/index.js
const Client = require('./Client');
const Payment = require('./Payment');
const ClientPayment = require('./ClientPayment');

// 1. Definimos la relación entre ClientPayment y Client

Client.hasMany(ClientPayment, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE',  // opcional
});


Payment.hasMany(ClientPayment, {
  foreignKey: 'payment_id',
  onDelete: 'CASCADE',  // opcional
});

// 2. Definimos la relación entre ClientPayment y Payment
ClientPayment.belongsTo(Client, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE',  // opcional
});

ClientPayment.belongsTo(Payment, {
  foreignKey: 'payment_id',
  onDelete: 'CASCADE',  // opcional
});


// Exportamos los modelos
module.exports = {
  Client,
  Payment,
  ClientPayment,
};
