const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'Kim',
  email: 'kim@test.com',
  password: 'test1234!'
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Peter',
      email: 'peter@example.com',
      password: 'test1234!'
    })
    .expect(201);
});

test('Should login existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200);
});

test('Should not login nonexistent user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      email: 'fake@email.com',
      password: 'fake123!'
    })
    .expect(400);
});
