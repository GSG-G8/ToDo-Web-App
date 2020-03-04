const getUserData = require('../database/queries/getUserData');

module.exports = (req, res, next) => {
  const { userId } = req.encodedToken;
  getUserData(userId).then(console.log).catch(console.log);
};
