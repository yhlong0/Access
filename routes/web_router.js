const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const systemController = require('../controllers/system');
const roleController = require('../controllers/role');
const relationController = require('../controllers/relation');

/* Show API page. */
router.get('/', function(req, res) {
    res.send('Welcome to API.');
});

/* Add role for user. */
router.post('/users/:userId/role', relationController.addUserRole);

/* Add access for user. */
router.post('/users/:userId/access', relationController.addUserAccess);

/* Show user access. */
router.get('/users/:userId/access', userController.showUserAccess);

/* Show one user. */
router.get('/users/:userId', userController.getUser);

/* Show users data. */
router.get('/users', userController.getAllUsers);

/* Creat new user. */
router.post('/users', userController.addUser);




/* Show one system. */
router.get('/systems/:systemId', systemController.getSystem);

/* Show all systems. */
router.get('/systems', systemController.getAllSystems);

/* Creat new system. */
router.post('/systems', systemController.addSystem);



/* Show one system. */
router.get('/roles/:roleId', roleController.getRole);

/* Show all roles. */
router.get('/roles', roleController.getAllRoles);

/* Creat new role. */
router.post('/roles', roleController.addRole);




module.exports = router;