import { Inject, Injectable } from "@nestjs/common";
import { Collection, Db } from "mongodb";

import { AuthRegisterReqDto } from "src/models/dto/Request/AuthReqDto";
import { User, UserRoles } from "src/models/entities/User";
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

    async createUser(authRegisterReqDto: AuthRegisterReqDto): Promise<User> {
        authRegisterReqDto.password = await hashPassword(authRegisterReqDto.password);
        authRegisterReqDto.role = UserRoles.READER.toString();

        const newUser = await this.userCollection.insertOne(authRegisterReqDto);

        const insertedUser = await this.userCollection.findOne({_id: newUser.insertedId});

        return insertedUser;
    }

}