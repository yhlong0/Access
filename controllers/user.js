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
    joinDate = new Date();
    user = {
        lastname: "lastOne",
        firstname: "firstOne",
        joinDate: joinDate,
        sysAccess: [
            {
                sysid: "testsysid001",
                sysname: "testsysname001"
            },
            {
                sysid: "testsysid002",
                sysname: "testsysname002"
            }
        ],
        roles: [
            {
                roleid: "testroleid001",
                rolename: "testrolename001"
            },
            {
                roleid: "testroleid002",
                rolename: "testrolename002"
            }
        ]
    }

    UserModel.addUser(user, function (err, user) {
        res.send('test user info ' + user.joinDate);
    });
};