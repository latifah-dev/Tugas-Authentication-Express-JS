exports.listCustomer = (req, res) => {
  res.status(200).send("ini daftar customer.");
};

exports.createCustomer = (req, res) => {
  res.status(200).send("ini untuk membuat customer.");
};

exports.updateCustomer = (req, res) => {
  res.status(200).send("ini untuk update customer.");
};

exports.detailCustomer = (req, res) => {
  res.status(200).send("ini untuk detail customer.");
};

exports.deleteCustomer = (req, res) => {
  res.status(200).send("ini untuk menghapus customer.");
};
