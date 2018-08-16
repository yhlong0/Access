var SystemModel = require('../models/role');

exports.getAllRoles = function (req, res) {
    SystemModel.getAllRoles(function (err, roles) {
        res.json(roles);
    });
};