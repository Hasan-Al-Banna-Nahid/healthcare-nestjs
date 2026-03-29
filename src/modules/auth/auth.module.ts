import { provide } from './../../../node_modules/effect/src/Layer';
import { Controller, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repo';

@Module({
  controllers: [AuthController],
  providers: [AuthRepository],
  exports: [AuthRepository],
})
export class AuthModule {}
