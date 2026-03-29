import { Module } from '@nestjs/common';
import { SpecialitiesModule } from './modules/specialities/specialities.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [SpecialitiesModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
