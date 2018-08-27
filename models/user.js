const mongoose = require('../mongoose_config').mongoose;

const UserSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    joinDate: Date,
    status: Boolean,
    sysAccess: { type: Array, "default": [] },
    roles: { type: Array, "default": [] },
});

UserSchema.statics.getUser = function (id, callback) {
    this.findById(id, callback);  
};

UserSchema.statics.getAllUsers = function (callback) {
    this.find({}, callback);
};

UserSchema.statics.addUser = function (user, callback) {
    this.create(user, callback);
};

UserSchema.statics.updateUser = function (userId, updateContent, callback) {
    this.findOneAndUpdate(
        {_id: userId},
        updateContent,
        callback
    );
};

UserSchema.statics.deleteUser = function(userId, callback) {
    console.log(userId);
    this.deleteOne({ _id: userId }, callback);
}

UserSchema.statics.addUserAccess = function (userId, sysAccess, callback) {
    this.update(
        {_id: userId},
        {
            $push: {
                sysAccess: sysAccess
            }
        },
        callback
    );
};

UserSchema.statics.addUserRole = function (userId, roleAccess, callback) {
    this.update(
        {_id: userId},
        {
            $push: {
                roles: roleAccess
            }
        },
        callback
    );
};

module.exports = mongoose.model('User', UserSchema);