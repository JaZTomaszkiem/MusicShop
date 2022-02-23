// import { addGuitar } from './../../services/GuitarService';
import joi from 'joi';

// import * as guitarService from '../../services/GuitarService';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from '../../types/HTTP';
import { Request, Response } from 'express';
import Guitars from '../../models/guitars';
// import { respondWithSuccess } from '../../lib/http';

export default {
  method: HTTPMethod.POST,
  url: '/guitars/add',
  schema: joi.object({
    name: joi.string().min(5).max(50).required(),
    price: joi.number().min(200).required(),
  }),
  controller: async (req: Request, res: Response) => {
    const guitars = await Guitars.create({
      name: req.body.name,
      price: req.body.price,
    });

    await guitars.save();
  },
} as APIRoute;
