import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repository/UserRepository';

async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request;

  const { admin } = await UserRepository.findOneBy({ id: user_id });

  if (!admin) {
    return response.status(401).json({
      error: 'Unauthorized'
    });
  }

  return next();
}

export { ensureAdmin }