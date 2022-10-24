import { IService } from '../interfaces/IService';
import { IMotorcycle, MotorCycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';
import 'express-async-errors';

export default class MotorCycleService implements IService<IMotorcycle> {
  private _motorCycle:IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._motorCycle = model;
  }

  public async create(obj:unknown):Promise<IMotorcycle> {
    const parsed = MotorCycleZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motorCycle.create(parsed.data);
  }

  public async readOne(_id:string):Promise<IMotorcycle> {
    const motorCycle = await this._motorCycle.readOne(_id);
    if (!motorCycle) throw new Error(ErrorTypes.EntityNotFound);
    return motorCycle;
  }

  public async read():Promise<IMotorcycle[]> {
    const motorCycle = await this._motorCycle.read();
    return motorCycle;
  }

  public async update(_id:string, obj:unknown):Promise<IMotorcycle> {
    const parsed = MotorCycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    
    const motorCycle = await this._motorCycle.update(_id, parsed.data);
    if (!motorCycle) throw new Error(ErrorTypes.EntityNotFound);
    
    return motorCycle;
  }

  public async delete(_id:string):Promise<IMotorcycle> {
    const deletedMotorCycle = await this._motorCycle.delete(_id);
    if (!deletedMotorCycle) throw new Error(ErrorTypes.EntityNotFound);
    return deletedMotorCycle;
  }
}