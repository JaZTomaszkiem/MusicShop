import Guitars from '../../models/guitars';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from './../../types/HTTP';
import { Request } from 'express';

export default {
  method: HTTPMethod.PATCH,
  url: '/guitars/:id',
  controller: async (req: Request) => {
    const updateGuitar = await Guitars.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    return updateGuitar;
  },
} as APIRoute;
