const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const systemController = require('../controllers/system');

/* Show API page. */
router.get('/', function(req, res) {
    res.send('Welcome to API.');
});

/* Show users data. */
router.get('/users', userController.getAllUsers);

/* Creat new user. */
router.get('/users/1', userController.addUser);

/* Show one user. */
router.get('/users/:userId', function (req, res) {
    res.send('Users id:  ' + req.params.userId);
});



/* Show all systems. */
router.get('/systems', systemController.getAllSystems);



module.exports = router;