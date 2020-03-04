const router = require('express').Router();
const {
  validateSignUpData, checkNewUserExist, signUserUp, authorizeUser, getUserData,
} = require('../controllers');
const { clientError, serverError } = require('../controllers/error');

router.get('/login', authorizeUser, getUserData);

router.post('/signUp', validateSignUpData, checkNewUserExist, signUserUp);
router.use(clientError);
router.use(serverError);

module.exports = router;
