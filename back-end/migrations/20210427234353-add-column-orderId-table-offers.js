'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('offers', 'orderId', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('offers', 'orderId')
  }
};
