const mongoose = require('../mongoose_config').mongoose;

const UserSchema = new mongoose.Schema({
    username: String,
    joinDate: String
});

UserSchema.statics.getUser = function (id, callback) {
    this.findById(id, callback);  
};

module.exports = mongoose.model('User', UserSchema);