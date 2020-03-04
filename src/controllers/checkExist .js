const checkEmail = require('../database/queries/checkUserEmail');

module.exports = (req, res, next) => {
  checkEmail(req.body.email).then(({ rows }) => {
    if (rows.length === 0) res.status(400).json({ msg: 'email Not Found' });
    else next();
  }).catch(next);
};
