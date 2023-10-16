import { Inject, Injectable } from "@nestjs/common";
import { Collection, Db } from "mongodb";
import { User } from "src/models/entities/User";
import { hashPassword } from "src/utils/auth";


@Injectable()
export class UserRepository {
    private userCollection: Collection<User>;
    constructor(@Inject('MONGO_INJECTION') private database: Db){
        this.userCollection = this.database.collection<User>('users');
    }

    async listUsers(): Promise<User[]> {
        const users = await this.userCollection.find().toArray();
        return users;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.userCollection.findOne({email: email});
        return user;
    }

    async createUser(user: User): Promise<User> {
        user.password = hashPassword(user.password);
        const newUser = await this.userCollection.insertOne(user);

        return this.userCollection.findOne(newUser.insertedId);
    }

}