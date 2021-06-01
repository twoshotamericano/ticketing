import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import jwt from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface Global {
      signup(): Promise<string>;
    }
  }
}

let mongo: any;

jest.mock('../nats-wrapper.ts');

beforeAll(async () => {
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  process.env.SIGNING_KEY = 'abcd';
  process.env.NODE_ENV = 'test';

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  jest.clearAllMocks();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signup = async () => {
  // Build a JWT payload. {id, email}

  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: 'asdasdasd@gmail.com',
  };

  // Create a JWT token
  const token = jwt.sign(payload, process.env.SIGNING_KEY!);

  //Build session Object. {jwt: MY_JWT}
  const session = { jwt: token };

  //TUrn it into JSON
  const sessionJSON = JSON.stringify(session);

  // Take JSON and decode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  //return a string that's the cookie with cookie data
  return `express:sess=${base64}`;
};
