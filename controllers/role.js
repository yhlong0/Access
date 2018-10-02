const RoleModel = require('../models/role');
const validate = require('../library/validate'); 

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

    if (validate.has(updateContent, 'name') ||
        validate.has(updateContent, 'description')
    ) {
        RoleModel.updateRole(roleId, updateContent, function (err, role) {
            if (!err) {
                res.json({
                    message: 'update success',
                    role: role
                });
            } else {
                res.status(500).json({ message: 'update failed' });
            }
        });
    } else {
        res.status(400)
            .json({
                message: "PLease update with valid body"
            });
    }
};

exports.deleteRole = function (req, res) {
    let roleId = req.params.roleId;

    RoleModel.deleteRole(roleId, function (err) {
        if(!err) {
            res.json({ message: 'delete success' });
        } else {
            res.json({ message: 'delete failed' });
        }
    });
};

exports.addRole = function(req, res) {
    let roleName = req.body.name;
    let roleDescription = req.body.description;

    role = {
        name: roleName,
        description: roleDescription
    };

    RoleModel.addRole(role, function(err, role) {
        if (err) {
            res.status(500).json({ message: 'Add role failed.' })
        } else {
            res.json(role);
        }  
    });
}