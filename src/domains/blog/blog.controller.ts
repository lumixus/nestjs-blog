import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from 'src/models/entities/Blog';

@Controller("blogs")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get("/")
  listBlogs(): Promise<Blog[]> {
    return this.blogService.listBlogs();
  }

  @Get(":id")
  getBlog(@Param('id') id: string): Promise<Blog> {
    return this.blogService.getBlog(id);
  }

  @Post("/new")
  newBlog(@Body() body: Blog) {
    return this.blogService.newBlog(body);
  }
}

