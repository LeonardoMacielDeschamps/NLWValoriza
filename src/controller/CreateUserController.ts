import { Request, Response } from 'express';
import { CreateUserService } from '../service/CreateUserService';

class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, password, email, admin } = request.body;

    return response.json(await new CreateUserService().execute({ name, password, email, admin }));
  }

}

export { CreateUserController }