const mongoose = require('../mongoose_config').mongoose;

const SystemSchema = new mongoose.Schema({
    systemName: String,
    systemDescription: String,
});

SystemSchema.statics.getSystem = function (id, callback) {
    this.findById(id, callback);
};

SystemSchema.statics.getAllSystems = function (callback) {
    this.find({}, callback);
};

SystemSchema.statics.updateSystem = function (systemId, updateContent, callback) {
    this.findOneAndUpdate(
        {_id: systemId},
        updateContent,
        callback
    );
};

SystemSchema.statics.addSystem = function (system, callback) {
    this.create(system, callback);
};

module.exports = mongoose.model('System', SystemSchema);