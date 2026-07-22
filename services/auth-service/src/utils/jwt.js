import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const ACCESS_TOKEN_EXPIRY =
    process.env.JWT_EXPIRES_IN || "15m";

const REFRESH_TOKEN_EXPIRY =
    process.env.REFRESH_TOKEN_EXPIRES_IN || "7d";

export function generateAccessToken(user) {
    return jwt.sign(
        {
            sub: user.id,
            email: user.email,
        },
        JWT_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY,
        }
    );
}

export function generateRefreshToken(user) {
    return jwt.sign(
        {
            sub: user.id,
        },
        JWT_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY,
        }
    );
}

export function verifyAccessToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

