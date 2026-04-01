import { Module } from '@nestjs/common';
import { SpecialitiesModule } from './modules/specialities/specialities.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [SpecialitiesModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
