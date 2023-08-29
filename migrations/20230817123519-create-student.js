'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      roll_no: {
        type: Sequelize.INTEGER(15),
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING(50),
        allowNull : false
      },

      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull : false
      },

      score: {
        type: Sequelize.INTEGER(3),
        allowNull : false
      },
      
      createdAT: Sequelize.DATE,

      updatedAt: Sequelize.DATE

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};