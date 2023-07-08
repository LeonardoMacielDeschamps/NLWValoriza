import { AppDataSource } from '../database';
import { User } from '../entity/User';

const UserRepository = AppDataSource.getRepository(User);

export { UserRepository }