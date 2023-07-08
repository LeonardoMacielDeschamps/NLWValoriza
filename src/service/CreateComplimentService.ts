import { ComplimentRepository } from '../repository/ComplimentRepository';
import { TagRepository } from '../repository/TagRepository';
import { UserRepository } from '../repository/UserRepository';

interface ICreateComplimentRequest {
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, user_receiver, message }: ICreateComplimentRequest) {
    if (!await TagRepository.findOneBy({ id: tag_id })) {
      throw new Error('Tag not found');
    }

    if (!await UserRepository.findOneBy({ id: user_sender })) {
      throw new Error('User sender not found');
    }

    if (user_sender === user_receiver) {
      throw new Error('User sender cannot be same as user receiver');
    }

    if (!await UserRepository.findOneBy({ id: user_receiver })) {
      throw new Error('User receiver not found');
    }

    if (!message) {
      throw new Error('Incorrect message');
    }

    const compliment = ComplimentRepository.create({ tag_id, user_sender, user_receiver, message });

    await ComplimentRepository.save(compliment);

    return compliment;
  }

}

export { CreateComplimentService }