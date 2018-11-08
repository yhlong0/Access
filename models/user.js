const mongoose = require('../mongoose_config').mongoose;

const UserSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    joinDate: Date,
    status: Boolean,
    sysAccess: [{
        name: String,
        description: String,
        accessDate: Date
    }],
    roles: [{
        name: String,
        description: String,
        accessDate: Date
    }],
});

UserSchema.statics.getUser = function (id, callback) {
    this.findById(id, callback);  
};

UserSchema.statics.getAllUsers = function (top, callback) {
    if(top == null) {
        this.find({}, callback);
    }
    
};

UserSchema.statics.addUser = function (user, callback) {
    this.create(user, callback);
};

UserSchema.statics.updateUser = function (userId, updateContent, callback) {
    this.findOneAndUpdate(
        {_id: userId},
        updateContent,
        {new: true},
        callback
    );
};

UserSchema.statics.deleteUser = function(userId, callback) {
    this.deleteOne({ _id: userId }, callback);
}

UserSchema.statics.addUserAccess = function (userId, sysAccess, callback) {
    this.update(
        { _id: userId },
        {
            $push: {
                sysAccess: sysAccess
            }
        },
        callback
    );
};

UserSchema.statics.deleteUserAccess = function (userId, accessId, callback) {
    this.update(
        { _id: userId },
        {
            $pull: {
                sysAccess: { _id: accessId }
            }
        },
        callback
    );
};

UserSchema.statics.deleteUserRole = function (userId, roleId, callback) {
    this.update(
        { _id: userId },
        {
            $pull: {
                roles: { _id: roleId }
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