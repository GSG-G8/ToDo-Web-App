const connection = require('../config/connection');

const getTodo = (id) => connection.query('select * from todos where user=$1', [id]);

module.exports = getTodo;
