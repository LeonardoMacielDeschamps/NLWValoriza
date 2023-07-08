import { instanceToPlain } from 'class-transformer';
import { UserRepository } from '../repository/UserRepository';

class ListUsersService {

  async execute() {
    return instanceToPlain(await UserRepository.find());
  }

}

export { ListUsersService }