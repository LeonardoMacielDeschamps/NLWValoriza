import { instanceToPlain } from 'class-transformer';
import { ComplimentRepository } from '../repository/ComplimentRepository';

interface IListUserComplimentsReceivedServiceRequest {
  user_receiver: string;
}

class ListUserComplimentsReceivedService {

  async execute({ user_receiver }: IListUserComplimentsReceivedServiceRequest) {
    return instanceToPlain(await ComplimentRepository.find({
      where: {
        user_receiver
      },
      relations: ['userSender', 'userReceiver', 'tag']
    }));
  }

}

export { ListUserComplimentsReceivedService }