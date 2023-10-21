import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'src/models/entities/User';
import { AuthRegisterReqDto } from 'src/models/dto/Request/AuthReqDto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){
  }

  async listUsers(): Promise<User[]> {
    return [];
    return this.userRepository.listUsers();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findByEmail(email);
  }


  async createUser(authRegisterReqDto: AuthRegisterReqDto): Promise<User> {
    return await this.userRepository.createUser(authRegisterReqDto);
  }
}
