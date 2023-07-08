import { AppDataSource } from '../database';
import { Tag } from '../entity/Tag';

const TagRepository = AppDataSource.getRepository(Tag);

export { TagRepository }