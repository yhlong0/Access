var UserModel = require('../models/user');

exports.getAllUsers = function(req, res) {
    UserModel.getAllUsers(function(err, users) {
        res.json(users);
    });  
};

exports.getUser = function (req, res) {
    let userId = req.params.userId;
    UserModel.getUser(userId, function (err, user) {
        res.json(user);
    });
};

exports.addUser = function (req, res) {
    let lastname = req.body.lastname;
    let firstname = req.body.firstname;
    let joinDate = new Date();

    user = {
        lastname: lastname,
        firstname: firstname,
        joinDate: joinDate,
        status: true,
        sysAccess: [
        ],
        roles: [
        ]
    };

    UserModel.addUser(user, function (err, user) {
        if(err) {
            console.log(err);
        } else {
            res.json(user);
        }       
    });
};

exports.showUserAccess = function (req, res) {
    let userId = req.params.userId;
    UserModel.getUser(userId, function (err, user) {
        res.json(user.sysAccess);
    });
};

exports.addUserAccess = function (req, res) {
    let userId = req.params.userId;
    
    let accessDate = new Date();

    let sysAccess = {
        systemId: 'test123456789',
        systemName: 'test0019',
        systemDescription: 'test system description',
        accessDate: accessDate
    };

    UserModel.addUserAccess(userId, sysAccess, function(err, user) {
        res.json(user);
    });
};
