const router = require('express').Router();

const { clientError, serverError } = require('../controllers/error');
const {
  validateSignUpData,
  checkNewUserExist,
  signUserUp,
  validateLogin,
  checkEmail,
  login,
  authorizeUser,
  getUserData,
  addtodo,
  updateDone,
  deleteTodo,
} = require('../controllers');


router.get('/login', authorizeUser, getUserData);
router.post('/signUp', validateSignUpData, checkNewUserExist, signUserUp);
router.post('/login', validateLogin, checkEmail, login);
router.post('/logout', (req, res) => res.clearCookie('token').redirect('/'));

router.post('/addtodo', authorizeUser, addtodo);
router.post('/condition', updateDone);
router.post('/delete', deleteTodo);

router.use(clientError);
router.use(serverError);

module.exports = router;
