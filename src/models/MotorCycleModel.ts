import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorCycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorCycleMongooseSchema = new Schema<IMotorCycle>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,

}, { versionKey: false });

class MotorCycle extends MongoModel<IMotorCycle> {
  constructor(model = mongooseCreateModel('MotorCycle', motorCycleMongooseSchema)) {
    super(model);
  }
}

export default MotorCycle;