const authJwt = require("../middleware/authjwt.js")
const controller = require("../controllers/product.controller.js");

module.exports = app => {
  app.get("/api/product", [authJwt.verifyToken], controller.getProducts);
  app.get(
    "/api/product/:id",
    [authJwt.verifyToken],
    controller.getProductDetail
  );
  app.post("/api/product/create", controller.createProduct);
  app.delete(
    "/api/product/:id",
    [authJwt.verifyToken],
    controller.destroyProduct
  );
  app.put("/api/product/:id", [authJwt.verifyToken], controller.updateProduct);
};