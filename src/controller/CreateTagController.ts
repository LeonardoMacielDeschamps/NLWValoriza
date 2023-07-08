import { Request, Response } from 'express';
import { CreateTagService } from '../service/CreateTagService';

class CreateTagController {

  async handle(request: Request, response: Response) {
    const { name } = request.body;

    return response.json(await new CreateTagService().execute({ name }));
  }

}

export { CreateTagController }