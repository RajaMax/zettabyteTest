const express = require('express');

var user = require(process.cwd() + '/controllers/User.js');
var product = require(process.cwd() + '/controllers/Product.js');

var router = express.Router();

//------------------Routes for User Resource-------------------/
router.post('/user/', user.createUsers);
router.get('/user/:id', user.getUser);
router.get('/users/', user.getUsers);
router.put('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);
router.put("/user/uploadimage/:id",user.uploadImage)
//------------------Routes for User Resource-----------------/

//------------------Routes for User Resource-------------------/
router.get('/product/', product.getProducts);
router.post('/product/', product.createProduct);
router.delete('/product/:id', product.deleteProduct);

//------------------Routes for User Resource-----------------/

module.exports = router;
