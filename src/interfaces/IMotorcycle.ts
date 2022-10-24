import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorCycleZodSchema = VehicleZodSchema.extend({
  category: z.string(),
  engineCapacity: z.number().lte(2500).int().positive(),
});

type IMotorCycle = z.infer<typeof MotorCycleZodSchema>;

export { IMotorCycle, MotorCycleZodSchema };