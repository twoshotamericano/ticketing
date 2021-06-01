import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  authHandler,
  requestValidator,
  NotFoundError,
  BadRequestError,
  OrderStatus,
} from '@eaticket-test/common';
import { Order } from '../models/orders';
import { isEmptyBindingElement } from 'typescript';
import { stripe } from '../stripe';
import { Payment } from '../models/payments';
import { natsWrapper } from '../nats-wrapper';
import { PaymentCreatedPublisher } from '../events/publishers/payment-created-publisher';

const router = express.Router();

router.post(
  '/api/payments',
  authHandler,
  [body('token').not().isEmpty(), body('orderId').not().isEmpty()],
  requestValidator,
  async (req: Request, res: Response) => {
    const { token, orderId } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
      console.log(
        `This is the current user ${
          order.userId
        } and this is the request current user ${req.currentUser!.id}`
      );
      throw new BadRequestError('You do not own this ticket!');
    }

    if (order.status === OrderStatus.Cancelled) {
      throw new BadRequestError('Cannot pay for a cancelled order');
    }

    const charge = await stripe.charges.create({
      currency: 'usd',
      amount: order.price * 100,
      source: token,
    });

    const payment = Payment.build({
      chargeId: charge.id,
      orderId: order.id,
    });

    await payment.save();

    new PaymentCreatedPublisher(natsWrapper.client).publish({
      id: payment.id,
      orderId: payment.orderId,
      chargeId: payment.chargeId,
    });

    res.status(201).send({ id: payment.id });
  }
);

export { router as createChargeRouter };
