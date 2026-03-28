import {
  Body,
  Controller,
  Post,
  Inject,
  Get,
  Delete,
  Param,
  Patch,
  HttpCode,
} from '@nestjs/common';
import { SpecialitiesRepository } from './specialities.repo';

@Controller('specialities')
export class SpecialitiesController {
  constructor(
    @Inject(SpecialitiesRepository)
    private readonly specialitiesService: SpecialitiesRepository,
  ) {}

  @Post()
  @HttpCode(201)
  async createSpeciality(@Body() payload: any) {
    const result = await this.specialitiesService.createSpecialities(payload);
    return result;
  }
  @Get()
  @HttpCode(201)
  async getSpecialities() {
    const result = await this.specialitiesService.getSpecialities();
    return result;
  }
  @Delete(':id')
  @HttpCode(201)
  async deleteSpeciality(@Param('id') id: any) {
    const result = await this.specialitiesService.deleteSpeciality(id);
    return result;
  }
  @Get(':id')
  @HttpCode(201)
  async getSpecialityById(@Param('id') id: any) {
    const result = await this.specialitiesService.getSpecialityById(id);
    return result;
  }
  @Patch(':id')
  @HttpCode(201)
  async updateSpeciality(@Param('id') id: any, @Body() payload: any) {
    const result = await this.specialitiesService.updateSpeciality(id, payload);
    return result;
  }
}
