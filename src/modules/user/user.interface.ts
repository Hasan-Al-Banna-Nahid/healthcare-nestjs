import { Speciality } from 'generated/prisma/client';
import { Gender } from 'generated/prisma/enums';

export interface ICreateDoctor {
  password: string;
  doctor: {
    name: string;
    email: string;
    profilePhoto: string;
    contactNumber: string;
    phone: string;
    address: string;
    registrationNumber: string;
    experience: number;
    appointmentFee: number;
    qualification: string;
    currentHospital: string;
    specialization: string;
    designation: string;
    gender: Gender;
  };
  speciality: string[];
}
