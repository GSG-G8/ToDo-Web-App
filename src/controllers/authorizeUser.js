require('env2')('./config.env');
const { verify } = require('jsonwebtoken');
const { join } = require('path');

module.exports = (req, res, next) => {
  verify(req.cookies.token,
    process.env.secret, (err, decoded) => {
      if (err) res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
      else {
        req.id = decoded.userId;
        next();
      }
    });
};
