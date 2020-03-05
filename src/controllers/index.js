const validateSignUpData = require('./validateUserSignUp');
const checkNewUserExist = require('./checkNewUserExist');
const signUserUp = require('./signUserUp');
const validateLogin = require('./validateLogin');
const checkEmail = require('./checkExist ');
const login = require('./login');
const authorizeUser = require('./authorizeUser');
const getUserData = require('./getUserData');

module.exports = {
  validateSignUpData,
  checkNewUserExist,
  signUserUp,
  validateLogin,
  checkEmail,
  login,
  authorizeUser,
  getUserData,
};
