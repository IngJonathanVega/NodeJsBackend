import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string().optional(),
  email: z.string().email(),
  status: z.enum(['Happy', 'Sad']),
  phoneNumbers: z.array(z.string())
})
