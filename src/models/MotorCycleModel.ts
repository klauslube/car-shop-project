import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorCycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,

}, { versionKey: false });

class MotorCycle extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('MotorCycle', motorCycleMongooseSchema)) {
    super(model);
  }
}

export default MotorCycle;