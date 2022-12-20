const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;

exports.createCustomer = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "nama tidak boleh kosong !" });
    return;
  }
  if (!req.body.alamat) {
    res.status(400).send({ message: "alamat tidak boleh kosong !" });
    return;
  }
  if (!req.body.gender) {
    res.status(400).send({ message: "jenis kelamin tidak boleh kosong !" });
    return;
  }
  if (!req.body.email) {
    res.status(400).send({ message: "email tidak boleh kosong !" });
    return;
  }
  if (!req.body.notelp) {
    res.status(400).send({ message: "nomor telepon tidak boleh kosong !" });
    return;
  }
  const customer = {
    name: req.body.name,
    alamat: req.body.alamat,
    gender: req.body.gender,
    email: req.body.email,
    notelp: req.body.notelp,
  };
  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "terjadi error saat membuat customer",
      });
    });
};

exports.listCustomer = (req, res) => {
  Customer.findAll()
    .then((data) => {
      if (data.length > 0) {
        res.send(data);
      } else {
        res.send({ message: "tidak ada customer di database" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "terjadi error saat mencari data seluluh customer",
      });
    });
};

exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  Customer.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      if (data == 1) {
        res.status(200).send({ message: "customer berhasil di update." });
      } else {
        res.send({ message: "gagal mengupdate data" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "terjadi error saat mengupdate data" });
    });
};

exports.detailCustomer = (req, res) => {
  const id = req.params.id;
  Customer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `cannont find customer with id = ${id}.`,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message: err.message || "terjadi error saat melihat detail customer",
        });
    });
};

exports.deleteCustomer = (req, res) => {
  const id = req.params.id;
  Customer.destroy({
    where: { id: id },
  })
    .then((data) => {
      if (data == 1) {
        res.status(200).send({ message: "customer berhasil di delete." });
      } else {
        res.send({ message: "gagal menghapus data" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "terjadi error saat menghapus data" });
    });
};
