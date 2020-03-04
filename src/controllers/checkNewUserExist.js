const checkUserEmail = require('../database/queries/checkUserEmail');

module.exports = (req, res, next) => {
  checkUserEmail(req.body.email).then(({ rows }) => {
    if (rows.length === 0) next();
    else res.status(400).json({ msg: 'email already taken' });
  }).catch(next);
};
