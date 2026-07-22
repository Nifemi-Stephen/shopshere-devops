import bcrypt from "bcrypt";

import {
    createUser,
    findUserByEmail,
    updateRefreshToken,
    clearRefreshToken,
} from "../repositories/userRepository.js";

import {
    generateAccessToken,
    generateRefreshToken,
} from "../utils/jwt.js";

const SALT_ROUNDS = 12;

export async function register(data) {
    const existingUser = await findUserByEmail(data.email);

    if (existingUser) {
        throw new Error("Email already registered.");
    }

    const passwordHash = await bcrypt.hash(
        data.password,
        SALT_ROUNDS
    );

    const user = await createUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        passwordHash,
    });

    return user;
}

export async function login(data) {
    const user = await findUserByEmail(data.email);

    if (!user) {
        throw new Error("Invalid email or password.");
    }

    const passwordMatches = await bcrypt.compare(
        data.password,
        user.passwordHash
    );

    if (!passwordMatches) {
        throw new Error("Invalid email or password.");
    }

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    await updateRefreshToken(user.id, refreshToken);

    return {
        accessToken,
        refreshToken,
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isEmailVerified: user.isEmailVerified,
        },
    };
}

export async function logout(userId) {
    await clearRefreshToken(userId);

    return {
        message: "Logged out successfully.",
    };
}