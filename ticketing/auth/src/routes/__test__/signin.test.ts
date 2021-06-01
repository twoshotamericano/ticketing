import request from 'supertest';

import { app } from '../../app';

it('returns a 401 on signing in if not signedup', async () => {
  return request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(401);
});

it('returns a 200 on signing in if user signedup', async () => {
  await request(app).post('/api/users/signup').send({
    email: 'test@test.com',
    password: 'password',
  });

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(200);
});

it('returns a 401 on signing in if user supplies wrong password', async () => {
  await request(app).post('/api/users/signup').send({
    email: 'test2@test.com',
    password: 'password',
  });

  await request(app)
    .post('/api/users/signin')
    .send({
      email: 'test2@test.com',
      password: 'passwd',
    })
    .expect(401);
});
