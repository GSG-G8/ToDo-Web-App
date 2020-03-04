const connection = require('../config/connection');

module.exports = (data) => {
  const sql = {
    text: 'insert into users (name, email, password) values ($1, $2, $3)',
    values: [data.name, data.email, data.password],
  };
  return connection.query(sql);
};
