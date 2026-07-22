import prisma from "../config/database.js";

export async function createUser(userData) {
    return prisma.user.create({
        data: userData,
    });
}

export async function findUserByEmail(email) {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

export async function findUserById(id) {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
}

export async function updateRefreshToken(id, refreshToken) {
    return prisma.user.update({
        where: {
            id,
        },
        data: {
            refreshToken,
        },
    });
}

export async function clearRefreshToken(id) {
    return prisma.user.update({
        where: {
            id,
        },
        data: {
            refreshToken: null,
        },
    });
}