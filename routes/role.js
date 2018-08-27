const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');

/* Show one roles. */
router.get('/:roleId', roleController.getRole);

/* Update one roles. */
router.put('/:roleId', roleController.updateRole);

/* Delete one role. */
router.delete('/:roleId', roleController.deleteRole);

/* Show all roles. */
router.get('/', roleController.getAllRoles);

/* Creat new role. */
router.post('/', roleController.addRole);


module.exports = router;