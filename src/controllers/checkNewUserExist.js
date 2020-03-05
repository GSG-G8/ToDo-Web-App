const checkUserEmail = require('../database/queries/checkUserEmail');

module.exports = (req, res, next) => {
  checkUserEmail(req.body.email).then(({ rows }) => {
    if (rows.length === 0) next();
    else {
      const err = new Error();
      err.msg = 'email already taken';
      err.status = 400;
      next(err);
    }
  }).catch(next);
};
