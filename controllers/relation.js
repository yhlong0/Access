var UserModel = require('../models/user');
var SystemModel = require('../models/system');

exports.addUserAccess = function (req, res) {
    let userId = req.params.userId;
    let systemId = req.body.systemId;

    SystemModel.getSystem(systemId, function(err, system) {
        if(err) {
            console.log(err);
        } else {
            let systemAccess = system.toObject();
            systemAccess.accessDate = Date.now();
            UserModel.addUserAccess(userId, systemAccess, function (err, user) {
                res.json(user);
            });
        }
    });
};