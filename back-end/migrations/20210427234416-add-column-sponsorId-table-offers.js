'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('offers', 'sponsorId', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
      references: {
        model: 'sponsors',
        key: 'id'
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('offers', 'sponsorId')
  }
};
