import { Body, Controller, Post } from '@nestjs/common';

import { AuthLoginReqDto, AuthRegisterReqDto } from 'src/models/dto/Request/AuthReqDto';
import { AuthOrchestration } from './auth.orhcestration';
import { AuthLoginResDto, AuthRegisterResDto } from 'src/models/dto/Response/AuthResDto';

@Controller("auth")
export class AuthController {
  constructor(private readonly authOrchestration: AuthOrchestration) {}

  @Post("email/login")
  async login(@Body() authLoginReqDto: AuthLoginReqDto): Promise<AuthLoginResDto> {
    return this.authOrchestration.login(authLoginReqDto);
  }

  @Post("email/register")
  async register(@Body() authRegisterReqDto: AuthRegisterReqDto): Promise<AuthRegisterResDto> {
    return this.authOrchestration.register(authRegisterReqDto);
  }

}

