import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/entities/User';

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  listUsers(): Promise<User[]> {
    return this.userService.listUsers();
  }
  
  @Post("/new")
  async registerUser(@Body() body: User): Promise<User> {
    return this.userService.createUser(body);
  }
}

