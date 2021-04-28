'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('orders', 'providerId', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
      references: {
        model: 'providers',
        key: 'id'
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'providerId')
  }
};
