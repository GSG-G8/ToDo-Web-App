const connection = require('../config/connection');

module.exports = (email) => {
  const sql = {
    text: 'select password from users where email = $1',
    values: [email],
  };
  return connection.query(sql);
};
