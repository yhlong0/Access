const RoleModel = require('../models/role');

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

exports.updateRole = function (req, res) {
    let roleId = req.params.roleId;
    let updateContent = req.body;
    console.log(updateContent);
    RoleModel.updateRole(roleId, updateContent, function (err, role) {
        res.json(role);
    });
};

exports.addRole = function(req, res) {
    let roleName = req.body.name;
    let roleDescription = req.body.description;
    console.log(req.body);

    role = {
        name: roleName,
        description: roleDescription
    };

    console.log(role);

    RoleModel.addRole(role, function(err, role) {
        if (err) {
            console.log(err);
        } else {
            res.json(role);
        }  
    });
}