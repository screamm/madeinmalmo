import { PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

interface PrismaErrorResponse {
	status_code: number;
	body: {
		status: "error" | "fail";
		message?: string;
		data?: {
			message: string;
		}
	}
}

export const handlePrismaError = (err: unknown): PrismaErrorResponse => {
	if (err instanceof PrismaClientInitializationError) {
		return {
			status_code: 500,
			body: { status: "error", message: "Error initializing connection to database" },
		}

	} else if (err instanceof PrismaClientKnownRequestError) {
		if (err.code === "P2021") {
			return {
				status_code: 500,
				body: { status: "error", message: "Database table does not exist" },
			}

		} else if (err.code === "P2025") {
			return {
				status_code: 404,
				body: { status: "fail", data: { message: "Not Found" }}
			}
		}

	} else if (err instanceof PrismaClientValidationError) {
		return {
			status_code: 400,
			body: { status: "fail", data: { message: "Validation Error" }}
		}

	}

	return {
		status_code: 500,
		body: { status: "error", message: "Something went wrong when querying the database" }
	}
}
