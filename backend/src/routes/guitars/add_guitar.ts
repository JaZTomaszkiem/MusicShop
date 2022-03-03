import joi from 'joi';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from '../../types/HTTP';
import { Request, Response } from 'express';
import Guitars from '../../models/guitars';

export default {
  method: HTTPMethod.POST,
  url: '/guitars',
  schema: joi.object({
    name: joi.string().min(5).max(50).required(),
    price: joi.string().required(),
  }),
  controller: async (req: Request, res: Response) => {
    const guitars = await Guitars.create({
      name: req.body.name,
      price: req.body.price,
    });

    await guitars.save();
    return guitars;
  },
} as APIRoute;
