const connection = require('../config/connection');

const addTodo = (id, data) => connection.query('insert into todos(id_user,description) values($1,$2)',
  [id, data.description]);

module.exports = addTodo;
