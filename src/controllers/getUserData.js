const getUserData = require('../database/queries/getUserData');

module.exports = (req, res, next) => {
  getUserData(req.id).then(({ rows }) => res.json(rows)).catch(next);
};
