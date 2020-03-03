const router = require('express').Router();
const { test } = require('../controllers');
const { client, server } = require('../controllers/error');

router.get('/test', test);
router.use(client);
router.use(server);

module.exports = router;
