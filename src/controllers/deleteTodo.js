const deleteTodo = require('../database/queries/deleteTodo');

module.exports = (req, res) => {
  const userId = req.body.todoIdDeleted;
  deleteTodo(userId);
  res.redirect('/login');
};
