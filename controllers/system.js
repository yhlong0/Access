var SystemModel = require('../models/system');

exports.getAllSystems = function (req, res) {

    SystemModel.getAllSystems(function (err, systems) {
        res.json(systems);
    });
};