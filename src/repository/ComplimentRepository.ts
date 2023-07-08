import { AppDataSource } from '../database';
import { Compliment } from '../entity/Compliment';

const ComplimentRepository = AppDataSource.getRepository(Compliment);

export { ComplimentRepository }