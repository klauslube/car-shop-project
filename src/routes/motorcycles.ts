import { Router } from 'express';
import MotorCycleController from '../controllers/MotorCycleController';
import MotorCycleModel from '../models/MotorCycleModel';
import MotorCycleService from '../services/MotorCycleService';

const route = Router();

const motorCycle = new MotorCycleModel();
const motorCycleService = new MotorCycleService(motorCycle);
const motorCycleController = new MotorCycleController(motorCycleService);

route.post('/', (req, res) => motorCycleController.create(req, res));
route.get('/:id', (req, res) => motorCycleController.readOne(req, res));
route.get('/', (req, res) => motorCycleController.read(req, res));
route.put('/:id', (req, res) => motorCycleController.update(req, res));
route.delete('/:id', (req, res) => motorCycleController.delete(req, res));

export default route;