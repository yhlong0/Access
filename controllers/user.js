var UserModel = require('../models/user');

exports.getAllUsers = function(req, res) {

    UserModel.getUser('5b759c580c4dd990d555d4e4', function(err, user) {
        res.send('test user info ' + user);
    });  
};