const { join } = require('path');

const addtodo = require('../database/queries/addtodo');

module.exports = (req, res) => {
  const { description } = req.body;
  const userId = req.id;
  addtodo(userId, description);
  res.sendFile(join(__dirname, '..', '..', 'public', 'main.html'));
};
