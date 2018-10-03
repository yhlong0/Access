const UserModel = require('../models/user');
const validate = require('../library/validate'); 

exports.getAllUsers = function(req, res) {
    UserModel.getAllUsers(function(err, users) {
        if (!err) {
            res.json(users);
        } else {
            res.status(500).json({ message: 'Can not find user' });
        }
    });  
};

exports.getUser = function (req, res) {
    let userId = req.params.userId;

    UserModel.getUser(userId, function (err, user) {
        if (!err) {
            res.json(user);
        } else {
            res.status(500).json({ message: 'Can not find user' });
        }
    });
};

exports.deleteUser = function (req, res) {
    let userId = req.params.userId;

    UserModel.deleteUser(userId, function (err) {
        if(!err) {
            res.json({ message: 'Delete success' });
        } else {
            res.status(400)
               .json({ 
                   message: 'User does not exist, delete failed' 
                });
        }
    });
};

exports.addUser = function (req, res) {
    if (validate.has(req.body, 'lastname') &&
        validate.has(req.body, 'firstname')
    ) {

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
    } else {
        res.status(400)
        .json({
            message: "Please create user with valid last name and first name."
        });
    }
};

exports.showUserAccess = function (req, res) {
    let userId = req.params.userId;
    UserModel.getUser(userId, function (err, user) {
        if(err) {
            console.log(err);
        } else {
            res.json(user.sysAccess);
        }  
    });
};

exports.showUserRoles = function (req, res) {
    let userId = req.params.userId;
    UserModel.getUser(userId, function (err, user) {
        if(err) {
            console.log(err);
        } else {
            res.json(user.roles);
        } 
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

    UserModel.deleteUserRole(userId, roleId, function (err) {
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


