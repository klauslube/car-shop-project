import {ICar} from '../../interfaces/ICar'

const carMock:ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 4,
  doorsQty: 4
};

const carMockWithId:ICar & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 4,
  doorsQty: 4
};

const carArrayMock:ICar[] = [
  {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 4,
    doorsQty: 4
  },
  {
    model: "Ford Fusion",
    year: 2012,
    color: "silver",
    buyValue: 1500000,
    seatsQty: 5,
    doorsQty: 4
  },
]

const carMockChange: ICar = {
  model: "Ferrari Maranello v2.0",
  year: 1961,
  color: "red",
  buyValue: 3500000,
  seatsQty: 4,
  doorsQty: 4
}

const carMockChangeWithId: ICar & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: "Ferrari Maranello v2.0",
  year: 1961,
  color: "red",
  buyValue: 3500000,
  seatsQty: 4,
  doorsQty: 4
}

export { carMock, carMockWithId, carArrayMock, carMockChange, carMockChangeWithId };