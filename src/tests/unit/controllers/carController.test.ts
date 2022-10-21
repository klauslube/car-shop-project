import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel'
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carMockWithId, carMock } from '../../mock/carMock';
import { NextFunction, Request, Response } from 'express';

describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request; 
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore()
  })

  describe('Create new Car', () => {
    it('Success', async () => {
      sinon.stub(carService, 'create').resolves(carMock);
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });
});