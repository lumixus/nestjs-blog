import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './domains/blog/blog.module';
import { UserModule } from './domains/user/user.module';
import { MongoModule } from './domains/mongo/mongo.module';

@Module({
  imports: [BlogModule, UserModule, MongoModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
