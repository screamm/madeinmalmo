/**
 * Main application routes
 */
import express from "express";
import { newUserRules } from "../validations/auth_rules";
import { requestValidator } from "../middlewates/request_validator";
import { login, register } from "../controllers/auth_controller";
import { loginRules } from "../validations/login_rules";

const router = express.Router();

// default handler for posting requests
router.get("/", (_req, res) => {
	res.send({
		message: "But first, let me take a selfie 🤳 https://www.youtube.com/watch?v=kdemFfbS5H0",
	});
});


// route needs to pass validation rules, check if there is any validation errors
router.post("/register",newUserRules, requestValidator ,register);

//login route, validations and if there is a successful login-attempt, an JWT-access token is provided
router.post("/login",loginRules,requestValidator, login);


// if no requests match, catch them with a 404 not found
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
