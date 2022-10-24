import * as sinon from "sinon";
import chai from "chai";
const { expect } = chai;
import CarModel from "../../../models/CarModel";
import CarService from "../../../services/CarService";
import CarController from "../../../controllers/CarController";
import { carMockWithId, carMock, carArrayMock, carMockChangeWithId, carMockChange } from "../../mock/carMock";
import { NextFunction, Request, Response } from "express";

describe("Car Controller", () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Create new Car", () => {
    it("On Success", async () => {
      sinon.stub(carService, "create").resolves(carMock);
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe("Search all Cars", () => {
    it("On Success", async () => {
      sinon.stub(carService, "read").resolves(carArrayMock);

      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carArrayMock)).to.be.true;
    });
  });
  
  describe("Search a Car ", () => {
    it("On Success", async () => {
      sinon.stub(carService, "readOne").resolves(carMock);

      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });

    it("On Failure", async () => {
      sinon.stub(carService, "readOne").resolves(carMock);
      
      req.params = { id: '123Errado' };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(400))
      expect((res.json as sinon.SinonStub).calledWith('Id must have 24 hexadecimal characters'))
    })
  });

  describe("Update a Car", () => {
    it("On Success", async () => {
      sinon.stub(carService, "update").resolves(carMockChangeWithId);

      req.params = { id: carMockWithId._id };
      await carController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockChangeWithId)).to.be.true;
    });
  })

  describe("Delete a Car", () => {
    it("On Success", async () => {
      sinon.stub(carService, "delete").resolves(carMockWithId);

      req.params = { id: carMockWithId._id };
      await carController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  })
});
