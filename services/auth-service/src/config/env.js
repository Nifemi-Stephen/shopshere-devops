import dotenv from 'dotenv';

dotenv.config();

const env = {
    nodeEnv: process.env.NODE_ENV || 'development',

    port: Number(process.env.PORT) || 3000,

    logLevel: process.env.LOG_LEVEL || 'info',

    services: {
        auth: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
        product: process.env.PRODUCT_SERVICE_URL || 'http://localhost:3002',
        inventory: process.env.INVENTORY_SERVICE_URL || 'http://localhost:3003',
        order: process.env.ORDER_SERVICE_URL || 'http://localhost:3004',
        notification:
            process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3005',
    },
};

export default env;