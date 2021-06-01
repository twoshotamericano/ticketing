import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  //remove cookie from request

  req.session = null;

  return res.status(200).send({});

  res.send(req.body);
});

export { router as signoutRouter };
