const request = require('supertest');
const app = require('../../app');

describe('Test App Routes', () => {

  describe('Invalid Route', () => {
    test('It should return 404 status', () => {
      return request(app)
        .get('/foo/bar')
        .then((res) => {
          expect(res.statusCode).toBe(404);
        });
    });
  });

  describe('Root Route', () => {
    test('It should return 200 status', () => {
      return request(app)
        .get('/')
        .then((res) => {
          expect(res.statusCode).toBe(200);
        });
    });
  })
})

