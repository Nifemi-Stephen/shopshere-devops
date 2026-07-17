import { Router } from 'express';
import {
    getHealth,
    getReady,
} from '../controllers/healthController.js';

const router = Router();

router.get('/health', getHealth);

router.get('/ready', getReady);

export default router;