import express, { Request, Response } from 'express';
import { userTokenHandler, authHandler } from '@eaticket-test/common';
import { add } from '@eaticket-test/maths-package';

const router = express.Router();

router.get(
  '/api/users/currentuser',
  userTokenHandler,

  (req: Request, res: Response) => {
    //Does the user have a session cookie
    return res.send({ currentUser: req?.currentUser || null });
  }
);

export { router as currentUserRouter };
