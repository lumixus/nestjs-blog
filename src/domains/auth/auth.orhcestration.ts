import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { UserService } from "../user/user.service";
import { AuthLoginReqDto } from "src/models/dto/Request/AuthReqDto";
import { AuthLoginResDto, AuthRegisterResDto } from "src/models/dto/Response/AuthResDto";
import { comparePassword, createSessionTokens } from "src/utils/auth";
import { AuthRegisterReqDto } from "src/models/dto/Request/AuthReqDto";

@Injectable()
export class AuthOrchestration {
    constructor(
        private readonly userService: UserService,
    ){}

    async login(authLoginReqDto: AuthLoginReqDto): Promise<AuthLoginResDto> {
        const user = await this.userService.findByEmail(authLoginReqDto.email);

        if(!user) {
            throw new HttpException({message: "Credentials are not valid!"}, HttpStatus.UNPROCESSABLE_ENTITY);
        };

        const isPasswordMatched = comparePassword(authLoginReqDto.password, user.password);

        if(!isPasswordMatched){
            throw new HttpException({message: "Credentials are not valid!"}, HttpStatus.UNPROCESSABLE_ENTITY);
        };

        const sessionTokens = {
            accessToken: createSessionTokens(user),
            refreshToken: createSessionTokens(user),
        };

        return sessionTokens;
    }

    async register(authRegisterReqDto: AuthRegisterReqDto): Promise<AuthRegisterResDto> {
        const user = await this.userService.findByEmail(authRegisterReqDto.email);

        if(user) {
            throw new HttpException({message: "Email already exists!"}, HttpStatus.UNPROCESSABLE_ENTITY);
        };

        const newUser = await this.userService.createUser(authRegisterReqDto);

        const sessionTokens = {
            accessToken: createSessionTokens(newUser),
            refreshToken: createSessionTokens(newUser),
        };

        return sessionTokens;
    }
}