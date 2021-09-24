const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Pofile route'));

module.exports = router;