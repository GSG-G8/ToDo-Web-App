const router = require('express').Router();

const {
  validateSignUpData, checkNewUserExist, signUserUp, checkEmail, login, authorizeUser, getUserData,
} = require('../controllers');

const { clientError, serverError } = require('../controllers/error');


router.post('/signUp', validateSignUpData, checkNewUserExist, signUserUp);

router.post('/login', checkEmail, login);
router.get('/login', authorizeUser, getUserData);


router.use(clientError);
router.use(serverError);

module.exports = router;
