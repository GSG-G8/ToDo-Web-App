const validateSignUpData = require('./validateUserSignUp');
const checkNewUserExist = require('./checkNewUserExist');
const signUserUp = require('./signUserUp');
const checkEmail = require('./checkExist ');
const login = require('./login');
const authorizeUser = require('./authorizeUser');
const getUserData = require('./getUserData');

module.exports = {
  validateSignUpData, checkNewUserExist, signUserUp, checkEmail, login, authorizeUser, getUserData,
};
