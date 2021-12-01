import express from 'express';
let router = express.Router();
import * as guitarControler from '../controllers/guitar';

router.get('/getGuitars', guitarControler.getGuitars);
router.post('/createGuitar', guitarControler.createGuitar);

export default router;
