import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/index.js';
import { requestId } from './middleware/requestId.js';
import { requestLogger } from './middleware/requestLogger.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(requestId);

app.use(requestLogger);

app.use(routes);

app.use(notFound);

app.use(errorHandler);

export default app;