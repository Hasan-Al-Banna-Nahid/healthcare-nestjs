import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AuthRepository } from './auth.repo';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AuthRepository)
    private readonly authRepository: AuthRepository,
  ) {}
  @Post('/register')
  async registerUser(@Body() payload: any) {
    const result = await this.authRepository.registerUser(payload);
    return result;
  }
  @Get('/login')
  async loginUser(@Body() payload: any) {
    const result = await this.authRepository.loginUser(payload);
    return result;
  }
}
