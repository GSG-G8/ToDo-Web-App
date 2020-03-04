const connection = require('../config/connection');

module.exports = (userId) => {
  const sql = {
    text: 'select todos.id, todos.description, todos.done from users inner join todos on users.id = todos.id_user where users.id = $1',
    values: [userId],
  };
  return connection.query(sql);
};
