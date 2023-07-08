import { instanceToPlain } from 'class-transformer';
import { TagRepository } from '../repository/TagRepository'

class ListTagsService {

  async execute() {
    return instanceToPlain(await TagRepository.find());
  }

}

export { ListTagsService }