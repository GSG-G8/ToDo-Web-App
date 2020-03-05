const router = require('express').Router();

const {
  validateSignUpData,
  checkNewUserExist,
  signUserUp,
  validateLogin,
  checkEmail,
  login,
  authorizeUser,
  getUserData,
} = require('../controllers');

const { clientError, serverError } = require('../controllers/error');

router.get('/login', authorizeUser, getUserData);
router.post('/signUp', validateSignUpData, checkNewUserExist, signUserUp);
router.post('/login', validateLogin, checkEmail, login);
router.post('/logout', (req, res) => res.clearCookie('token').redirect('/'));

router.use(clientError);
router.use(serverError);

module.exports = router;
