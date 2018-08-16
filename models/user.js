const mongoose = require('../mongoose_config').mongoose;

const UserSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    joinDate: Date,
    sysAccess: [
        {
            sysid: String,
            sysname: String,
            accessTime: Date
        }
    ],
    roles: [
        {
            roleid: String,
            rolename: String,
            accessTime: Date
        }
    ]
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

module.exports = mongoose.model('User', UserSchema);