import express, { Application, NextFunction, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import router from '@/router';
import swagger from '@utils/swagger';
import errorHandlerMiddleware from '@repository/middlewares/error-handler.middleware';

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', router);
app.use('/api-docs', swagger);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(`
    <h1>API prefix: <a href='/api/v1'>/api/v1</a></h1>
    <h1>Swagger: <a href='/api-docs'>/api-docs</a></h1>
    <h1>Import swagger.json to Postman: <a href='/api-docs/swagger.json'>/api-docs/swagger.json</a> </h1>
  `);
});
app.use(errorHandlerMiddleware);

export default app;
