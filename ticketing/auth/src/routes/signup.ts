import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '@eaticket-test/common';
import { DatabaseConnectionError } from '@eaticket-test/common';
import { BadRequestError } from '@eaticket-test/common';
import jwt from 'jsonwebtoken';
import { requestValidator } from '@eaticket-test/common';

import { User } from '../models/user';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('password must be between 4 and 20 chars'),
  ],
  requestValidator,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    //Check if the user already exists

    const match = await User.findOne({ email });

    if (match) {
      //
      throw new BadRequestError('login already in use!');
    }

    const user = User.build({ email, password });
    const result = await user.save();

    //Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.SIGNING_KEY!
    );

    req.session = { jwt: userJwt };

    res.status(201).send(result);
  }
);

export { router as signupRouter };
