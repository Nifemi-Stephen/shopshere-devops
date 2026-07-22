import { ZodError } from "zod";

export function errorHandler(err, req, res, next) {
    console.error(err);

    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation failed.",
            errors: err.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
            })),
        });
    }

    if (err.message === "Email already registered.") {
        return res.status(409).json({
            success: false,
            message: err.message,
        });
    }

    if (err.message === "Invalid email or password.") {
        return res.status(401).json({
            success: false,
            message: err.message,
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal server error.",
    });
}