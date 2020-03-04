const connection = require('../config/connection');

const addUser = (data) => connection.query('insert into users(name,email,password) values($1,$2,$3)',
  [data.name, data.email, data.password]);

module.exports = addUser;
