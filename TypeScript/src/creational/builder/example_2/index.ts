import { CarBuilder } from "./concrete/CarBuilder";
import { CarManualBuilder } from "./concrete/CarManualBuilder";
import { Director } from "./concrete/Director";

const director = new Director();

const builder = new CarBuilder();
director.constructSportsCar(builder);

const car = builder.getResult();
console.log("Car built:\n" + car.getCarType());

const manualBuilder = new CarManualBuilder();
director.constructSportsCar(manualBuilder);

const carManual = manualBuilder.getResult();
console.log("\nCar manual built:\n" + carManual.print());
