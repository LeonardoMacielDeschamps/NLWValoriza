import { Request, Response } from 'express';
import { ListUserComplimentsReceivedService } from '../service/ListUserComplimentsReceivedService';

class ListUserComplimentsReceivedController {

  async handle(request: Request, response: Response) {
    return response.json(await new ListUserComplimentsReceivedService().execute({
      user_receiver: request.user_id
    }));
  }

}

export { ListUserComplimentsReceivedController }