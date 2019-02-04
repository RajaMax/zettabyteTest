var userService = require(process.cwd() + '/services/User.js');

var userController = {
  getUser: function(req, res) {

    var successCallback = function(user) {
      res.status(200).json(user);
    };
    var errorCallback = function() {
      var response = {};
      response.meta = {};
      response.meta.message = 'error in user';
      res.status(500).json(response);
    };

    userService.getUser(req.params.id, successCallback, errorCallback);
  },

  getUsers: function(req, res) {
    var successCallback = function(users) {
      res.status(200).json(users);
    };
    var errorCallback = function() {
      var response = {};
      response.data = {};
      res.status(500).json(response);
    };
    userService.getUsers(successCallback, errorCallback);
  },

  createUsers: function(req, res, next) {
    var successCallback = function(user) {
      var response = user;
      res.status(201).json(response);
    };
    var errorCallback = function() {
      var response = {};
      response.meta = {};
      response.meta.message = 'Error in User Create';
      res.status(500).json(response);
    };
    console.log(req.body.data);
    userService.createUsers(req.body.data, successCallback, errorCallback);
  },

  uploadImage: function(req, res, next) {
    var successCallback = function(user) {
      var response = user;
      res.status(201).json(response);
    };
    var errorCallback = function() {
      var response = {};
      response.meta = {};
      response.meta.message = 'Error in User Create';
      res.status(500).json(response);
    };
    console.log(req.body.data);
    userService.uploadImage(req.params.id,req.body.data, successCallback, errorCallback);
  },

  updateUser: function(req, res, next) {
    var successCallback = function() {
      var response = req.body;
      res.status(200).json(response);
    };
    var errorCallback = function() {
      var response = {};
      response.meta = {};
      response.meta.message = 'User Error in update';
      res.status(500).json(response);
    };

    userService.updateUser(req.params.id, req.body.data, successCallback, errorCallback);
  },

  deleteUser: function(req, res) {
    var successCallback = function(class1) {
      var response = {};
      response.meta = {};
      response.meta.message = 'User Deleted';
      res.status(200).json(response);
    };
    var errorCallback = function() {
      var response = {};
      response.meta = {};
      response.meta.message = 'error in User';
      res.status(500).json(response);
    };

    userService.deleteUser(req.params.id, successCallback, errorCallback);
  }
};
module.exports = userController;
