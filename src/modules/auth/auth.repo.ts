import { Injectable } from '@nestjs/common';
import { auth } from 'src/lib/auth';
import { prisma } from 'src/lib/prisma';

interface IUserRegistration {
  name: string;
  email: string;
  password: string;
}

type User = IUserRegistration;
@Injectable()
export class AuthRepository {
  // Implement authentication related database operations here
  async registerUser(payload: User) {
    const { name, email, password } = payload;
    const data = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    if (!data.user) {
      throw new Error('User registration failed');
    }
    const patient = prisma.$transaction(async (tx) => {
      const createdUser = await tx.patient.create({
        data: {
          name,
          email,
          password,
        },
      });
      return createdUser;
    });
    return patient;
  }
}
