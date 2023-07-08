import { instanceToPlain } from 'class-transformer';
import { ComplimentRepository } from '../repository/ComplimentRepository';

interface IListUserComplimentsSentServiceRequest {
  user_sender: string;
}

class ListUserComplimentsSentService {

  async execute({ user_sender }: IListUserComplimentsSentServiceRequest) {
    return instanceToPlain(await ComplimentRepository.find({
      where: {
        user_sender
      },
      relations: ['userSender', 'userReceiver', 'tag']
    }));
  }

}

export { ListUserComplimentsSentService }