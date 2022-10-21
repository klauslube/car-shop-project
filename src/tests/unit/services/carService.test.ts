import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { ZodError } from 'zod';
import CarModel from '../../../models/CarModel'
import CarService from '../../../services/CarService';
import { carMockWithId, carMock } from '../../mock/carMock';

describe('Car Service', () => {
const carModel = new CarModel();
const carService = new CarService(carModel)

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create new Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
				await carService.create({});
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});
	});

});