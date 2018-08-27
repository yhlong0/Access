const UserModel = require('../models/user');

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

exports.deleteUser = function (req, res) {
    let userId = req.params.userId;

    UserModel.deleteUser(userId, function (err) {
        if(!err) {
            res.json({message: 'delete success'});
        } else {
            res.json({ message: 'delete failed' });
        }
    });
};

exports.addUser = function (req, res) {
    let lastname = req.body.lastname;
    let firstname = req.body.firstname;
    let joinDate = Date.now();

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

exports.updateUser = function(req, res) {
    let userId = req.params.userId;
    let updateContent = req.body;

    UserModel.updateUser(userId, updateContent, function(err, user) {
        res.json(user);
    });
}


