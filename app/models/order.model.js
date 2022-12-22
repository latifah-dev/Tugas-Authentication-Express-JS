const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {

    tanggalOrder: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Order;
};
