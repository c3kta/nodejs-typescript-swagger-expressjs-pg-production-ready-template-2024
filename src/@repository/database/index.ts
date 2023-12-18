import { Pool } from 'pg';
import { DB_HOST, DB_MAIN_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '@/config';

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_MAIN_NAME,
  host: DB_HOST,
  port: DB_PORT,
});

export default pool;
