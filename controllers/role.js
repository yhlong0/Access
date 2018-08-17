var RoleModel = require('../models/role');

exports.getAllRoles = function (req, res) {
    RoleModel.getAllRoles(function (err, roles) {
        res.json(roles);
    });
};

exports.getRole = function (req, res) {
    let roleId = req.params.roleId;
    RoleModel.getRole(roleId, function (err, role) {
        res.json(role);
    });
};

exports.addRole = function(req, res) {
    let roleName = req.body.roleName;
    let roleDescription = req.body.roleDescription;

    role = {
        roleName: roleName,
        roleDescription: roleDescription
    };

    RoleModel.addRole(role, function(err, role) {
        if (err) {
            console.log(err);
        } else {
            res.json(role);
        }  
    });
}