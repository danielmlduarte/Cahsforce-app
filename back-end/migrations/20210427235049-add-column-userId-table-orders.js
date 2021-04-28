'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('orders', 'userId', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'userId')
  }
};
