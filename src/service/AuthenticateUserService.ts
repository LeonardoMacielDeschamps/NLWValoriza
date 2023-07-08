import { compare } from 'bcryptjs';
import { UserRepository } from '../repository/UserRepository';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateUserRequest) {
    const user = await UserRepository.findOneBy({ email });

    if (!user || !await compare(password, user.password)) {
      throw new Error('Incorrect e-mail/password');
    }

    const tokenPayload = {
      email: user.email
    };

    const tokenSecret = 'ec2da23874ad5af9a34fc364539a2b49';

    const tokenOptions = {
      subject: user.id,
      expiresIn: '1d'
    };

    return sign(tokenPayload, tokenSecret, tokenOptions);
  }

}

export { AuthenticateUserService }