import { Request, Response } from 'express';
import { ListUserComplimentsSentService } from '../service/ListUserComplimentsSentService';

class ListUserComplimentsSentController {

  async handle(request: Request, response: Response) {
    return response.json(await new ListUserComplimentsSentService().execute({
      user_sender: request.user_id
    }));
  }

}

export { ListUserComplimentsSentController }