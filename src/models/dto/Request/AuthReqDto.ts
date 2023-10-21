import { User, UserRoles } from "src/models/entities/User";

export class AuthLoginReqDto {
    email: string;
    password: string;
}

export class AuthRegisterReqDto {
    email: string;
    password: string;
    username: string;
    role: string;
}