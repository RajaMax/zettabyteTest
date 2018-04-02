var model = require(process.cwd() + "/models/User.js");

var userService = {
    getUser: function (id, success, errorcb) {
        model.findById(id, function (err, user) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success(user);
            }
        });
    },

    getUsers: function (success, errorcb) {
        model.find(function (err, users) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success(users);
            }
        });
    },

    createUsers: function (data, success, errorcb) {
        console.log(data);
        var user = new model();
        user.name= data.name;
        user.username=data.username;
        user.password=data.password;
        user.email=data.email;
        user.phone=data.phone;
        user.address=data.address;

        user.save(function (err, user) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success(user);
            }
        });
    },

    uploadImage: function (id, data, success, errorcb) {
        model.findById(id, function (err, user) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                data.created_date=new Date();
               user.images.push(data);
                user.save(function (err,user) {
                    if (err) {
                        console.erro(err);
                        errorcb();
                    } else {
                        success(user);
                    }
                });
            }
        });
    },


    updateUser: function (id, data, success, errorcb) {
        model.findById(id, function (err, user) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                user.name= data.name;
                user.username=data.username;
                user.password=data.password;
                user.email=data.email;
                user.phone=data.phone;
                user.address=data.address;
                user.save(function (err) {
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
    
    deleteUser: function (id, success, errorcb) {
        model.remove({
            _id: id
        }, function (err, user) {
            if (err) {
                console.error(err);
                errorcb();
            } else {
                success();
            }
        });
    }
};

module.exports = userService;
