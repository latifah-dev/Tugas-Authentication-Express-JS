const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Controll-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/customer/all", [auth.verifyToken], controller.listCustomer);

  app.post(
    "/api/customer/create",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.createCustomer
  );
  app.get(
    "/api/customer/detail/customer:id",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.detailCustomer
  );
  app.put(
    "/api/customer/update/customer:id",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.updateCustomer
  );
  app.delete(
    "/api/customer/delete/customer:id",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.deleteCustomer
  );
};
