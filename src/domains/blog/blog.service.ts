import { Injectable } from '@nestjs/common';
import { Blog } from 'src/models/entities/Blog';
import { BlogRepository } from './blog.repository';

@Injectable()
export class BlogService {
  constructor(private readonly blogRepository: BlogRepository){}

  listBlogs(): Promise<Blog[]> {
    return this.blogRepository.listBlogs();
  }

  getBlog(id: string): Promise<Blog> {
    return this.blogRepository.getBlog(id);
  }

  newBlog(blog: Blog): Promise<Blog> {
    return this.blogRepository.newBlog(blog);
  }
}
