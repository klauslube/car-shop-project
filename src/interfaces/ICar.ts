import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().min(4).int(),
  seatsQty: z.number().gte(2).lte(7),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };