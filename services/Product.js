var model = require(process.cwd() + "/models/Product.js");

var productService = {
    getProduct: function (id, success, errorcb) {
        model.findById(id, function (err, product) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success(product);
            }
        });
    },

    getProducts: function (success, errorcb) {
        model.find(function (err, products) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success(products);
            }
        });
    },

    createProducts: function (data, success, errorcb) {
        console.log(data);
        var product = new model();
        product.product = data.product;
        product.stock = data.stock;
        product.save(function (err, product) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success(product);
            }
        });
    },

    uploadImage: function (id, data, success, errorcb) {
        model.findById(id, function (err, product) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                data.created_date = new Date();
                product.images.push(data);
                product.save(function (err, product) {
                    if (err) {
                        console.erro(err);
                        errorcb();
                    } else {
                        success(product);
                    }
                });
            }
        });
    },


    updateProduct: function (id, data, success, errorcb) {
        model.findById(id, function (err, product) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                product.name = data.name;
                product.productname = data.productname;
                product.password = data.password;
                product.email = data.email;
                product.phone = data.phone;
                product.address = data.address;
                product.save(function (err) {
                    if (err) {
                        console.erro(err);
                        errorcb();
                    } else {
                        success();
                    }
                });
            }
        });
    },

    deleteProduct: function (id, success, errorcb) {
        model.remove({
            _id: id
        }, function (err, product) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success();
            }
        });
    }
};

module.exports = productService;