const connection = require('../config/connection');

const doneTodo = (id, data) => {
  connection.query('update todos set done=$1 where user_id=$2', [data, id]);
};

module.exports = doneTodo;
