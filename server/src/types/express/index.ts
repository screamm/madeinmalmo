/**
 * Extend types inside the Express namespace
 */

import { AuthedUser } from "../user_types";


declare module "express-serve-static-core" {
	interface Request {
		user?: AuthedUser;
	}
}
