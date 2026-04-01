import {
  Body,
  Controller,
  Post,
  HttpStatus,
  HttpCode,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import type { ICreateDoctor } from './user.interface';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Post('create-doctor')
  @HttpCode(HttpStatus.CREATED)
  async createDoctor(@Body() payload: ICreateDoctor) {
    const result = await this.userService.createDoctor(payload);

    return {
      success: true,
      message: 'Doctor created successfully!',
      data: result,
    };
  }
}
