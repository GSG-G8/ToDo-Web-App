const router = require('express').Router();
const { test } = require('../controllers');
const { clientError, serverError } = require('../controllers/error');

router.get('/test', test);
router.use(clientError);
router.use(serverError);

module.exports = router;
