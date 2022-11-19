import { Car } from "./Car";

class TripComputer {
  private car!: Car;

  setCar(car: Car): void {
    this.car = car;
  }

  showFuelLevel(): void {
    console.log("Fuel level: " + this.car.getFuel());
  }

  showStatus(): void {
    if (this.car.getEngine().isStarted()) {
      console.log("Car is started");
    } else {
      console.log("Car isn't started");
    }
  }
}

export { TripComputer };
