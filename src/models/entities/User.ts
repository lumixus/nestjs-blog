export enum UserRoles {
    ADMIN = 'admin',
    READER = 'reader'
}


export class User {
    _id?: string;
    username: string;
    email: string;
    password: string;
    role: string;
}