import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel'
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mock/carMock';
describe('Car Model', () => {
  const carModel = new CarModel()
  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId)

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

});