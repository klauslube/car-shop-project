import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel'
import { Model } from 'mongoose';
import { ICar } from '../../../interfaces/ICar';
import { carArrayMock, carMock, carMockWithId } from '../../mock/carMock';
describe('Car Model', () => {
  const carModel = new CarModel()
  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId)
    sinon.stub(Model, 'find').resolves(carArrayMock)
    

  });

  after(()=>{
    sinon.restore();
  })

  describe('creating a new car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

  describe('searching all cars', () => {
		it('successfully found', async () => {
			const carFound = await carModel.read();
			expect(carFound).to.be.an('array')
			carFound?.forEach((car: ICar, index: number) => {
				expect(car).to.be.deep.equal(carArrayMock[index]);
			})
			expect(carFound?.length).to.be.gt(1)
		});
	});

});