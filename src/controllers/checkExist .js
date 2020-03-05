const checkEmail = require('../database/queries/checkUserEmail');

module.exports = (req, res, next) => {
  checkEmail(req.body.email).then(({ rows }) => {
    if (rows.length === 0) {
      const err = new Error();
      err.msg = 'user doesn\'t exist';
      err.status = 400;
      next(err);
    } else next();
  }).catch(next);
};
