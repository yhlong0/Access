const mongoose = require('../mongoose_config').mongoose;

const UserSchema = new mongoose.Schema({
    username: String,
    joinDate: String
});

UserSchema.statics.getUser = function(username, callback) {
    this.findOne({username: username}, callback)  
};