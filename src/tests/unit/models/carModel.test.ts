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
    sinon.stub(Model, 'findOne').resolves(carMockWithId)
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId)
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId)
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

  describe('searching a car', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('updating a car', () => {
		it('successfully updated', async () => {
			const carFound = await carModel.update('62cf1fc6498565d94eba52cd', carMock);
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.update('123ERRADO', carMock);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('deleting a car', () => {
		it('successfully deleted', async () => {
			const carFound = await carModel.delete('62cf1fc6498565d9');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.delete('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

});