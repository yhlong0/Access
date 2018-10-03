const UserModel = require('../models/user');
const SystemModel = require('../models/system');
const RoleModel = require('../models/role');


exports.addUserAccess = function (req, res) {
    let userId = req.params.userId;
    let systemId = req.body.id;

    SystemModel.getSystem(systemId, function(err, system) {
        if(err) {
            res.status(500).json({ message: 'Can not find system.' });
        } else {
            let systemAccess = system.toObject();
            systemAccess.accessDate = Date.now();

            UserModel.addUserAccess(userId, systemAccess, function (err, user) {
                if (err) {
                    res.status(500)
                       .json({ 
                            message: 'Can not add access. Error: ' + err
                        });
                } else {
                    res.json(user);
                } 
            });
        }
    });
};


exports.addUserRole = function (req, res) {
    let userId = req.params.userId;
    let roleId = req.body.id;
    
    RoleModel.getRole(roleId, function(err, role) {
        if(err) {
            res.status(500).json({ message: 'Can not find role.' });
        } else {
            let roleAccess = role.toObject();
            roleAccess.accessDate = Date.now();

            UserModel.addUserRole(userId, roleAccess, function (err, user) {
                if (err) {
                    res.status(500)
                       .json({ 
                            message: 'Can not add role. Error: ' + err
                        });
                } else {
                    res.json(user);
                } 
            });
        }
    });
};