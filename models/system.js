const mongoose = require('../mongoose_config').mongoose;

const SystemSchema = new mongoose.Schema({
    sysName: String,
    sysDescription: String,
});

SystemSchema.statics.getSystem = function (id, callback) {
    this.findById(id, callback);
};

SystemSchema.statics.addSystem = function (system, callback) {
    this.create(system, callback);
};

module.exports = mongoose.model('System', SystemSchema);