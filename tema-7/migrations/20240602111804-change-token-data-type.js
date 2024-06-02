"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("autenticaciones", "token", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("autenticaciones", "token", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
