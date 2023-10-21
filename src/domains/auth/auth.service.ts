import { Injectable } from '@nestjs/common';
import { User } from 'src/models/entities/User';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository){}

  async upsertTokens(user: User): Promise<void> {
    return this.authRepository.upsertTokens(user);
  }

}
