const RoleModel = require('../models/role');
const validate = require('../library/validate'); 

exports.getAllRoles = function (req, res) {
    RoleModel.getAllRoles(function (err, roles) {
        if (!err) {
            res.json(roles);
        } else {
            res.status(500).json({ message: 'Can not find role' });
        }
    });
};

exports.getRole = function (req, res) {
    let roleId = req.params.roleId;

    RoleModel.getRole(roleId, function (err, role) {
        if (!err) {
            res.json(role);
        } else {
            res.status(500).json({ message: 'Can not find role' });
        }
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
                    message: 'Update success',
                    role: role
                });
            } else {
                res.status(500).json({ message: 'Update failed. Error: ' + err });
            }
        });
    } else {
        res.status(400)
            .json({
                message: "Please update role with valid name or description"
            });
    }
};

exports.deleteRole = function (req, res) {
    let roleId = req.params.roleId;

    RoleModel.deleteRole(roleId, function (err) {
        if(!err) {
            res.json({ message: 'Delete success' });
        } else {
            res.status(500).json({ message: 'Role does not exist, delete failed' });
        }
    });
};

exports.addRole = function(req, res) {
    if (validate.has(req.body, 'name') &&
        validate.has(req.body, 'description')
    ) {
        let roleName = req.body.name;
        let roleDescription = req.body.description;

        role = {
            name: roleName,
            description: roleDescription
        };
        
        RoleModel.addRole(role, function (err, role) {
            if (err) {
                res.status(500).json({ message: 'Add role failed.' })
            } else {
                res.json(role);
            }
        });
    } else {
        res.status(400)
            .json({
                message: "Please create role with valid name and description"
            });
    }
};