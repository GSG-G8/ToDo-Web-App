const connection = require('../config/connection');

const findId = (email) => connection.query('select id from users where email = $1', [email]);

module.exports = { findId };
