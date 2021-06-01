import express, { NextFunction, Request, response, Response } from 'express';
import {
  authHandler,
  authRequired,
  userTokenHandler,
  requestValidator,
  NotFoundError,
  AuthenticationRequiredError,
  BadRequestError,
} from '@eaticket-test/common';
import { body, validationResult } from 'express-validator';
import { Order } from '../../models/orders';

const route = express.Router();

route.get(
  '/api/orders/:orderId',
  authRequired,
  async (req: Request, res: Response, ntx: NextFunction) => {
    const id = req.params.orderId;

    const order = await Order.findById(id).populate('ticket');

    if (!order) {
      throw new NotFoundError();
    }

    if (order!.userId !== req.currentUser!.id) {
      throw new AuthenticationRequiredError();
    }

    return res.status(200).send(order);
  }
);

export { route as ShowOrderRoute };
