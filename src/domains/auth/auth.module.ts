import { Module } from '@nestjs/common';
import { MongoModule } from '../mongo/mongo.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { UserModule } from '../user/user.module';
import { AuthOrchestration } from './auth.orhcestration';

@Module({
  imports: [MongoModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, AuthOrchestration],
})
export class AuthModule {}
