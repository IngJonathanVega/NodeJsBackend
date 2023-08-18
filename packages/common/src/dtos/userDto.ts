import { userSchema } from "../schemas";

export type UserDto = ReturnType<typeof userSchema.parse>