import express from "express";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes/index.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

/*
|--------------------------------------------------------------------------
| Security
|--------------------------------------------------------------------------
*/

app.use(helmet());

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "*",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
|--------------------------------------------------------------------------
| Operational Endpoints
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
    return res.status(200).json({
        service: "auth-service",
        description: "ShopVerse Authentication Service",
        status: "running",
        version: process.env.APP_VERSION || "1.0.0",
        timestamp: new Date().toISOString(),
    });
});

app.get("/health", (req, res) => {
    return res.status(200).json({
        status: "UP",
        service: "auth-service",
        timestamp: new Date().toISOString(),
    });
});

app.get("/ready", (req, res) => {
    return res.status(200).json({
        status: "READY",
    });
});

app.get("/version", (req, res) => {
    return res.status(200).json({
        service: "auth-service",
        version: process.env.APP_VERSION || "1.0.0",
    });
});

/*
|--------------------------------------------------------------------------
| Business API
|--------------------------------------------------------------------------
*/

app.use("/api", routes);

/*
|--------------------------------------------------------------------------
| Error Handling
|--------------------------------------------------------------------------
*/

app.use(notFound);

app.use(errorHandler);

export default app;