import dotenv from 'dotenv';

dotenv.config();

/* APPLICATION CONFIGURATION */
export const PORT = process.env.PORT ?? 8000;
export const VERSION = process.env.VERSION ?? '1.0.0';
export const NODE_ENV = process.env.NODE_ENV ?? 'development';

/* DATABASE CONFIGURATION */
export const DB_USER = process.env.DB_USER ?? 'admin';
export const DB_PASSWORD = process.env.DB_PASSWORD ?? 'password';
export const DB_HOST = process.env.DB_HOST ?? 'localhost';
export const DB_PORT = +process.env.DB_PORT ?? 5432;
export const DB_MAIN_NAME = process.env.DB_MAIN_NAME ?? 'database';
