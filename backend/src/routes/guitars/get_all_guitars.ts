import Guitars from '../../models/guitars';

import { APIRoute } from '../../types/API';
import { HTTPMethod } from '../../types/HTTP';
import { Request, Response } from 'express';
// import { respondWithSuccess } from '../../lib/http';

export default {
  method: HTTPMethod.GET,
  url: '/guitars',
  controller: async (req: Request, res: Response) => {
    let guitars = await Guitars.find().exec();

    return [...guitars];
  },
} as APIRoute;
