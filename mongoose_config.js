const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/access', {useNewUrlParser: true});

exports.mongoose = mongoose;