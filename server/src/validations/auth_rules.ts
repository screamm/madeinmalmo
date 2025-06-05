import { body } from "express-validator";
import { getUserByEmail } from "../services/user_services";
export const emailAlreadyRegistered = async (value: string) =>{
    const user = await getUserByEmail(value);
    if (user) {
        throw new Error("Email is already registered to a user!");
    }
}
export const newUserRules = [
    body("email")
        .trim().isEmail().withMessage("A valid email is required.").bail()
        .custom(emailAlreadyRegistered),
    body("password")
        .isString().withMessage("Needs to be a valid string!").bail()
        .isLength({min: 6, max: 191}).withMessage("Password needs to contain atleast 6 characters"),
    body("first_name")
        .isString().withMessage("Needs to be a valid string!").bail()
        .isLength({min: 3}).withMessage("Firstname should include atleast 3 chars."),
    body("last_name")
        .isString().withMessage("Needs to be a valid string!").bail()
        .isLength({min: 3}).withMessage("Lastname should include atleast 3 chars."),
];
