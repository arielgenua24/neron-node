// models/index.js
const Client = require('./Client');
const Payment = require('./Payment');

// Definir aquí las asociaciones:
Client.hasMany(Payment, {
  foreignKey: 'client_id',
  onDelete: 'CASCADE', // opcional
});

Payment.belongsTo(Client, {
  foreignKey: 'client_id',
});

// Exportar todos los modelos
module.exports = {
  Client,
  Payment,
};