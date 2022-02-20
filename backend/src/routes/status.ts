import { APIRoute } from '../types/API';
import { HTTPCode, HTTPMethod } from '../types/HTTP';
import APIError from '../lib/error';

export default {
  method: HTTPMethod.GET,
  url: '/status',
  controller: () => {
    throw new APIError('Test message', HTTPCode.PAYMENT_REQUIRED);
    return { test: '123' };
  },
} as APIRoute;
