import { Request, Response } from 'express';
import { ListUsersService } from '../service/ListUsersService';

class ListUsersController {

  async handle(request: Request, response: Response) {
    return response.json(await new ListUsersService().execute());
  }

}

export { ListUsersController }