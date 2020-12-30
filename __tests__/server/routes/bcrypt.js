const request = require('supertest');
const server = 'http://localhost:3000';

const db = require('../../../server/routes/bcrypt.js');

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe('Bcrypt post route', () => {
  describe('/bcrypt/create_pw', () => {
    describe('POST', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('It should respond with status 200 and content type json', (done) => {
        return request(server)
          .post('/bcrypt/create_pw')
          .send({
            'username': 'test',
            'password': 'test',
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      });
    });
  });
});