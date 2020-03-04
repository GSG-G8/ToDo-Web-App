const connection = require('../config/connection');

module.exports = (userId) => {
  const sql = {
    text: 'select * from users inner join todos on users.id = todos.id_user where users.id = $1',
    value: [userId],
  };
  return connection.query(sql);
};
