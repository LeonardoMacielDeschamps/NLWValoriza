import { Request, Response } from 'express';
import { AuthenticateUserService } from '../service/AuthenticateUserService';

class AuthenticateUserController {

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    return response.json(await new AuthenticateUserService().execute({ email, password }));
  }

}

export { AuthenticateUserController }