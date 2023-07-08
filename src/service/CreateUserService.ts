import { hash } from 'bcryptjs';
import { UserRepository } from '../repository/UserRepository';

interface ICreateUserRequest {
  name: string;
  password: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {

  async execute({ name, password, email, admin = false }: ICreateUserRequest) {
    if (!password) {
      throw new Error('Incorrect password');
    }

    if (!email) {
      throw new Error('Incorrect e-mail');
    }

    if (await UserRepository.findOneBy({ email })) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = UserRepository.create({
      name,
      password: passwordHash,
      email,
      admin
    });

    await UserRepository.save(user);

    return user;
  }

}

export { CreateUserService }