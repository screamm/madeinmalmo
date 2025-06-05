import { User } from "@prisma/client";
export type newUser = Omit<User, "id">;

export type AuthedUser = Omit<User, "password">

export type UpdateUserData = Partial<newUser>
