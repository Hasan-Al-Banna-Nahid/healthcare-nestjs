import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { auth } from 'src/lib/auth';
import { prisma } from 'src/lib/prisma';

interface IUserRegistration {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthRepository {
  async registerUser(payload: IUserRegistration) {
    const { name, email, password } = payload;

    try {
      const authData = await auth.api.signUpEmail({
        body: { name, email, password },
      });

      if (!authData || !authData.user) {
        throw new BadRequestException(
          'User registration failed in Auth System',
        );
      }

      const result = await prisma.$transaction(async (tx) => {
        const patientProfile = await tx.patient.create({
          data: {
            name: authData.user.name || name,
            email: authData.user.email || email,
            userId: authData.user.id,
          },
        });

        return {
          user: authData.user,
          patient: patientProfile,
        };
      });

      return result;
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException(
        'An unexpected error occurred during registration',
      );
    }
  }

  async loginUser(payload: { email: string; password: string }) {
    const { email, password } = payload;

    const loginData = await auth.api.signInEmail({
      body: { email, password },
    });

    if (!loginData || !loginData.user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return loginData;
  }
}
