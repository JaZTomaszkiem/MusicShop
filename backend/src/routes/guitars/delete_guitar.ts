import Guitars from '../../models/guitars';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from '../../types/HTTP';
import { Request } from 'express';
export default {
  method: HTTPMethod.DELETE,
  url: '/guitar',
  controller: async (req: Request) => {
    const deleteGuitar = await Guitars.findOneAndDelete(req.body.id);

    return { deleteGuitar };
  },
} as APIRoute;
