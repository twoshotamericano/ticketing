import express, { NextFunction, Request, response, Response } from 'express';
import { authRequired, requestValidator } from '@eaticket-test/common';
import { body } from 'express-validator';
import { Order } from '../../models/orders';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';

import {
  authHandler,
  userTokenHandler,
  NotFoundError,
  AuthenticationRequiredError,
  BadRequestError,
  OrderStatus,
} from '@eaticket-test/common';
import { natsWrapper } from '../nats-wrapper';

const route = express.Router();

route.delete(
  '/api/orders',
  [body('orderId').not().isEmpty().withMessage('Order Id must be provided!')],
  requestValidator,
  authRequired,
  async (req: Request, res: Response, ntx: NextFunction) => {
    const id = req.body.orderId;
    console.log(`The order id is ${id}`);

    const order = await Order.findById(id).populate('ticket');

    if (!order) {
      return new NotFoundError();
    }

    if (order?.userId !== req.currentUser!.id) {
      return new AuthenticationRequiredError();
    }

    order.status = OrderStatus.Cancelled;
    await order.save();

    new OrderCancelledPublisher(natsWrapper.client).publish({
      id: order.id,
      status: OrderStatus.Cancelled,
      version: order.version,
      ticket: {
        id: order.ticket.id,
      },
    });

    return res.status(204).send(order);
  }
);

export { route as DeleteOrderRoute };
