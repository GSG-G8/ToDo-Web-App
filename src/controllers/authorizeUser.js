require('env2')('./config.env');
const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = 'hashasdjas7ads5asdhadsh';
  verify(token, process.env.secret, (err, decoded) => {
    if (err) res.status(401).json({ msg: 'you are not authorized' });
    else {
      req.decodedToken = decoded;
      next();
    }
  });
};
