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
    //console.log(updateContent);
    SystemModel.updateSystem(systemId, updateContent, function (err, system) {
        if(!err) {
            res.json({
                message: 'update success',
                system: system
            });
        } else {
            res.json({ message: 'update failed' });
        }
    });
};

exports.deleteSystem = function (req, res) {
    let systemId = req.params.systemId;

    SystemModel.deleteSystem(systemId, function (err) {
        if(!err) {
            res.json({message: 'delete success'});
        } else {
            res.json({ message: 'delete failed' });
        }
    });
};

exports.addSystem = function (req, res) {
    let systemName = req.body.name;
    let systemDescription = req.body.description;

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

