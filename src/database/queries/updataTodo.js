const connection = require('../config/connection');

const doneTodo = (id) => {
  connection.query('update todos set done=true where user_id=$1', [id]);
};

module.exports = doneTodo;
