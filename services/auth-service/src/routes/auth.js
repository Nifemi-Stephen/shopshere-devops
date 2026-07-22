import { Router } from "express";

import {
    registerController,
    loginController,
    logoutController,
    profileController,
} from "../controllers/authController.js";

import { authenticate } from "../middleware/authenticate.js";

const router = Router();

/**
 * Public Routes
 */
router.post("/register", registerController);

router.post("/login", loginController);

/**
 * Protected Routes
 */
router.post("/logout", authenticate, logoutController);

router.get("/me", authenticate, profileController);

export default router;