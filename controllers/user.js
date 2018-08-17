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
        lastname: "lastTwo",
        firstname: "firstTwo",
        joinDate: joinDate,
        sysAccess: [
            {
                sysid: "testsysid002",
                sysname: "testsysname002"
            },
            {
                sysid: "testsysid003",
                sysname: "testsysname003"
            }
        ],
        roles: [
            {
                roleid: "testroleid004",
                rolename: "testrolename004"
            },
            {
                roleid: "testroleid005",
                rolename: "testrolename005"
            }
        ]
    }

    UserModel.addUser(user, function (err, user) {
        if(err) {
            console.log(err);
        } else {
            res.send('test user info ' + user.joinDate);
        }       
    });
};