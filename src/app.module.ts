import { Module } from '@nestjs/common';
import { SpecialitiesModule } from './modules/specialities/specialities.module';

@Module({
  imports: [SpecialitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
