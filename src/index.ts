import app from './app';
import logger from '@utils/logger';
import { PORT } from './config';

app
  .listen(PORT, () => {
    logger.info(`Server listening at ${PORT}`);
  })
  .on('error', (e) => logger.error(e));
