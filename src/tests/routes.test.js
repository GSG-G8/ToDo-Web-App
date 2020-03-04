const query = require('supertest');

const app = require('../app');

test('test endpoint /signUp', (done) => {
  const data = {
    fname: 'ahmed',
    lname: 'abeer',
    email: 'newemail@hotmail.com',
    psw: '123456789',
  };
  query(app).post('/signUp').send(data).set('Accept', 'application/json')
    .expect(200)
    .end((err) => {
      if (err) return done(err);
      done();
    });
});
