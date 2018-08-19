const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');

/* Show one system. */
router.get('/:roleId', roleController.getRole);

/* Show all roles. */
router.get('/', roleController.getAllRoles);

/* Creat new role. */
router.post('/', roleController.addRole);


module.exports = router;