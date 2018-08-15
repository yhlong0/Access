const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/* Show API page. */
router.get('/', function(req, res) {
    res.send('Welcome to API.');
});

/* Show users data. */
router.get('/users', userController.getAllUsers);

/* Show one user. */
router.get('/users/:userId', function (req, res) {
    res.send('Users id:  ' + req.params.userId);
});



module.exports = router;