import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { MongoModule } from '../mongo/mongo.module';
import { BlogRepository } from './blog.repository';

@Module({
  imports: [MongoModule],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository],
})
export class BlogModule {}
