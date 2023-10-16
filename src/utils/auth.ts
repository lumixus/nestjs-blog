import * as bcrypt from 'bcrypt';



export function hashPassword(plainPassword: string) : string {
    return bcrypt.hashSync(plainPassword, parseInt(process.env.HASH_SALT_LENGTH));
}