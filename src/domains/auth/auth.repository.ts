import { Inject, Injectable } from "@nestjs/common";
import { Collection, Db, ObjectId } from "mongodb";
import { User } from "src/models/entities/User";



@Injectable()
export class AuthRepository {

    constructor(@Inject('MONGO_INJECTION') private database: Db){
    }

    async upsertTokens(user: User): Promise<void> {
    
    }
}