const express = require('express');

var user = require(process.cwd() + '/controllers/User.js');
var router = express.Router();

//------------------Routes for User Resource-------------------/
router.post('/user/', user.createUsers);
router.get('/user/:id', user.getUser);
router.get('/users/', user.getUsers);
router.put('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);
router.put("/user/uploadimage/:id",user.uploadImage)
//------------------Routes for User Resource-----------------/

module.exports = router;
