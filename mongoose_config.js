const config = require('./config/test');
const mongoose = require('mongoose').set('debug', false);
console.log(config.mongoURI[process.env.NODE_ENV]);
mongoose.connect(
    config.mongoURI[process.env.NODE_ENV], 
    {useNewUrlParser: true}, 
    function(err, res) {
        if(err) {
            console.log('Error connecting to db. ' + err);
        } else {
            console.log('Connected to DB: ' + config.mongoURI[process.env.NODE_ENV]);
        }
});

exports.mongoose = mongoose;