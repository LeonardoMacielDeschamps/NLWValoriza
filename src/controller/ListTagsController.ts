import { Request, Response } from 'express';
import { ListTagsService } from '../service/ListTagsService';

class ListTagsController {

  async handle(request: Request, response: Response) {
    return response.json(await new ListTagsService().execute());
  }

}

export { ListTagsController }