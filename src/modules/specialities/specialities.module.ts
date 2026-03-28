import { Module } from '@nestjs/common';
import { SpecialitiesController } from './specialities.controller';
import { SpecialitiesRepository } from './specialities.repo';

@Module({
  controllers: [SpecialitiesController],
  providers: [SpecialitiesRepository],
  exports: [SpecialitiesRepository],
})
export class SpecialitiesModule {}
