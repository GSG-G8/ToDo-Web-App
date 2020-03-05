const { join } = require('path');
const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { getUser } = require('../database/queries/users');
const { findId } = require('../database/queries/findid');

const login = (req, res, next) => {
  const { logInData } = req;
  getUser(logInData.email).then((result) => result.rows[0].password)
    .then((hashedPassword) => bcrypt.compare(logInData.password, hashedPassword))
    .then((result) => {
      if (result === true) {
        findId(logInData.email).then((dataId) => {
          sign({ userId: dataId.rows[0].id }, process.env.secret, (err, token) => {
            if (err) next(err);
            res.cookie('token', token).sendFile(join(__dirname, '..', '..', 'public', 'main.html'));
          });
        });
      } else {
        res.join({ msg: 'user name or password incorrect' });
      }
    })
    .catch((err) => next(err));
};

module.exports = login;
