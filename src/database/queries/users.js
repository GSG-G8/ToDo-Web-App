const connection = require('../config/connection');

const getUsers = () => connection.query('select * from users');

const getUser = (userEmail) => connection.query('select password from users where email = $1', [userEmail]);

module.exports = {
  getUsers,
  getUser,
};
