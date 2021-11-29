import express from 'express';
var router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).send({ elo: 'elo' });
});

export default router;
