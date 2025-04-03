const sequelize = require('../config/database');

require('../models');


async function syncDb() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a la base de datos');
    await sequelize.sync({ alter: true });
    console.log('✅ Base de datos sincronizada');
    process.exit();
  } catch (error) {
    console.error('❌ Error al sincronizar:', error);
    process.exit(1);
  }
}

syncDb();
