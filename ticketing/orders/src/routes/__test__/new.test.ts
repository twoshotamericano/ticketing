import request from 'supertest';
import { app } from '../../app';
import { Order, OrderStatus } from '../../../models/orders';
import { Ticket } from '../../../models/ticket';
import mongoose from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';

it('route exists for /api/orders !', async () => {
  const response = await request(app)
    .post('/api/orders/create')
    .send()
    .expect(400);
});

it('protected by auth!', async () => {
  const ticketId = mongoose.Types.ObjectId();

  const response = await request(app)
    .post('/api/orders/create')
    .send({
      ticketId,
    })
    .expect(401);
});

it('requires a specific type of Order!', async () => {
  const response = await request(app)
    .post('/api/orders/create')
    .set('Cookie', await global.signup())
    .send({
      ticketId: 'asasd',
    })
    .expect(400);
});

it('returns an error if the ticket does not exits', async () => {
  const ticketId = mongoose.Types.ObjectId();
  console.log(`The ticketId is ${ticketId}`);
  await request(app)
    .post('/api/orders/create')
    .set('Cookie', await global.signup())
    .send({
      ticketId,
    })
    .expect(404);
});

it('returns an error if the ticket is already reserved', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    id: new mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  console.log(`The ticked id is ${ticket.id}`);

  const order = Order.build({
    ticket,
    userId: 'asdasdad',
    status: OrderStatus.Created,
    expiresAt: new Date(),
  });

  await order.save();

  await request(app)
    .post('/api/orders/create')
    .set('Cookie', await global.signup())
    .send({ ticketId: ticket.id })
    .expect(401);
});

it('creates an order if there is a valid ticket!', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    id: new mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  console.log(`The ticked id is ${ticket.id}`);

  await request(app)
    .post('/api/orders/create')
    .set('Cookie', await global.signup())
    .send({ ticketId: ticket.id })
    .expect(201);
});

it('emits an order created event', async () => {
  // const ticket = Ticket.build({
  //   title: 'concert',
  //   price: 20,
  // });

  // await ticket.save();

  // console.log(`The ticked id is ${ticket.id}`);

  // await request(app)
  //   .post('/api/orders/create')
  //   .set('Cookie', await global.signup())
  //   .send({ ticketId: ticket.id })
  //   .expect(201);

  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });
  await ticket.save();
  console.log(`The ticked id is ${ticket.id}`);
  await request(app)
    .post('/api/orders/create')
    .set('Cookie', await global.signup())
    .send({ ticketId: ticket.id })
    .expect(201);
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
