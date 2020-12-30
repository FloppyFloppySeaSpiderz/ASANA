const request = require('supertest');
const server = 'http://localhost:3000';
const db = require('../../../server/server.js');

describe('testing routes that handle users', () => {
  describe('/bcrypt/create_pw', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/bcrypt/create_pw')
          .send({
            username: 'test1',
            password: 'test1',
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200);
      });
    });
  });
});
