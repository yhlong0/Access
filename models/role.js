const mongoose = require('../mongoose_config').mongoose;

const RoleSchema = new mongoose.Schema({
    name: String,
    description: String
});

RoleSchema.statics.getRole = function (id, callback) {
    this.findById(id, callback);
};

RoleSchema.statics.getAllRoles = function (callback) {
    this.find({}, callback);
};

RoleSchema.statics.updateRole = function (roleId, updateContent, callback) {
    this.findOneAndUpdate(
        {_id: roleId},
        updateContent,
        callback
    );
};

RoleSchema.statics.addRole = function (role, callback) {
    this.create(role, callback);
};

module.exports = mongoose.model('Role', RoleSchema);