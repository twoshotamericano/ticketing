import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  //check env variables defined
  if (!process.env.SIGNING_KEY) {
    throw new Error('JWT SIGNING KEY NOT DEFINED');
  }

  if (!process.env.MONGO_SERVER_NAME) {
    throw new Error('Mongo Database Name not defined!');
  }

  try {
    await mongoose.connect(`${process.env.MONGO_SERVER_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('connected to mongoDB!');
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000!');
  });
};

start();
