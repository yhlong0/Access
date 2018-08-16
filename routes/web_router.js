const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const systemController = require('../controllers/system');
const roleController = require('../controllers/role');

/* Show API page. */
router.get('/', function(req, res) {
    res.send('Welcome to API.');
});

/* Show users data. */
router.get('/users', userController.getAllUsers);

/* Creat new user. */
router.get('/users/1', userController.addUser);

/* Show one user. */
router.get('/users/:userId', userController.getUser);



/* Show all systems. */
router.get('/systems', systemController.getAllSystems);




/* Show all roles. */
router.get('/roles', roleController.getAllRoles);

module.exports = router;