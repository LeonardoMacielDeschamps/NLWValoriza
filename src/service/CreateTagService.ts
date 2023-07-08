import { TagRepository } from '../repository/TagRepository';

interface ICreateTagRequest {
  name: string;
}

class CreateTagService {

  async execute({ name }: ICreateTagRequest) {
    if (!name) {
      throw new Error('Incorrect name');
    }

    if (await TagRepository.findOneBy({ name })) {
      throw new Error('Tag already exists');
    }

    const tag = TagRepository.create({ name });

    await TagRepository.save(tag);

    return tag;
  }

}

export { CreateTagService }