const { join } = require('path');
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const { getUser } = require('../database/queries/users');
const { findId } = require('../database/queries/findid');

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
          findId(value.email).then((id) => {
            sign({ userId: id.rows[0].id }, process.env.secret, (err, token) => {
              if (err) next(err);
              res.cookie('token', token).sendFile(join(__dirname, '..', '..', 'public', 'main.html'));
            });
          });
        } else {
          res.join({ msg: 'user name or password incorrect' });
        }
      })
      .catch((err) => next(err));
  }
};

module.exports = login;
