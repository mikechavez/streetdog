const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserModel = require('../../models/user');
const config = require('../../config/config');
const { signup, signin } = require('../../handlers/auth');

// tell mongoose methods to return promises
mongoose.Promise = Promise;

describe('Auth Handlers', () => {
  let user;
  let db;
  beforeAll(async () => {
    db = mongoose.connect(config.test_db);
    await UserModel.remove({});
  });

  beforeEach(async () => {
    user = new UserModel( {
      email: 'test1@test.com',
      username: 'testy1',
      password: 'testPassword',
      profileImageUrl: 'www.testimages.com/testimage.png'
    });
    await user.save();
  });

  afterEach(async () => {
    await UserModel.remove({});
  });

  afterAll( async () => {
    await mongoose.connection.close();
  });

  describe('/signin', () => {
    it('should return error message if user not authenticated', async () => {
      // ARRANGE, ACTION, ASSERT pattern
      const { email , password, id, username } = user;

      const req = {
        body: {
          email,
          password
        }
      };

      const res = {
        status: jest.fn()
      };

      const next  = jest.fn()

      await signin(req, res, next);

      expect(next).toHaveBeenCalledWith({
        status: 400,
        message: 'Invalid email or password, duder.'
      })
    })
  })

  describe('/signin', () => {
    it('should return status 200 and user info if user authenticated', async () => {
      // ARRANGE, ACTION, ASSERT pattern
      const { email , id, username } = user;
      const password = 'testPassword';
      const req = {
        body: {
          email,
          password
        }
      };

      const res = {
        status: jest.fn()
      }

      const next  = jest.fn()

      await signin(req, res, next);
      expect(res.status).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenCalledTimes(0);
    })
  })
})
