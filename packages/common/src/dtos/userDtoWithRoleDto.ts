import { userSchema } from "../schemas";

export type userDtoWithRoleDto = ReturnType<typeof userSchema.parse>