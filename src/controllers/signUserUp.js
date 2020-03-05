const bcrypt = require('bcryptjs');
const rejesterNewUserQuery = require('../database/queries/signup');

module.exports = (req, res, next) => {
  bcrypt.hash(req.body.psw, 10).then((hashedPassword) => {
    const newUser = {
      name: `${req.body.fname} ${req.body.lname}`,
      email: req.body.email,
      password: hashedPassword,
    };
    rejesterNewUserQuery(newUser).then(() => res.json({ msg: 'signed up successfuly' })).catch(next);
  }).catch(next);
};
