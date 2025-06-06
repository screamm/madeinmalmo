import type { LoginCredentials, NewUser, User } from "../types/user_types"
import * as mimAPI from "./MIM_Api"

export const registerUser = (userData: NewUser)=> {
    return mimAPI.post<User, NewUser>("/register", userData)
}
export const loginUser = (credentials: LoginCredentials)=> {
    return mimAPI.post<string, Partial<User>>("/login", credentials)
}