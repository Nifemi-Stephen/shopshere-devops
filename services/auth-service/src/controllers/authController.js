import {
    register,
    login,
    logout,
} from "../services/authService.js";

import {
    registerSchema,
    loginSchema,
} from "../validators/authValidator.js";

export async function registerController(req, res, next) {
    try {
        const data = registerSchema.parse(req.body);

        const user = await register(data);

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

export async function loginController(req, res, next) {
    try {
        const data = loginSchema.parse(req.body);

        const result = await login(data);

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

export async function logoutController(req, res, next) {
    try {
        const userId = req.user.sub;

        const result = await logout(userId);

        return res.status(200).json({
            success: true,
            ...result,
        });
    } catch (error) {
        next(error);
    }
}

export async function profileController(req, res) {
    return res.status(200).json({
        success: true,
        data: req.user,
    });
}