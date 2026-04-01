import { Injectable } from '@nestjs/common';
import { prisma } from 'src/lib/prisma';
import { ICreateDoctor } from './user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserRepository {
  async findSpecialitiesByIds(ids: string[]) {
    const result = await prisma.speciality.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    console.log(result);
    return result || [];
  }

  async createDoctor(payload: ICreateDoctor) {
    const { password, doctor, speciality: specialityIds } = payload;

    return await prisma.$transaction(async (tx) => {
      const newDoctor = await tx.doctor.create({
        data: {
          name: doctor.name,
          email: doctor.email,
          profilePhoto: doctor.profilePhoto,
          contactNumber: doctor.contactNumber,
          phone: doctor.phone,
          address: doctor.address,
          registrationNumber: doctor.registrationNumber,
          experience: doctor.experience,
          appointmentFee: doctor.appointmentFee,
          qualification: doctor.qualification,
          currentHospital: doctor.currentHospital,
          specialization: doctor.specialization,
          designation: doctor.designation,
          user: {
            create: {
              id: uuidv4(),
              name: doctor.name,
              email: doctor.email,
              password: password,
              role: 'DOCTOR',
            },
          },
          specialities: {
            create: specialityIds.map((id) => ({
              specialityId: id,
            })),
          },
        },
        include: {
          specialities: true,
          user: true,
        },
      });
      return newDoctor;
    });
  }
}
