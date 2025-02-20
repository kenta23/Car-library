import z from 'zod';


export const schema = z.object({
  carName: z.string().min(5),
  images: z.array(z.instanceof(File)).max(3),
  steeringType: z.enum(['Manual', 'Power']),
  doors: z.coerce.number().min(1),
  transmission: z.enum(['Automatic', 'Manual']),
  ColorOptions: z.array(z.string()),
  dailyRate: z.coerce.number().min(2),
  releaseDate: z.date().default(() => new Date()),
  features: z.string().min(8),
  type: z.string().min(3).max(20),
}); 