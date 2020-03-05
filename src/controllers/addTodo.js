const addtodo = require('../database/queries/addtodo');

module.exports = (req, res) => {
  const { description } = req.body;
  const userId = req.id;
  addtodo(userId, description);
  res.redirect('/');
};
