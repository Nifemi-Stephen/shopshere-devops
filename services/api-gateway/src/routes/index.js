import { Router } from 'express';

import rootRoutes from './root.js';
import healthRoutes from './health.js';
import versionRoutes from './version.js';
import infoRoutes from './info.js';
import authRoutes from './auth.js';
import productRoutes from './products.js';
import inventoryRoutes from './inventory.js';
import orderRoutes from './orders.js';
import notificationRoutes from './notifications.js';

const router = Router();

router.use(rootRoutes);
router.use(healthRoutes);
router.use('/version', versionRoutes);
router.use('/info', infoRoutes);
router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/products', productRoutes);
router.use('/api/v1/inventory', inventoryRoutes);
router.use('/api/v1/orders', orderRoutes);
router.use('/api/v1/notifications', notificationRoutes);

export default router;