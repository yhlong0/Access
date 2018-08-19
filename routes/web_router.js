const express = require('express');
const router = express.Router();

/* Show API page. */
router.get('/', function(req, res) {
    res.send('Welcome to API.');
});

module.exports = router;