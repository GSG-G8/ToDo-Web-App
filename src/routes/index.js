const router = require('express').Router();
const login = require('../controllers/login');
const {
  validateSignUpData, checkNewUserExist, signUserUp, checkEmail,
} = require('../controllers');

const { clientError, serverError } = require('../controllers/error');

router.post('/signUp', validateSignUpData, checkNewUserExist, signUserUp);

router.post('/login', checkEmail, login);

router.use(clientError);
router.use(serverError);

module.exports = router;
