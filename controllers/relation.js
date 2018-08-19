const UserModel = require('../models/user');
const SystemModel = require('../models/system');
const RoleModel = require('../models/role');


exports.addUserAccess = function (req, res) {
    let userId = req.params.userId;
    let systemId = req.body.systemId;

    SystemModel.getSystem(systemId, function(err, system) {
        if(err) {
            console.log(err);
        } else {
            let systemAccess = system.toObject();
            systemAccess.accessDate = Date.now();
            UserModel.addUserAccess(userId, systemAccess, function (err, user) {
                res.json(user);
            });
        }
    });
};


exports.addUserRole = function (req, res) {
    let userId = req.params.userId;
    let roleId = req.body.roleId;

    RoleModel.getRole(roleId, function(err, role) {
        if(err) {
            console.log(err);
        } else {
            let roleAccess = role.toObject();
            roleAccess.accessDate = Date.now();
            UserModel.addUserRole(userId, roleAccess, function (err, user) {
                res.json(user);
            });
        }
    });
};