var UserModel = require('../models/user');

exports.getAllUsers = function(req, res) {

    UserModel.getUser('test', function(err, user) {
        res.send('test user info ' + user);
    });  
};