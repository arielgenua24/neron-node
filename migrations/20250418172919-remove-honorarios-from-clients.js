'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Elimina la columna honorarios
    await queryInterface.removeColumn('clients', 'honorarios');
  },

  async down (queryInterface, Sequelize) {
    // En caso de revertir, la volvemos a añadir
    await queryInterface.addColumn(
      'clients',
      'honorarios',
      {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
      }
    );
  }
};
