var productService = require(process.cwd() + '/services/Product.js');

var proudtController = {
  getProducts: function (req, res) {
    var successCallback = function (users) {
      res.status(200).json(users);
    };
    var errorCallback = function () {
      var response = {};
      response.data = {};
      res.status(500).json(response);
    };
    productService.getProducts(successCallback, errorCallback);
  },
  createProduct: function (req, res, next) {
    var successCallback = function (user) {
      var response = user;
      res.status(201).json(response);
    };
    var errorCallback = function () {
      var response = {};
      response.meta = {};
      response.meta.message = 'Error in product Create';
      res.status(500).json(response);
    };
    console.log(req.body);
    productService.createProducts(req.body, successCallback, errorCallback);
  },
  deleteProduct: function (req, res) {
    var successCallback = function (class1) {
      var response = {};
      response.meta = {};
      response.meta.message = 'Product Deleted';
      res.status(200).json(response);
    };
    var errorCallback = function () {
      var response = {};
      response.meta = {};
      response.meta.message = 'error in Produt';
      res.status(500).json(response);
    };

    productService.deleteProduct(req.params.id, successCallback, errorCallback);
  }
};
module.exports = proudtController;