const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Controll-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/customer/all", [authJwt.verifyToken], controller.listCustomer);

  app.post(
    "/api/customer/create",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.createCustomer
  );
  app.get(
    "/api/customer/detail/:id",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.detailCustomer
  );
  app.put(
    "/api/customer/update/:id",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.updateCustomer
  );
  app.delete(
    "/api/customer/delete/:id",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.deleteCustomer
  );
};
