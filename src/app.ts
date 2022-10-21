import express from 'express';
import errorHandler from './middlewares/errors';
import carRouter from './routes/cars';

const app = express();
app.use(express.json());
app.use(carRouter);
app.use(errorHandler);

export default app;
