const mongoose = require('mongoose');
const UserModel = require('../../models/user');
const config = require('../../config/config');



describe('Test the User Model', () => {
  describe('Test the comparePassword method', () => {
    let user;
    let db;
    beforeAll(async () => {
      db = mongoose.connect(config.test_db);
      await UserModel.remove({});
    });

    beforeEach(async () => {
      user = new UserModel( {
        email: 'test@test.com',
        username: 'testy',
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

    it("has a module", () => {
      expect(UserModel).toBeDefined();
    });

    describe('get user', () => {
      it('gets a user', async () => {
        const foundUser = await UserModel.findOne({ username: 'testy' });
        const expected = 'testy';
        const actual = foundUser.username;
        expect(actual).toEqual(expected);
      });
    });

    describe('save', () => {
      it('saves a user', async () => {
        const savedUser = await user.save();
        const expected = 'testy';
        const actual = savedUser.username;
        expect(actual).toEqual(expected);
      });
    });

    describe('update user', () => {
      it('updates a user', async () => {
        user.username = 'updatedTesty';
        updatedUser = await user.save();
        const expected = 'updatedTesty';
        const actual = updatedUser.username;
        expect(actual).toEqual(expected);
      })
    })

    describe('comparePassword', () => {
      it('validates a user password for authentication', async () => {
        const foundUser = await UserModel.findOne({ username: 'testy' });
        const providedPassword = 'testPassword';
        const isMatch = await foundUser.comparePassword(providedPassword);
        expect(isMatch).toEqual(true);
      })
    })
  })
})

