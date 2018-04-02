var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    phone: String,
    address: String,
    images: [{
        imgage_name:String,
        image_url: String,
        image_type: String,
        created_date: Date,
    }],
});

var User = mongoose.model('UserDetails', userSchema);

module.exports = User;