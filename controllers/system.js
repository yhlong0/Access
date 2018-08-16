var SystemModel = require('../models/system');

exports.getAllSystems = function (req, res) {
    SystemModel.getAllSystems(function (err, systems) {
        res.json(systems);
    });
};

exports.getSystem = function (req, res) {
    let systemId = req.params.systemId;
    SystemModel.getSystem(systemId, function (err, system) {
        res.json(system);
    });
};