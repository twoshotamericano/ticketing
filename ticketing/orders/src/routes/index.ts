import express, { NextFunction, Request, response, Response } from 'express';
import { authRequired } from '@eaticket-test/common';
const route = express.Router();
import { Order } from '../../models/orders';

route.get(
  '/api/orders',
  authRequired,
  async (req: Request, res: Response, ntx: NextFunction) => {
    //const id = req.params.id;

    const orders = await Order.find({
      userId: req.currentUser!.id,
    }).populate('ticket');

    return res.status(200).send(orders);
  }
);

export { route as ShowOrdersRoute };
