import { includes } from './../../../node_modules/effect/src/RuntimeFlagsPatch';
import { Injectable } from '@nestjs/common';
import { prisma } from '../../lib/prisma';
import { TSpecialitySchema } from './specialities.validation';
@Injectable()
export class SpecialitiesRepository {
  async createSpecialities(
    payload: TSpecialitySchema,
  ): Promise<TSpecialitySchema> {
    const specialty = await prisma.speciality.create({
      data: payload,
    });
    return specialty;
  }
  async getSpecialities(): Promise<TSpecialitySchema[]> {
    const specialties = await prisma.speciality.findMany();
    return specialties;
  }
  async deleteSpeciality(id: any) {
    const deletedSpeciality = await prisma.speciality.update({
      where: {
        id: id,
      },
      data: {
        isDeleted: true,
      },
    });
    return deletedSpeciality;
  }

  async getSpecialityById(id: any): Promise<TSpecialitySchema | null> {
    const speciality = await prisma.speciality.findUnique({
      where: {
        id: id,
      },
    });
    return speciality;
  }
  async updateSpeciality(id: any, payload: any) {
    const updatedSpeciality = await prisma.speciality.update({
      where: {
        id: id,
      },
      data: payload,
    });
    return updatedSpeciality;
  }
}
