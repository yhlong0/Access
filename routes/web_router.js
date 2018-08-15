var express = require('express');
var router = express.Router();

/* Show API page. */
router.get('/', function(req, res) {
    res.send('Welcome to API.');
});

/* Show users data. */
router.get('/users', function (req, res) {
    res.send('Users data');
});


/* Show one user. */
router.get('/users/:userId', function (req, res) {
    res.send('Users id:  ' + req.params.userId);
});



module.exports = router;