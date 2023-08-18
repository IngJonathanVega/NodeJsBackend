import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  lastName: z.string(),
  age: z.number(),
  username: z.string().optional(),
  email: z.string().email(),
  status: z.enum(['Happy', 'Sad']),
  phoneNumbers: z.array(z.string())
})
