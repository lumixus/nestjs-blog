import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { User } from 'src/models/entities/User';


export async function comparePassword(plainPassword: string, hash: string) {
    return await bcrypt.compare(plainPassword, hash);
}

export async function hashPassword(plainPassword: string) : Promise<string> {
    return await bcrypt.hash(plainPassword, parseInt(process.env.HASH_SALT_LENGTH));
}

export function createSessionTokens(user: User): string {
    return jwt.sign({
        id: user._id,
        email: user.email,
        username: user.username,
    }, process.env.JWT_SECRET, { expiresIn: '1d'});
}