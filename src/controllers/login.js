const { join } = require('path');
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const { getUser } = require('../database/queries/users');
const checkUserEmail = require('../database/queries/checkUserEmail');

const login = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
  };
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  const { error, value } = schema.validate(userData);
  if (error) {
    next(error);
  } else {
    getUser(value.email).then((result) => result.rows[0].password)
      .then((hashedPassword) => bcrypt.compare(value.password, hashedPassword))
      .then((result) => {
        if (result === true) {
          res.sendFile(join(__dirname, '..', '..', 'public', 'main.html'));
        } else {
          res.send('try again');
        }
      })
      .catch((err) => console.log(err));
  }
};

module.exports = login;
