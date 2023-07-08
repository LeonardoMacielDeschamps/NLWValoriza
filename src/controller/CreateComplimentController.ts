import { Request, Response } from 'express';
import { CreateComplimentService } from '../service/CreateComplimentService';

class CreateComplimentController {

  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;

    return response.json(await new CreateComplimentService().execute({
      tag_id,
      user_sender: request.user_id,
      user_receiver,
      message
    }));
  }

}

export { CreateComplimentController }