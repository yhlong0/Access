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

exports.updateSystem = function (req, res) {
    let systemId = req.params.systemId;
    let updateContent = req.body;
    console.log(updateContent);
    SystemModel.updateSystem(systemId, updateContent, function (err, system) {
        res.json(system);
    });
};

exports.addSystem = function (req, res) {
    let systemName = req.body.systemName;
    let systemDescription = req.body.systemDescription;

    system = {
        name: systemName,
        description: systemDescription
    };

    SystemModel.addSystem(system, function (err, system) {
        if (err) {
            console.log(err);
        } else {
            res.json(system);
        }  
    });
};

