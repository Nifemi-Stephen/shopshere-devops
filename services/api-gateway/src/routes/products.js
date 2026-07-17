import { Router } from 'express';
import { products } from '../controllers/gatewayController.js';

const router = Router();

router.get('/', products);

export default router;