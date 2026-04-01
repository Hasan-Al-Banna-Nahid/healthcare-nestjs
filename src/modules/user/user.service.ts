import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repo';
import { ICreateDoctor } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createDoctor(payload: ICreateDoctor) {
    const specialityIds = Array.from(new Set(payload.speciality || []));

    const existingSpecialities =
      await this.userRepository?.findSpecialitiesByIds(specialityIds);
    if (existingSpecialities?.length !== specialityIds.length) {
      throw new BadRequestException('One or more Speciality IDs are invalid');
    }

    return await this.userRepository.createDoctor({
      ...payload,
      speciality: specialityIds,
    });
  }
}
