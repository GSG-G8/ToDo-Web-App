const bcrypt = require('bcryptjs');
const rejesterNewUserQuery = require('../database/queries/signup');

module.exports = (req, res, next) => {
  console.log(req.body.psw);
  bcrypt.hash(req.body.psw, 10).then((hashedPassword) => {
    const newUser = {
      name: `${req.body.fname} ${req.body.lname}`,
      email: req.body.email,
      password: hashedPassword,
    };
    console.log(hashedPassword);
    rejesterNewUserQuery(newUser).then(() => { console.log('here'); res.json({ msg: 'signed up successfuly' }); });
  }).catch(next);
};
