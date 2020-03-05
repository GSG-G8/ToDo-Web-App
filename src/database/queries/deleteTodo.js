const connection = require('../config/connection');

const deleteTodo = (id) => connection.query('delete from todos where id = $1', [id]);

module.exports = deleteTodo;
