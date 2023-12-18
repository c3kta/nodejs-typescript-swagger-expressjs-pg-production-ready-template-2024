import express, { NextFunction, Request, Response } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { VERSION } from '@/config';

const swaggerOptions: swaggerUI.SwaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger',
      description: 'Swagger API documentation',
      version: VERSION,
    },
    servers: [
      {
        url: '/api/v1',
        description: 'Main api server',
      },
    ],
  },
  apis: ['./documentation/*.yaml'],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

const router = express.Router();

router.get(
  '/swagger.json',
  (req: Request, res: Response, next: NextFunction) => {
    res.json(swaggerSpec);
  },
);

router.use(swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export default router;
