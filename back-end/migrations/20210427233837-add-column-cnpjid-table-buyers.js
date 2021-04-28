'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('buyers', 'cnpjId', {
    type: Sequelize.INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    allowNull: true,
    references: {
      model: 'cnpjs',
      key: 'id'
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('buyers', 'cnpjId')
  }
};
