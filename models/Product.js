var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    product: String,
    stock:Number,
});

var User = mongoose.model('Product', userSchema);

module.exports = User;