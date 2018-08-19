const SystemModel = require('../models/system');

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

exports.addSystem = function (req, res) {
    let systemName = req.body.systemName;
    let systemDescription = req.body.systemDescription;

    system = {
        systemName: systemName,
        systemDescription: systemDescription
    };

    SystemModel.addSystem(system, function (err, system) {
        if (err) {
            console.log(err);
        } else {
            res.json(system);
        }  
    });
};