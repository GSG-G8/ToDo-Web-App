const connection = require('../config/connection');

const addTodo = (data) => connection.query('insert into users(name) values($1)',
  [data.name]);

module.exports = addTodo;
