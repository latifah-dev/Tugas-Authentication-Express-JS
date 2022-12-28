const authJwt = require("../middleware/authjwt.js")
const controller = require("../controllers/order.controller.js");

module.exports = app => {
  app.post("/api/order/create", controller.createOrder);
  app.delete("/api/order/:id", [authJwt.verifyToken], controller.destroyOrder);
};