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

    if(req.body.joinDate) {
        joinDate = req.body.joinDate;
    } else {
        joinDate = Date.now();
    }
    
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

exports.deleteUserAccess = function(req, res) {
    let userId = req.params.userId;
    let accessId = req.params.accessId;

    UserModel.deleteUserAccess(userId, accessId, function(err) {
        if (!err) {
            res.json({ message: 'delete success' });
        } else {
            res.json({ message: 'delete failed' });
        }
    });
};

exports.deleteUserRole = function (req, res) {
    let userId = req.params.userId;
    let roleId = req.params.roleId;

    UserModel.deleteUserAccess(userId, roleId, function (err) {
        if (!err) {
            res.json({ message: 'delete success' });
        } else {
            res.json({ message: 'delete failed' });
        }
    });
};

exports.updateUser = function(req, res) {
    let userId = req.params.userId;
    let updateContent = req.body;

    UserModel.updateUser(userId, updateContent, function(err, user) {
        res.json(user);
    });
};


