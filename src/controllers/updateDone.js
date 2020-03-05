const doneTodo = require('../database/queries/updataTodo');

module.exports = (req, res) => {
  if (req.body.done === false) {
    doneTodo(req.body.todoId, true);
    res.json({ mes: 'convert from false to true' });
  } else {
    doneTodo(req.body.todoId, false);
    res.json({ mes: 'convert from true to false' });
  }
};
