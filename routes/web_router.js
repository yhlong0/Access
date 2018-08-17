const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const systemController = require('../controllers/system');
const roleController = require('../controllers/role');

/* Show API page. */
router.get('/', function(req, res) {
    res.send('Welcome to API.');
});


/* Show one user. */
router.get('/users/:userId', userController.getUser);

/* Show users data. */
router.get('/users', userController.getAllUsers);

/* Creat new user. */
router.post('/users', userController.addUser);





/* Show all systems. */
router.get('/systems', systemController.getAllSystems);

/* Show one system. */
router.get('/systems/:systemId', systemController.getSystem);

/* Creat new system. */
router.post('/systems', systemController.addSystem);




/* Show all roles. */
router.get('/roles', roleController.getAllRoles);

/* Show one system. */
router.get('/roles/:roleId', roleController.getRole);

/* Creat new role. */
router.post('/roles', roleController.addRole);




module.exports = router;