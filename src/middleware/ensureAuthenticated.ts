import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
};

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      error: 'Missing token'
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const { sub } = verify(token, 'ec2da23874ad5af9a34fc364539a2b49') as IPayload;

    request.user_id = sub;

    return next();
  }
  catch (err) {
    return response.status(401).json({
      error: err.message
    });
  }
}

export { ensureAuthenticated }