import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'src/models/entities/user';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){
  }

  async listUsers(): Promise<User[]> {
    return [];
    return this.userRepository.listUsers();
  }


  async createUser(user: User): Promise<User> {

    if(this.userRepository.findByEmail(user.email)){
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }

    return this.userRepository.createUser(user);
  }
}
