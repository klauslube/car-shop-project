import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;
import { ZodError } from "zod";
import CarModel from "../../../models/CarModel";
import CarService from "../../../services/CarService";
import { carMockWithId, carMock, carArrayMock } from "../../mock/carMock";
import {ErrorTypes} from '../../../errors/catalog'

describe("Car Service", () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, "create").resolves(carMockWithId);
    sinon.stub(carModel, "read").resolves(carArrayMock);
		sinon.stub(carModel, 'readOne')
		.onCall(0).resolves(carMockWithId) 
		.onCall(1).resolves(null); 
  });

  after(() => {
    sinon.restore();
  });

  describe("Create new Car", () => {
    it("Success", async () => {
      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it("Failure", async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe("Search all Cars", () => {
    it("On Success", async () => {
      const allCars = await carService.read();

      expect(allCars).to.be.deep.equal(carArrayMock);
    });
  });

	describe("Search a Car", () => {
    it("On Success", async () => {
      const carCreated = await carService.readOne(carMockWithId._id);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it("On Failure", async () => {
      let error;
      try {
        await carService.readOne(carMockWithId._id);
      } catch (err:any) {
        error = err;
      }
      expect(error).to.be.instanceOf(Error);
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });

});
