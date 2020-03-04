const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');


const dbBuild = () => {
  const sqlBuild = readFileSync(join(__dirname, 'build.sql')).toString();
  const sqlInsertdata = readFileSync(join(__dirname, 'fake.sql')).toString();
  return connection.query(sqlBuild + sqlInsertdata);
};

module.exports = { dbBuild };
