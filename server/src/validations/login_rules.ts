import { body } from "express-validator";


export const loginRules = [
    body("email")
        .isEmail().withMessage("Email is required").bail(),
    body("password")
        .isString().withMessage("Password is required").bail()
        .isLength({min: 6}).withMessage("Minimum 6 chars for password is required."),
]
