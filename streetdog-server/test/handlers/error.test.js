const request = require('supertest');
const app = require('../../index');
const error = require('../../handlers/error');


describe('Test Error Handler', () => {
  test('It should return the error message', (done) => {
    request(app)
      .get('/foo/bar')
      .then((res) => {
        expect(res.statusCode).toBe(404);
        done();
      });
  });
});
