import { z } from 'zod';

export const Speciality = z.object({
  title: z
    .string('Title is required')
    .min(1, 'Title cannot be empty')
    .max(255, 'Title must be within 255 characters'),
  description: z
    .string('Description is required')
    .min(1, 'Description cannot be empty')
    .max(255, 'Description must be within 255 characters'),
  icon: z
    .string('Icon is required')
    .min(1, 'Icon path/name is required')
    .max(255, 'Icon path must be within 255 characters'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  isDeleted: z.boolean().default(false),
  deletedAt: z.date().nullable().optional(),
});
export type TSpecialitySchema = z.infer<typeof Speciality>;
