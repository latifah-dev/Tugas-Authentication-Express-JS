const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: Sequelize.STRING,
    },
    uom: {
      type: Sequelize.STRING,
    },
    stock: {
      type: Sequelize.STRING,
    },
    harga: {
      type: Sequelize.STRING,
    },
  });
  return Product;
};
