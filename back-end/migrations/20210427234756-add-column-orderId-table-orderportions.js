'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('orderportions', 'orderId', {
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
    await queryInterface.removeColumn('orderportions', 'orderId')
  }
};
