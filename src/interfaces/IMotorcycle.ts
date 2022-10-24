import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorCycleZodSchema = VehicleZodSchema.extend({
  category: z.enum([
    'Street',
    'Custom',
    'Trail',
  ]),
  engineCapacity: z.number().int().positive().lte(2500),
});

export type IMotorcycle = z.infer<typeof MotorCycleZodSchema>;

export { MotorCycleZodSchema };