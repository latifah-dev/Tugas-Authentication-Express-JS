const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    name: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    notelp: {
      type: Sequelize.STRING,
    },
  });
  return Customer;
};
