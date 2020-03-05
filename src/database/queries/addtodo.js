const connection = require('../config/connection');

const addTodo = (id, description) => connection.query('insert into todos(id_user,description) values($1,$2)',
  [id, description]);

module.exports = addTodo;
