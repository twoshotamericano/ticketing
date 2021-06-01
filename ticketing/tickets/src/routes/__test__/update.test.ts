import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import mongoose from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';

it('it returns 404 if update endpoint not found!', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .put(`/api/tickets/${id}`)
    .set('Cookie', await global.signup())
    .send({ title: 'asasdas', price: '20' })
    .expect(404);
});

it('it returns 404 if record does not exist!', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .put(`/api/tickets/${id}`)
    .set('Cookie', await global.signup())
    .send({ title: 'asasdas', price: '20' })
    .expect(404);
});

it('user is unauthorized if not signed-in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .put(`/api/tickets/${id}`)
    .send({ title: 'asasdas', price: '20' })
    .expect(401);
});

it('returns 401 if the user does not own the ticket', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const userCookie = await global.signup();
  const responseCreate = await request(app)
    .post(`/api/tickets/create`)
    .set('Cookie', userCookie)
    .send({ title: 'asasdas', price: '20' })
    .expect(201);

  const responseUpdate = await request(app)
    .put(`/api/tickets/${responseCreate.body.id}`)
    .set('Cookie', await global.signup())
    .send({ title: 'asasdas', price: '20' })
    .expect(401);
});

it('returns 400 if the price or title is missing', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const userCookie = await global.signup();
  const responseCreate = await request(app)
    .post(`/api/tickets/create`)
    .set('Cookie', userCookie)
    .send({ title: 'asasdas', price: '20' })
    .expect(201);

  await request(app)
    .put(`/api/tickets/${id}`)
    .set('Cookie', userCookie)
    .send({ title: 'asasdas' })
    .expect(400);

  await request(app).put(`/api/tickets/${id}`).send({ price: 50 }).expect(400);
});

it('update occurs if record found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const userCookie = await global.signup();

  const titleOriginal = 'sdfsddasd';
  const priceOriginal = 20;
  const titleUpdated = 'sdfsddasd';
  const priceUpdated = 20;

  const responseCreate = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', userCookie)
    .send({ title: titleOriginal, price: priceOriginal })
    .expect(201);

  const createdId = responseCreate.body.id;
  //console.log(`the created id is ${createdId}`);

  const responseUpdate = await request(app)
    .put(`/api/tickets/${createdId}`)
    .set('Cookie', userCookie)
    .send({ title: titleUpdated, price: priceUpdated })
    .expect(200);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${createdId}`)
    .send()
    .expect(200);

  expect(ticketResponse.body.title).toEqual(titleUpdated);
  expect(ticketResponse.body.price).toEqual(priceUpdated);
});

it('publishes an event', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const userCookie = await global.signup();

  const titleOriginal = 'sdfsddasd';
  const priceOriginal = 20;
  const titleUpdated = 'sdfsddasd';
  const priceUpdated = 20;

  const responseCreate = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', userCookie)
    .send({ title: titleOriginal, price: priceOriginal })
    .expect(201);

  const createdId = responseCreate.body.id;
  //console.log(`the created id is ${createdId}`);

  const responseUpdate = await request(app)
    .put(`/api/tickets/${createdId}`)
    .set('Cookie', userCookie)
    .send({ title: titleUpdated, price: priceUpdated })
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

it('return a 401 if the ticket has already been reserved!', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const userCookie = await global.signup();

  const titleOriginal = 'sdfsddasd';
  const priceOriginal = 20;
  const orderId = new mongoose.Types.ObjectId().toHexString();
  const titleUpdated = 'sdfsddasd';
  const priceUpdated = 20;

  const responseCreate = await request(app)
    .post('/api/tickets/create')
    .set('Cookie', userCookie)
    .send({ title: titleOriginal, price: priceOriginal })
    .expect(201);

  const createdId = responseCreate.body.id;
  const ticket = await Ticket.findById(createdId);
  ticket!.set({ orderId: orderId });
  await ticket!.save();

  //console.log(`the created id is ${createdId}`);

  const responseUpdate = await request(app)
    .put(`/api/tickets/${createdId}`)
    .set('Cookie', userCookie)
    .send({ title: titleUpdated, price: priceUpdated })
    .expect(401);

  expect(responseUpdate.status).toEqual(401);
});
