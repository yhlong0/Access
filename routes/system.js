const express = require('express');
const router = express.Router();
const systemController = require('../controllers/system');

/* Show one system. */
router.get('/:systemId', systemController.getSystem);

/* Update one system. */
router.put('/:systemId', systemController.updateSystem);

/* Delete one system. */
router.delete('/:systemId', systemController.deleteSystem);

/* Show all systems. */
router.get('/', systemController.getAllSystems);

/* Creat new system. */
router.post('/', systemController.addSystem);

module.exports = router;