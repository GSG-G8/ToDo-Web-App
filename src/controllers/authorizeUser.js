require('env2')('./config.env');
const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  verify(req.cookies.token,
    process.env.secret, (err, decoded) => {
      if (err) res.status(401).json({ msg: 'you are not authorized' });
      else {
        req.id = decoded.userId;
        next();
      }
    });
};
