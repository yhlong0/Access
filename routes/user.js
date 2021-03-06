const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const relationController = require('../controllers/relation');

/* Show users data. */
router.get('/', userController.getAllUsers);

/* Creat new user. */
router.post('/', userController.addUser);

/* Update one user. */
router.put('/:userId', userController.updateUser);

/* Show one user. */
router.get('/:userId', userController.getUser);

/* Delete one user. */
router.delete('/:userId', userController.deleteUser);

/* Show user access. */
router.get('/:userId/access', userController.showUserAccess);
//router.get('/:userId', userController.showUserAccess);
//req.query.access
// => "all"



/* Show user roles. */
router.get('/:userId/role', userController.showUserRoles);

/* Add role for user. */
router.post('/:userId/role', relationController.addUserRole);

/* Add access for user. */
router.post('/:userId/access', relationController.addUserAccess);

/* Delete access for user. */
router.delete('/:userId/access/:accessId', userController.deleteUserAccess);

/* Delete role for user. */
router.delete('/:userId/role/:roleId', userController.deleteUserRole);

module.exports = router;