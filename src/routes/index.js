const router = require('express').Router();
const { validateSignUpData, checkNewUserExist, signUserUp } = require('../controllers');
const { clientError, serverError } = require('../controllers/error');

router.post('/signUp', validateSignUpData, checkNewUserExist, signUserUp);
router.use(clientError);
router.use(serverError);

module.exports = router;
