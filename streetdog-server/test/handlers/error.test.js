const request = require('supertest');
const app = require('../../app');
const error = require('../../handlers/error');


describe('Test Error Handler', () => {
  test('It should return 404 status', () => {
    return request(app)
      .get('/foo/bar')
      .then((res) => {
        expect(res.statusCode).toBe(404);
      });
  });
});

describe('starting server', () => {
  test('responds to /', () => {
    return request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
})
