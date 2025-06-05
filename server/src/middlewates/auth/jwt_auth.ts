import jwt, { TokenExpiredError } from "jsonwebtoken";
import { JwtaccessTokenPayload} from "../../types/jwt_types";
import { Request, Response, NextFunction } from "express";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;

export const validateAuthHeader = (req: Request, res: Response, next: NextFunction)=> {
    if (!req.headers.authorization) {
        res.status(401).send({ status: "fail", data: {message: "Authorization denied" }});
        return;
    }
    const [authType, access_token] = req.headers.authorization.split(" ");
    if (authType.toLowerCase() !== "bearer") {
        res.status(401).send({ status: "fail", data: {message: "Authorization denied" }});
        return;
    }
    if (!access_token) {
        res.status(401).send({ status: "fail", data: {message: "Authorization denied" }});
        return;
    }
    if (!ACCESS_TOKEN) {
        res.status(500).send({status: "error", message: "Access Token is missing"});
        return;
    }
    try {
        const jwt_payload = jwt.verify(access_token, ACCESS_TOKEN) as JwtaccessTokenPayload;
        if (jwt_payload) {
            req.user = {
                id: jwt_payload.id,
                email: jwt_payload.email,
                first_name: jwt_payload.first_name,
                last_name: jwt_payload.last_name,
            }
            next();
        }
    }
    catch (err){
        		// if token has expired, let the user know
		if (err instanceof TokenExpiredError) {
			res.status(401).send({ status: "fail", data: {message: "Access token has expired" }});
			return;
		}

		res.status(401).send({ status: "fail", data: {message: "Authorization denied" }});
		return;

    }

}
