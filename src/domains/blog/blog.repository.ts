import { Inject, Injectable } from "@nestjs/common";
import { Collection, Db, ObjectId } from "mongodb";
import { Blog } from "src/models/entities/Blog";



@Injectable()
export class BlogRepository {
    private blogCollection: Collection<Blog>;

    constructor(@Inject('MONGO_INJECTION') private database: Db){
        this.blogCollection = this.database.collection<Blog>('blogs');
    }


    async listBlogs(): Promise<Blog[]> {
        const blogs = await this.database.collection<Blog>('blogs').find().toArray();
        return blogs;
    }

    async getBlog(id: string): Promise<Blog> {
        const blog = this.blogCollection.findOne({_id: new ObjectId(id)});
        return blog;
    }

    async newBlog(blog: Blog): Promise<Blog> {
        const newBlog = await this.blogCollection.insertOne(blog);

        return this.blogCollection.findOne(newBlog.insertedId);
    }
}