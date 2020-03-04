const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const checkUserEmail = require('../database/queries/checkUserEmail');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

test('test checkUser email exist', () => {
  checkUserEmail('abeer@gmail.com').then(({ rows }) => {
    expect(rows).toEqual([]);
  });
});
