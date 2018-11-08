const SystemModel = require('../models/system');
const validate = require('../library/validate'); 

exports.getAllSystems = function (req, res) {
    let top = req.query.top;

    SystemModel.getAllSystems(top, function (err, systems) {
        if (!err) {
            res.json(systems);
        } else {
            res.status(500).json({ message: 'Can not find system' });
        }
    });
};

exports.getSystem = function (req, res) {
    let systemId = req.params.systemId;

    SystemModel.getSystem(systemId, function (err, system) {
        if (!err) {
            res.json(system);
        } else {
            res.status(500).json({ message: 'Can not find system' });
        }
    });
};

exports.updateSystem = function (req, res) {
    let systemId = req.params.systemId;
    let updateContent = req.body;
    
    if (validate.has(updateContent, 'name') ||
        validate.has(updateContent, 'description')
    ) {
        SystemModel.updateSystem(systemId, updateContent, function (err, system) {
            if(!err) {
                res.json({
                    message: 'Update success',
                    system: system
                });
            } else {
                res.json({ message: 'Update failed. Error: ' + err });
            }
        });
    } else {
        res.status(400)
        .json({
            message: "Please update system with valid name or description."
        });
    }
};

exports.deleteSystem = function (req, res) {
    let systemId = req.params.systemId;

    SystemModel.deleteSystem(systemId, function (err) {
        if(!err) {
            res.json({message: 'Delete success'});
        } else {
            res.status(400)
               .json({ 
                   message: 'System does not exist, delete failed.' 
                });
        }
    });
};

exports.addSystem = function (req, res) {
    if (validate.has(req.body, 'name') &&
        validate.has(req.body, 'description')
    ) {
        let systemName = req.body.name;
        let systemDescription = req.body.description;

        system = {
            name: systemName,
            description: systemDescription
        };

        SystemModel.addSystem(system, function (err, system) {
            if (err) {
                res.status(500)
                   .json({ 
                       message: 'Can not add system. Error: ' + err
                    });
            } else {
                res.json(system);
            }  
        });
    } else {
        res.status(400)
            .json({
                message: "Please create system with valid name and description."
            });
    }
};

