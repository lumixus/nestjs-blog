import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongoModule } from '../mongo/mongo.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [MongoModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})
export class UserModule {}
