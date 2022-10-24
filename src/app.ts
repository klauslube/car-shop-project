import express from 'express';
import errorHandler from './middlewares/errors';
import carRouter from './routes/cars';
import motorCycleRouter from './routes/motorcycles';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorCycleRouter);
app.use(errorHandler);

export default app;
