var SystemModel = require('../models/role');

exports.getAllRoles = function (req, res) {
    SystemModel.getAllRoles(function (err, roles) {
        res.json(roles);
    });
};

exports.getRole = function (req, res) {
    let roleId = req.params.roleId;
    SystemModel.getRole(roleId, function (err, role) {
        res.json(role);
    });
};