const db = require("../models");

const Product = db.product;

exports.createProduct = async (req, res) => {
  // transaction
  const t = await db.sequelize.transaction();
  try {
    // insert product
    const insertProduct = await Product.create(
      {
        name: req.body.name,
        uom: req.body.uom,
        stock: req.body.stock,
        price: req.body.price
      },
      { transaction: t }
    );
    await t.commit();

    // response when product stored to database successfully
    return res.send({
      message: "Product successfully added!",
      data: insertProduct
    });
  } catch (e) {
    // await t.rollback();
    // return error message
    return res.status(500).send({
      message: e.message
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    // get all product from database
    const products = await Product.findAll();
    // check is any product available in database

    if (!products) {
      return res.send({
        message: "No Product found in database!"
      });
    }

    return res.send({
      message: "Data successfully fetched!",
      data: products
    });
  } catch (e) {
    return res.status(500).send({
      message: e.message
    });
  }
};

exports.getProductDetail = async (req, res) => {
  try {
    // get id from parameter
    const id = req.params.id;
    // find one product by id
    const product = await Product.findOne({
      where: {
        id
      }
    });
    // check is product exists
    if (!product) {
      return res.status(400).send({
        message: "Product not found!"
      });
    }
    return res.send({
      message: "Data successfully fetched!",
      data: product
    });
  } catch (e) {
    return res.status(500).send({
      message: e.message
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    // get id from parameter
    const id = req.params.id;
    // find one product by id
    const product = await Product.findOne({
      where: {
        id
      }
    });
    // check is product exists
    if (!product) {
      return res.status(400).send({
        message: "Product not found!"
      });
    }
    product.update(req.body);
    return res.status(200).send({
      message: "Product has been updated!"
    });
  } catch (e) {
    return res.status(500).send({
      message: e.message
    });
  }
};

exports.destroyProduct = async (req, res) => {
  try {
    // get id from parameter
    const id = req.params.id;
    // find one product by id
    const product = await Product.findOne({
      where: {
        id
      }
    });
    // check is product exists
    if (!product) {
      return res.status(400).send({
        message: "Product not found!"
      });
    }
    // delete product from database
    await product.destroy();
    res.send({
      message: `Product with id ${id} was successfully deleted!`
    });
  } catch (e) {
    return res.status(500).send({
      message: e.message
    });
  }
};