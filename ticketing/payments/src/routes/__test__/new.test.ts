import { Order, OrderStatus } from '../../models/orders';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { stripe } from '../../stripe';
import { Payment } from '../../models/payments';

jest.mock('../../stripe');

it('returns bad request if not your order', async () => {});

it('returns 404 if purchasing order that does not exist', async () => {
  await request(app)
    .post('/api/payments')
    .set('Cookie', (await global.signup()).cookie)
    .send({
      token: 'asdsa',
      orderId: mongoose.Types.ObjectId().toHexString(),
    })
    .expect(404);
});

it('returns 401 if order cancelled', async () => {
  const { cookie, userId } = await global.signup();

  const order = await Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId: mongoose.Types.ObjectId().toHexString(),
    price: 20,
    status: OrderStatus.Cancelled,
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', cookie)
    .send({ orderId: order.id, token: 'asdsa' })
    .expect(401);
});

it('returns success if you own the order and it is not expired', async () => {
  const { cookie, userId } = await global.signup();

  const order = await Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId: userId,
    price: 20,
    status: OrderStatus.Created,
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', cookie)
    .send({ token: 'tok_visa', orderId: order.id })
    .expect(201);

  expect(stripe.charges.create).toHaveBeenCalled();
  const chargeOptions = (stripe.charges.create as jest.Mock).mock.calls[0][0];
  expect(chargeOptions.source).toEqual('tok_visa');
  expect(chargeOptions.amount).toEqual(20 * 100);
  expect(chargeOptions.currency).toEqual('usd');
});

// it('saves payment details to the database', async () => {
//   const { cookie, userId } = await global.signup();

//   const order = await Order.build({
//     id: mongoose.Types.ObjectId().toHexString(),
//     version: 0,
//     userId: userId,
//     price: 20,
//     status: OrderStatus.Created,
//   });

//   await order.save();

//   await request(app)
//     .post('/api/payments')
//     .set('Cookie', cookie)
//     .send({ token: 'tok_visa', orderId: order.id })
//     .expect(201);

//   const pmt = await Payment.findOne({ orderId: order.id });

//   expect(pmt).not.toBeNull();
// });
