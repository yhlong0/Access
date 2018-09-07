//let config = require('./config/test');
//const mongoose = require('mongoose');
const mongoose = require('mongoose').set('debug', true);

mongoose.connect('mongodb://localhost:27017/access', {useNewUrlParser: true});

exports.mongoose = mongoose;