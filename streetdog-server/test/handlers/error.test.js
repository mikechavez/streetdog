const request = require('supertest');
const app = require('../../index');
const error = require('../../handlers/error');


describe('Test Error Handler', () => {
  test('It should return the error message', () => {
    return request(app)
      .get('/foo/bar')
      .then((res) => {
        expect(res.statusCode).toBe(404);
      });
  });
});

// describe('starting server', () => {
//   let server;
//   beforeEach(() => {
//     server = require('./server');
//   });
//   afterEach(() => {
//     server.close();
//   });
//   test('responds to /', (done) => {
//     request(server)
//     .get('/')
//     expect(200,done);
//   });

// })
