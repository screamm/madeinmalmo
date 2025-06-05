/**
 * Main application routes
 */
import express from "express";
// import { register, login, refresh } from "../controllers/auth_controller";
const router = express.Router();
// import profileRouter from "./profile";
// import photoRouter from "./photos";
// import albumRouter from "./albums";
// import { newUserRules } from "../validations/auth_rules";
// import { requestValidator } from "../middlewares/request_validator";
// import { loginRules } from "../validations/login_rules";
// import { validateAuthHeader } from "../middlewares/auth/jwt_auth";
/**
 * GET /
 */
router.get("/", (_req, res) => {
	res.send({
		message: "But first, let me take a selfie 🤳 https://www.youtube.com/watch?v=kdemFfbS5H0",
	});
});

/**
 * [EXAMPLE] /resource
 */
// router.use('/resource', resourceRouter);
// router.use("/profile",validateAuthHeader, profileRouter);
// router.use("/photos",validateAuthHeader, photoRouter);
// router.use("/albums",validateAuthHeader, albumRouter);
// /**
//  * Collecting all endpoints that has a unique start from `BASEURL`
//  * Route for register
//  * TODO: Validations
//  */
// router.post("/register",newUserRules, requestValidator ,register);
// router.post("/login",loginRules,requestValidator, login);
// router.post("/refresh",refresh)

/**
 * Catch-all route handler
 */

router.use((req, res) => {
	// Respond with 404 and a message in JSON-format
	res.status(404).send({
		status: "fail",
		data: {
			message: `Cannot ${req.method} ${req.path}`,
		}
	});
});

export default router;
