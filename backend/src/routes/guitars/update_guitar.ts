import Guitars from '../../models/guitars';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from './../../types/HTTP';
import { Request } from 'express';

export default {
  method: HTTPMethod.PATCH,
  url: '/guitar',
  controller: async (req: Request) => {
    const updateGuitar = await Guitars.findByIdAndUpdate(
      req.body.id,
      {
        name: req.body.name,
        price: req.body.price,
      },
      { new: true }
    ).exec();
    console.log(updateGuitar);

    return updateGuitar;
  },
} as APIRoute;
