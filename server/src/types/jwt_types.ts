import { JwtPayload } from "jsonwebtoken"

export interface Logindata {
    email: string,
    password: string
}

export interface JwtaccessTokenPayload extends JwtPayload {
    id: string,
    email: string,
    first_name: string,
    last_name: string,

}
export interface JwtRefreshTokenPayload extends JwtPayload {
	id: string;
}
