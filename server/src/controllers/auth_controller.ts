/**
 * Resource Controller
 */
import { Request, Response } from "express";
import { handlePrismaError } from "../exceptions/prisma";
import bcrypt from "bcrypt";
import { CreateUser, getUserByEmail, getUserById } from "../services/user_services";
import { matchedData } from "express-validator";
import { newUser } from "../types/user_types";
import jwt, { TokenExpiredError } from "jsonwebtoken";
import { JwtaccessTokenPayload, JwtRefreshTokenPayload, Logindata } from "../types/jwt_types";
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 10;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET;

export const register = async (req: Request, res: Response) => {
    const validatedData: newUser = matchedData(req);
    const hashedPassword = await bcrypt.hash(validatedData.password, SALT_ROUNDS);

    try {
        const addUser = await CreateUser({
            ...validatedData,
            password: hashedPassword
        });
		const {id, email, first_name, last_name} = addUser
        res.status(201).send({
            status: "success",
             data: {id, email, first_name, last_name}
        });
    }
    catch (err) {
		const { status_code, body } = handlePrismaError(err);
		res.status(status_code).send(body);
    }
}

export const login = async (req: Request, res: Response) => {
    const validatedData: Logindata = matchedData(req);
    const {email, password} = validatedData;

    const user = await getUserByEmail(email);
    if (!user) {
        res.status(401).send({ status: "fail", data: { message: "Authorization required" }});
        return;
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
        res.status(401).send({ status: "fail", data: { message: "Authorization required" }});
        return;
    }
    const jwt_payload: JwtaccessTokenPayload = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name

    }
    if (!ACCESS_TOKEN) {
        res.status(500).send({status: "error", message: "Access Token is missing"});
        return;
    }
    const access_token = jwt.sign(jwt_payload, ACCESS_TOKEN, {expiresIn: "30min"});

    if (!REFRESH_TOKEN) {
        res.status(500).send({status: "error", message: "Refresh Token is missing"});
        return;
    }
    const refresh_payload: JwtRefreshTokenPayload = {
        id: user.id
    }
    const refresh_token = jwt.sign(refresh_payload, REFRESH_TOKEN, {expiresIn: "1min"});

	res.cookie("refresh_token", refresh_token, {
		httpOnly: true,
		sameSite: "strict",
		path: "/refresh",
	});

    res.send({
        status: "success",
        data: {
            access_token
        }
    });
}

export const refresh = async (req: Request, res: Response) => {
    const refresh_token = (req.cookies as { refresh_token?: string }).refresh_token;
    if (!refresh_token) {
        res.status(401).send({status: "fail", data: {message: "Authorization required"}});
        return;
    }
    if (!REFRESH_TOKEN) {
        res.status(500).send({status: "error", message: "Refresh Token is missing"});
        return;
    }
    let refresh_payload: JwtRefreshTokenPayload;
    try {
        refresh_payload = jwt.verify(refresh_token, REFRESH_TOKEN) as JwtRefreshTokenPayload
    }
    catch (err) {
		// if token has expired, let the user know
		if (err instanceof TokenExpiredError) {
			res.status(401).send({ status: "fail", message: "Refresh token has expired" });
			return;
		}

		res.status(401).send({ status: "fail", message: "Authorization denied" });
		return;
    }
    const user = await getUserById(refresh_payload.id);
    if (!user) {
        res.status(401).send({ status: "fail", message: "Authorization required" });
        return;
    }
    const jwt_payload: JwtaccessTokenPayload = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
    }
    if (!ACCESS_TOKEN) {
        res.status(500).send({status: "error", message: "Access Token is missing"});
        return;
    }
    const access_token = jwt.sign(jwt_payload, ACCESS_TOKEN, {
        expiresIn: "15min",
    });
    res.send({
        status: "success",
        data: {
            access_token
        }
    });
}
