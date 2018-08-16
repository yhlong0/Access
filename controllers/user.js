var UserModel = require('../models/user');

exports.getAllUsers = function(req, res) {

    UserModel.getUser('5b75e3ff3920b6417009daad', function(err, user) {
        res.send('test user info ' + user.joinDate.getFullYear() + '/' + user.joinDate.getMonth());
    });  
};

exports.addUser = function (req, res) {
    joinDate = new Date();
    user = {
        lastname: "lastOne",
        firstname: "firstOne",
        joinDate: joinDate
    }

    UserModel.addUser(user, function (err, user) {
        res.send('test user info ' + user.joinDate);
    });
};