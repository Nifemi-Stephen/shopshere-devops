import "dotenv/config";

import app from "./app.js";

const PORT = Number(process.env.PORT) || 3001;

const server = app.listen(PORT, () => {
    console.log(`
=========================================
🚀 ShopVerse Auth Service Started
=========================================
Environment : ${process.env.NODE_ENV || "development"}
Port        : ${PORT}
Health      : http://localhost:${PORT}/health
API         : http://localhost:${PORT}/api
=========================================
`);
});

function shutdown(signal) {
    console.log(`\n${signal} received. Shutting down gracefully...`);

    server.close(() => {
        console.log("HTTP server closed.");
        process.exit(0);
    });

    setTimeout(() => {
        console.error("Forced shutdown.");
        process.exit(1);
    }, 10000);
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));